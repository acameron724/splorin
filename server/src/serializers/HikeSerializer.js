class HikeSerializer {
  static async getSummary(hike) {
    const allowedAttributes = [
      "id",
      "name",
      "location",
      "difficulty",
      "routeType",
      "description",
      "length",
      "elevationChange",
      "completed",
      "wishList",
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
      "difficulty",
      "routeType",
      "description",
      "length",
      "elevationChange",
      "completed",
      "wishList",
    ];
    let serializedHike = {};
    for (const attribute of allowedAttributes) {
      serializedHike[attribute] = hike[attribute];
    }
    return serializedHike;
  }
}

export default HikeSerializer;
