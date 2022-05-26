import got from "got"

class GoogleMapsClient {
  static async getMap (lat, lng) {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_KEY}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default GoogleMapsClient
