import { Hike } from "../../models/index.js";

class HikeSeeder {
  static async seed() {
    const hikesData = [
      {
        name: "Mount Moosilauke and South Peak Loop",
        location: "Benton, New Hampshire",
        difficulty: 3,
        routeType: "Loop",
        description:
          "Mount Moosilauke is one of the 4000 footers in New Hampshire. This hike is a beautiful key-hole loop that takes you up to the summit and then down to another peak, South Peak, before returning you back to the parking lot.",
        length: 8.2,
        elevationChange: 2506,
        completed: [1],
        wishList: [],
      },
      {
        name: "Mount Garfield Trail",
        location: "Bethlehem, New Hampshire",
        difficulty: 4,
        routeType: "Out-and-Back",
        description:
          "Mount Garfield is one of the 4000 footers in New Hampshire. This mountain is on the north end of the White Mountain range, and this hike is an out and back to its summit. Its a beautiful hike the whole time and has great views of the Whites at the summit.",
        length: 9.6,
        elevationChange: 2988,
        completed: [1],
        wishList: [],
      },
      {
        name: "Mount Whiteface and Passaconway Loop",
        location: "Wonalancet, New Hampshire",
        difficulty: 5,
        routeType: "Loop",
        description:
          "Both Mount Whiteface and Mount Passaconway are 4000 footers in New Hampshire. This loop is difficult in that it is long and the elevation gain is over 4000 feet. The views are fantastic and the trail is very well maintained throughout.",
        length: 11.3,
        elevationChange: 4038,
        completed: [],
        wishList: [1],
      },
      {
        name: "Mount Washington via Tuckerman Ravine and Lion Head Trail",
        location: "Gorham, New Hampshire",
        difficulty: 5,
        routeType: "Out-and-Back",
        description:
          "Mount Washington is one of the 4000 footers in New Hampshire. Mount Washington is the highest point in New England and the highest peak in the White Mountains of New Hampshire. This hike is recommended for experienced hikers who can handle significant elevation gain.",
        length: 7.4,
        completed: [],
        wishList: [1],
      },
    ];
    for (const singleHikeData of hikesData) {
      const currentHike = await Hike.query().findOne(singleHikeData);
      if (!currentHike) {
        await Hike.query().insert(singleHikeData);
      }
    }
  }
}

export default HikeSeeder;
