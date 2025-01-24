import MealsHeader from "@/components/meals-header/meals-header";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";


export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <MealsHeader />
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
