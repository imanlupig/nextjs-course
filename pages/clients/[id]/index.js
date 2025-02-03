import { useRouter } from "next/router";

export default function ClientsProjectsPage(){
  const router = useRouter();
  console.log(router.query)

  return (
    <div>
      <h1>The Projects of a given client</h1>
    </div>
  )
}