class HikeSerializer {
  static async getSummary(hike) {
    const allowedAttributes = [
      "id",
      "name",
      "location",
      "lat",
      "lng",
      "difficulty",
      "routeType",
      "description",
      "length",
      "elevationChange",
      "image",
    ];
    let serializedHike = {};
    for (const attribute of allowedAttributes) {
      serializedHike[attribute] = hike[attribute];
    }
    return serializedHike;
  }

  static async getDetails(hike) {
    const allowedAttributes = [
      "id",
      "name",
      "location",
      "lat",
      "lng",
      "difficulty",
      "routeType",
      "description",
      "length",
      "elevationChange",
      "image",
    ];
    let serializedHike = {};
    for (const attribute of allowedAttributes) {
      serializedHike[attribute] = hike[attribute];
    }
    return serializedHike;
  }
}

export default HikeSerializer;
