import { useRouter } from "next/router";

export default function ClientsProjectsPage(){
  const router = useRouter();
  console.log(router.query)

  function loadProjectHandler(){
    // router.push('/clients/ian/projectA');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'ian', clientprojectid: 'projecta'
      }
    })
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}