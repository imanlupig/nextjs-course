import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('loading meals failed');

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); //create slug using the meal title lowercased
  meal.instructions = xss(meal.instructions); //sanitize the data

  const extension = meal.image.name.split('.').pop(); //accesses the image file from the form data submitted
  const fileName = `${meal.slug}.${extension}` //changes the file name from the user given name... can add a unique id to not overwrite.

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error){
      throw new Error('Saving image failed');
    }
  });

  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
      )
    `).run(meal);
}
