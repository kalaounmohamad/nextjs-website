"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Retrieve tickets array from local storage
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  console.log(tickets);

  return (
    <div>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <small className="block">Created by {ticket.user_email}</small>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center">No open tickets, good job!</p>
      )}
    </div>
  );
}
