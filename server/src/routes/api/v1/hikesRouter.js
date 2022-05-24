import express from "express";
import { ValidationError } from "objection";
import { Hike } from "../../../models/index.js";
import HikeSerializer from "../../../serializers/HikeSerializer.js";
import cleanUserInput from "../../../services/cleanUserInput.js";
import uploadImage from "../../../services/uploadImage.js";

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
  const { id } = req.params;
  try {
    const hike = await Hike.query().findById(id);
    const serializedHike = await HikeSerializer.getDetails(hike);
    return res.status(200).json({ hike: serializedHike });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

hikesRouter.post("/", uploadImage.single("image"), async (req, res) => {
  const { name, location, difficulty, routeType, description, length, elevationChange } = cleanUserInput(req.body);
  try {
    const newHike = await Hike.query().insertAndFetch({
      name,
      location,
      difficulty,
      routeType,
      description,
      length,
      elevationChange,
      image: req.file.location,
    });

    // remove completed,// wishList, ^^
    // after create hike, make relate query to create Favorite

    return res.status(201).json({ hike: newHike });
  } catch (error) {
    console.log(error)
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default hikesRouter;
