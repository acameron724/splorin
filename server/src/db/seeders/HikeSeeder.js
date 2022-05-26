import { Hike } from "../../models/index.js";

class HikeSeeder {
  static async seed() {
    const hikesData = [
      {
        name: "Mount Moosilauke and South Peak Loop",
        location: "Warren, New Hampshire",
        lat: "44.01633",
        lng: "-71.86924",
        difficulty: 3,
        routeType: "Loop",
        description:
          "Mount Moosilauke is one of the 4000 footers in New Hampshire. This hike is a beautiful key-hole loop that takes you up to the summit and then down to another peak, South Peak, before returning you back to the parking lot.",
        length: 8.2,
        elevationChange: 2506,
        image: "https://splorin-development.s3.amazonaws.com/moosilauke.jpeg",
      },
      {
        name: "Mount Garfield Trail",
        location: "Bethlehem, New Hampshire",
        lat: "44.22912",
        lng: "-71.63285",
        difficulty: 4,
        routeType: "Out-and-Back",
        description:
          "Mount Garfield is one of the 4000 footers in New Hampshire. This mountain is on the north end of the White Mountain range, and this hike is an out and back to its summit. Its a beautiful hike the whole time and has great views of the Whites at the summit.",
        length: 9.6,
        elevationChange: 2988,
        image: "https://splorin-development.s3.amazonaws.com/IMG_3192.jpeg",
      },
      {
        name: "Mount Whiteface and Passaconway Loop",
        location: "Wonalancet, New Hampshire",
        lat: "43.91366",
        lng: "-71.35770",
        difficulty: 5,
        routeType: "Loop",
        description:
          "Both Mount Whiteface and Mount Passaconway are 4000 footers in New Hampshire. This loop is difficult in that it is long and the elevation gain is over 4000 feet. The views are fantastic and the trail is very well maintained throughout.",
        length: 11.3,
        elevationChange: 4038,
        image: "https://splorin-development.s3.amazonaws.com/IMG_3661.jpeg",
      },
      {
        name: "Mount Washington via Tuckerman Ravine and Lion Head Trail",
        location: "Gorham, New Hampshire",
        lat: "43.39324",
        lng: "-72.36070",
        difficulty: 5,
        routeType: "Out-and-Back",
        description:
          "Mount Washington is one of the 4000 footers in New Hampshire. Mount Washington is the highest point in New England and the highest peak in the White Mountains of New Hampshire. This hike is recommended for experienced hikers who can handle significant elevation gain.",
        length: 7.4,
        elevationChange: 4242,
        image: "https://splorin-development.s3.amazonaws.com/washington.jpeg",
      },
      {
        name: "Mount Tripyramid Loop Trail",
        location: "Waterville Valley, New Hampshire",
        lat: "43.1536909",
        lng: "-72.3890619",
        difficulty: 5,
        routeType: "Loop",
        description:
          "The Mount Tripyramid loop includes North, Middle and South Tripyramid peaks, the first of which is a 4000 footer. The initial ascent is up North Tripyramid, which is the highest and most challenging peak to summit. After that, the loop continues to the other two peaks. It's stunning the whole way - a hike you will never forget.",
        length: 11.6,
        elevationChange: 2903,
        image: "https://splorin-development.s3.amazonaws.com/IMG_3327.jpeg",
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
