import { Router } from "express";

import { addQrData, getQrData } from "../controllers/qrData.controller";
import checkAuth from "../utils/auth_check";

const router: Router = Router();

router.route("/addqrdata").post(checkAuth, addQrData);
router.route("/getqrdata/:profile_id").get(checkAuth, getQrData);
export default router;
