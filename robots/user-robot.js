// robots/UserRobot.js
import { faker } from "@faker-js/faker";
import CountryModel from "../models/CountryModel.js";
import Users from "../models/UserModel.js";

const insertFakeUser = async () => {
  try {
    const countries = await CountryModel.findAll({ attributes: ["id"] });
    const countryIds = countries.map((c) => c.id);

    const gender = faker.helpers.arrayElement(["male", "female"]);

    const fakeUser = {
      first_name: faker.person.firstName(gender),
      last_name: faker.person.lastName(gender),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(12),
      dob: faker.date.birthdate({ min: 18, max: 60, mode: "age" }),
      gender,
      countryId: faker.helpers.arrayElement(countryIds),
      hometown: faker.location.city(),
      tribe: faker.word.words(1),
      village: faker.location.city(),

      // profile:faker.image.url(),
        // faker.image.urlLoremFlickr({
        //   width: 100,
        //   height: 100,
        //   category: ["africa", "people"],
        // }),
        profile: `https://randomuser.me/api/portraits/${gender === "male" ? "men" : "women"}/${faker.number.int({ min: 10, max: 99 })}.jpg`,

      alias: faker.internet.userName(),
      status: "Active",
    };

    await Users.create(fakeUser);
    console.log("Inserted User:", fakeUser.email);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
};

const startUserRobot = (interval = 10000) => {
  setInterval(insertFakeUser, interval);
};

export default startUserRobot;
