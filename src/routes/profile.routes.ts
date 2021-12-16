import { Router } from "express";

import {
  registerProfile,
  loginProfile,
  getprofile,
  getprofilebyid,
  addprofile,
  deleteprofile,
  updateprofile,
  logout,
} from "../controllers/profile.controller";
import checkAuth from "../utils/auth_check";
import { uploadImage } from "../controllers/uploadImage.Controller";

const router: Router = Router();

router.route("/register").post(registerProfile);
router.route("/upload/:id").post(checkAuth, uploadImage);
router.route("/login").post(loginProfile);
router.route("/logout").get(logout);

router.route("/getprofiles").get(checkAuth, getprofile);

router.route("/getprofile/:id").get(checkAuth, getprofilebyid);

router.route("/addprofile").post(checkAuth, addprofile);

router.route("/deleteprofile/:id").delete(checkAuth, deleteprofile);
router.route("/updateprofile/:id").post(checkAuth, updateprofile);

export default router;
