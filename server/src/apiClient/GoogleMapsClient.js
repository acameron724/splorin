import got from "got"

const googleMapsApiKey = 

class GoogleMapsClient {
  static async getMap () {
    try {
      const url = ""
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default GoogleMapsClient