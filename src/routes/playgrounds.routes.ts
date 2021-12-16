import { Router } from "express";

import { Playgrounds } from "../controllers/playgrounds.controller";

const router: Router = Router();

router.route("/").get(Playgrounds);

export default router;