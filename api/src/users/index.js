import express from "express";
import create from "./create";
import list from "./list";
import show from "./show";

const router = express.Router();

router.post("/", create);
router.get("/", list);
router.get("/:id", show);

export default router;
