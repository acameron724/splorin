const Model = require("./Model");

class Hike extends Model {
  static get tableName() {
    return "hikes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location", "lat", "lng", "difficulty", "routeType"],
      properties: {
        name: { type: "string", minLength: 1 },
        location: { type: "string", minLength: 1 },
        lat: { type: "string" },
        lng: { type: "string" },
        difficulty: { type: ["string", "integer"], minimum: 1, maximum: 5 },
        routeType: { type: "string" },
        description: { type: "string" },
        length: { type: ["string", "number"] },
        elevationChange: { type: ["string", "integer"] },
        image: { type: "string" },
      },
    };
  }
  

  // static get relationMappings() {
  //   const { User } = require("./index.js");

  //   return {
  //     user: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: User,
  //       join: {
  //         from: "hikes.userId",
  //         to: "user.id",
  //       },
  //     },
  //   };
  // }
}

module.exports = Hike;
