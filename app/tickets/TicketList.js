import Link from "next/link";

async function getTickets() {
  // //imitate delay to test loading screen
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, //refetch at each refresh directly
    },
  });
  console.log("response");
  console.log(res);

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  console.log(tickets);

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">No open tickets, good job!</p>
      )}
    </>
  );
}
