import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const usersData = [
      {
        email: "alex@hotmail.com",
        cryptedPassword: "lelo",
      },
      {
        email: "alex@yahoo.com",
        cryptedPassword: "daisy",
      },
    ];

    for (const singleUserData of usersData) {
      const currentUser = await User.query().findOne(singleUserData);
      if (!currentUser) {
        await User.query().insert(singleUserData);
      }
    }
  }
}

export default UserSeeder;
