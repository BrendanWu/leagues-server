import { Router } from "express";
import { saveListings, getListings } from "../controllers/listing.controller";

const router: Router = Router();

router.route("/saveListing").post(saveListings);
router.route("/getListings").get(getListings);
export default router;
