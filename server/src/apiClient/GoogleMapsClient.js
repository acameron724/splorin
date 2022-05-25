import got from "got"

class GoogleMapsClient {
  static async getMap () {
    try {
      const number = "4911"
      const street = "trailridge"
      const type = "drive"
      const city = "dunwoody"
      const state = "georgia"

      // const frl = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&callback=initMap`
      const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${number}%20${street}%20${type}%20${city}%20${state}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${process.env.GOOGLE_MAPS_KEY}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default GoogleMapsClient

