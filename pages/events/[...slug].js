import { useRouter } from "next/router";

export default function FilteredEvents() {
  const router = useRouter();
  console.log(router.query)

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}
