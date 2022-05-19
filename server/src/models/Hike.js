const Model = require("./Model");

class Hike extends Model {
  static get tableName() {
    return "hikes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location", "difficulty", "routeType"],
      properties: {
        name: { type: "string", minLength: 1 },
        location: { type: "string", minLength: 1 },
        difficulty: { type: ["string", "integer"], minimum: 1, maximum: 5 },
        routeType: { type: "string" },
        description: { type: "string" },
        length: { type: ["string", "number"] },
        elevationChange: { type: ["string", "integer"] },
        status: { type: "boolean" },
      },
    };
  }
}

module.exports = Hike;
