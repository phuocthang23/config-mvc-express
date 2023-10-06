import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/", controller.createRole);
router.get("/", controller.getAllRole);

module.exports = router;
