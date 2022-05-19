/* eslint-disable no-console */
import { connection } from "../boot.js";
import HikeSeeder from "./seeders/HikeSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding hikes...");
    await HikeSeeder.seed();
    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
