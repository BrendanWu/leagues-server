from utils import *
from torch.autograd import Variable

import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import torch.utils.data

import numpy as np
import torch

import matplotlib.pyplot as plt


def load_data(base_path="../data"):
    """ Load the data in PyTorch Tensor.

    :return: (zero_train_matrix, train_data, valid_data, test_data)
        WHERE:
        zero_train_matrix: 2D sparse matrix where missing entries are
        filled with 0.
        train_data: 2D sparse matrix
        valid_data: A dictionary {user_id: list,
        user_id: list, is_correct: list}
        test_data: A dictionary {user_id: list,
        user_id: list, is_correct: list}
    """
    train_matrix = load_train_sparse(base_path).toarray()
    valid_data = load_valid_csv(base_path)
    test_data = load_public_test_csv(base_path)

    zero_train_matrix = train_matrix.copy()
    # Fill in the missing entries to 0.
    zero_train_matrix[np.isnan(train_matrix)] = 0
    # Change to Float Tensor for PyTorch.
    zero_train_matrix = torch.FloatTensor(zero_train_matrix)
    train_matrix = torch.FloatTensor(train_matrix)

    return zero_train_matrix, train_matrix, valid_data, test_data


class AutoEncoder(nn.Module):
    def __init__(self, num_question, k=100):
        """ Initialize a class AutoEncoder.

        :param num_question: int
        :param k: int
        """
        super(AutoEncoder, self).__init__()

        # Define linear functions.
        self.g = nn.Linear(num_question, k)
        self.h = nn.Linear(k, num_question)

    def get_weight_norm(self):
        """ Return ||W^1|| + ||W^2||.

        :return: float
        """
        g_w_norm = torch.norm(self.g.weight, 2)
        h_w_norm = torch.norm(self.h.weight, 2)
        return g_w_norm + h_w_norm

    def forward(self, inputs):
        """ Return a forward pass given inputs.

        :param inputs: user vector.
        :return: user vector.
        """

        out = self.g(inputs)
        out = torch.sigmoid(out)
        out = self.h(out)
        out = torch.sigmoid(out)
   
        return out


def train(model, lr, lamb, train_data, zero_train_data, valid_data, num_epoch):
    """ Train the neural network, where the objective also includes
    a regularizer.

    :param model: Module
    :param lr: float
    :param lamb: float
    :param train_data: 2D FloatTensor
    :param zero_train_data: 2D FloatTensor
    :param valid_data: Dict
    :param num_epoch: int
    :return: None
    """
 
    
    # Tell PyTorch you are training the model.
    model.train()

    # Define optimizers and loss function.
    optimizer = optim.SGD(model.parameters(), lr=lr)
    num_student = train_data.shape[0]

    train_losses = []
    valid_losses = []

    for epoch in range(0, num_epoch):
        train_loss = 0.
        valid_loss = 0.

        for user_id in range(num_student):
            inputs = Variable(zero_train_data[user_id]).unsqueeze(0)
            target = inputs.clone()

            optimizer.zero_grad()
            output = model(inputs)

            # Mask the target to only compute the gradient of valid entries.
            #print(train_data[user_id])
            nan_mask = np.isnan(train_data[user_id].unsqueeze(0).numpy())
            #print(nan_mask)
            target[0][nan_mask] = output[0][nan_mask]

            loss = torch.sum((output - target) ** 2.) + (lamb/2) * model.get_weight_norm()
            # loss = torch.sum((output - target) ** 2.)
            loss.backward()

            train_loss += loss.item()
            
            for i, _ in enumerate(valid_data["user_id"]):
                if valid_data["user_id"][i] == user_id:
                    valid_loss += ((output[0][valid_data["question_id"][i]] - valid_data["is_correct"][i])**2.).item()
            optimizer.step()

        train_losses.append(train_loss)
        valid_losses.append(valid_loss)
        valid_acc = evaluate(model, zero_train_data, valid_data)
        print("Epoch: {} \tTraining Cost: {:.6f}\t "
              "Valid Acc: {}".format(epoch, train_loss, valid_acc))

    return train_losses, valid_losses


def evaluate(model, zero_train_data, valid_data):
    """ Evaluate the valid_data on the current model.

    :param model: Module
    :param train_data: 2D FloatTensor
    :param valid_data: A dictionary {user_id: list,
    question_id: list, is_correct: list}
    :return: float
    """

    model.eval()

    total = 0
    correct = 0

    for i, u in enumerate(valid_data["user_id"]):
        inputs = Variable(zero_train_data[u]).unsqueeze(0)
        output = model(inputs)

        guess = output[0][valid_data["question_id"][i]].item() >= 0.5
        if guess == valid_data["is_correct"][i]:
            correct += 1
        total += 1

    return correct / float(total)


def main():
    torch.manual_seed(0)
    zero_train_matrix, train_matrix, valid_data, test_data = load_data()

    k = 10
    model = AutoEncoder(train_matrix.shape[1], k)

    # Set optimization hyperparameters.
    lr = 0.02
    num_epoch = 58
    lamb = 0.1

    print('k={}, alpha={}, {} epochs'.format(k, lr, num_epoch))

    train_losses, valid_losses = train(model, lr, lamb, train_matrix, zero_train_matrix,
          valid_data, num_epoch)
    
    valid_acc = evaluate(model, zero_train_matrix, valid_data)
    test_acc = evaluate(model, zero_train_matrix, test_data)

    print("Final Validation Accuracy: {}".format(valid_acc))
    print("Final Testing Accuracy: {}".format(test_acc))

    plt.plot(np.arange(num_epoch), train_losses, label="Training loss")
    plt.plot(np.arange(num_epoch), valid_losses, label="Validation loss")
    plt.xlabel("Epoch #")
    plt.ylabel("Training and Validation loss")
    plt.legend()
    plt.show()



if __name__ == "__main__":
    main()