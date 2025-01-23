import MealsHeader from "@/components/meals-header/meals-header";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
