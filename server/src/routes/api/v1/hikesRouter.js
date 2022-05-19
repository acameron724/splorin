import express from "express";
import { Hike } from "../../../models/index.js";
import HikeSerializer from "../../../serializers/HikeSerializer.js";

const hikesRouter = new express.Router();

hikesRouter.get("/", async (req, res) => {
  try {
    const hikes = await Hike.query();
    const serializedHikes = await Promise.all(
      hikes.map(async (hike) => await HikeSerializer.getSummary(hike))
    );
    return res.status(200).json({ hikes: serializedHikes });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

hikesRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const hike = await Hike.query().findById(id)
    const serializedHike = await HikeSerializer.getDetails(hike)
    return res.status(200).json({ hike: serializedHike })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default hikesRouter;
