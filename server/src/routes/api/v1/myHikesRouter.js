import express from "express";
import { Hike } from "../../../models/index.js";
import HikeSerializer from "../../../serializers/HikeSerializer.js";

const myHikesRouter = new express.Router();

myHikesRouter.get("/", async (req, res) => {
  try {
    const hikes = await Hike.query()
    .where(
      { status : true }
    );
    // only query data where userId exists in array of users who have completed the hike
    // refactor AddHikeForm so that if you click the check box, it adds your userId to the array
    // refactor HikeShow so that you can click add to my-hikes (completed), which adds user ID to array
    // also add to HikeShow page "add to hike wish list" which adds hike to "wish list" on my-hikes --> only query hikes for this list where userId in array of users with this hike on the wish list

    // when you switch from "wish list hike" to "completed hike", remove userId from "wish list array" and add it to "completed hike array"
    
    // add "instance of hike" form to my-hike show page to add images and "review"
    // might take images out of AddHikeForm so that it doesn't upload for the whole hike OR keep image there and also add personal images
    // to instance of hike
    // for this to work --> only if currentUser = instanceOfHike.userID can they see the "reviews"
    const serializedHikes = await Promise.all(
      hikes.map(async (hike) => await HikeSerializer.getSummary(hike))
    );
    return res.status(200).json({ hikes: serializedHikes });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default myHikesRouter;
