import { Request, Response } from "express";
import {web3} from "../web3/web3";

import Playground from "../abis/Playground.json";

export const Playgrounds = async (req, res) => {
    const networkId = await web3.eth.net.getId();
    const playgroundData = Playground.networks[networkId];

    if (playgroundData) {
        //@ts-ignore
        const contract = new web3.eth.Contract(Playground.abi, playgroundData.address);

        contract.methods.getData().call().then((data) => {
            const playgrounds = [];

            data.map(item => {
                const playground = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    website: item.website,
                    imageUrl: item.imageUrl
                }

                playgrounds.push(playground);
            });

            console.log("Playgrounds: ", playgrounds);
            res.send(playgrounds);
        });
    }
}