"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function TicketDetail({ params }) {
  const id = params.id;
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicketFromLocalStorage = () => {
      const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
      const foundTicket = storedTickets.find(
        (ticket) => ticket.id === parseInt(id)
      );
      setTicket(foundTicket);
    };

    if (id) {
      fetchTicketFromLocalStorage();
    }
  }, [id]);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      {ticket ? (
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ) : (
        <main className="text-center">
          <h2 className="text-3xl">We hit a brick wall.</h2>
          <p>We could not find the Ticket you were looking for</p>
          <p>
            Go back to see all the <Link href="/tickets">Tickets</Link>
          </p>
        </main>
      )}
    </main>
  );
}
