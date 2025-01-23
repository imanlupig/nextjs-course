import Link from "next/link";
import classes from './meals-header.module.css';

export default function MealsHeader() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicous meals, created{""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your fav recipe and cook it yourself!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe.</Link>
        </p>
      </header>
    </>
  );
}
