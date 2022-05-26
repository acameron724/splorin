import express from "express"
import GoogleMapsClient from "../../../apiClient/GoogleMapsClient.js"

const mapsRouter = new express.Router()

mapsRouter.get("/", async (req, res) => {
  const lat = req.query.lat
  const lng = req.query.lng

  try {
    const mapResponse = await GoogleMapsClient.getMap(lat, lng)
    const mapData = JSON.parse(mapResponse)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json(mapData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default mapsRouter