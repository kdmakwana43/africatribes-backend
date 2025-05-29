import { faker } from '@faker-js/faker';
import BlogModel from '../models/BlogModel.js';

const insertFakeBlog = async () => {
  try {
    const fakeBlog = {
      title: faker.lorem.sentence(5),
      description: faker.lorem.paragraph(),
      date: faker.date.recent().toISOString().split('T')[0], // DATEONLY format
      author: faker.name.fullName(),
      image: faker.image.url(),
    // image: faker.image.urlLoremFlickr({
    //         width: 600,
    //         height: 400,
    //         category: ['people','tribes','family'],
    //         }),
      blog_url: faker.internet.url(),
      status: faker.helpers.arrayElement(["Active", "Deactivate"]),
      trending: faker.datatype.boolean(),
    };

    await BlogModel.create(fakeBlog);
    console.log("Inserted Blog:", fakeBlog.title);
  } catch (error) {
    console.error("Error inserting blog:", error);
  }
};



const startBlogRobot = (seconds = 10000) => {
    setInterval(insertFakeBlog, seconds);
}


export default startBlogRobot

