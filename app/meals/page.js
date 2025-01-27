import MealsHeader from "@/components/meals-header/meals-header";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: 'Share',
  description: 'This is the share meal page',
};

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}


export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
        <Meals />
      </Suspense>
      </main>
    </>
  );
}
