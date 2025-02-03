import Link from "next/link";

export default function ClientsPage(){
  const clients = [
    {id: 'ian', name: 'ian m'},
    { id: 'nai', name: 'm nai'}
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li><Link href='/clients/ian'>Ian</Link></li>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}> {client.name} </Link>
          </li>))}
      </ul>
    </div>
  )
}