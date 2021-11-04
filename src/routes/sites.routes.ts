import { Router } from "express";
import { addSite, getSites, addGateway, getGateways } from "../controllers/sites.controller";

const router: Router = Router();

router.route("/addSite").post(addSite);
router.route("/getSites").get(getSites);
router.route("/getGateways/:id").get(getGateways);
router.route("/addGateway").post(addGateway);
export default router;
// module.exports = router;