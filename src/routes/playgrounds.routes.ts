import { Router } from "express";

import { playgrounds } from "../controllers/playgrounds.controller";

const router: Router = Router();

router.route("/").get(playgrounds);

export default router;