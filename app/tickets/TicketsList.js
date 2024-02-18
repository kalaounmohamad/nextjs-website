"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState("all");

  useEffect(() => {
    // Retrieve tickets array from local storage
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
    setFilteredTickets(storedTickets);
  }, []);

  // Filter tickets based on priority
  useEffect(() => {
    if (selectedPriority === "all") {
      setFilteredTickets(tickets);
    } else {
      const filtered = tickets.filter(
        (ticket) => ticket.priority === selectedPriority
      );
      setFilteredTickets(filtered);
    }
  }, [selectedPriority, tickets]);

  return (
    <div>
      <select
        className="btn-filter sm:hidden mt-4 p-2"
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
      >
        <option value="all" className="text-xs">
          All
        </option>
        <option value="low" className="text-xs">
          Low Priority
        </option>
        <option value="medium" className="text-xs">
          Medium Priority
        </option>
        <option value="high" className="text-xs">
          High Priority
        </option>
      </select>
      <div className="hidden sm:flex gap-5  my-4">
        {/* On small screens I want a dropdown */}
        {/* On larger screens I want buttons */}
        <button
          className={`btn-filter hover:opacity-75  ${
            selectedPriority === "all" ? "btn-primary" : "btn-secondary"
          } `}
          onClick={() => setSelectedPriority("all")}
        >
          All
        </button>
        <button
          className={`btn-filter hover:opacity-75 ${
            selectedPriority === "low" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedPriority("low")}
        >
          Low Priority
        </button>
        <button
          className={`btn-filter hover:opacity-75 ${
            selectedPriority === "medium" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedPriority("medium")}
        >
          Medium Priority
        </button>
        <button
          className={`btn-filter hover:opacity-75 ${
            selectedPriority === "high" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedPriority("high")}
        >
          High Priority
        </button>
      </div>
      {selectedPriority !== "all" && filteredTickets.length === 0 && (
        <p className="text-center my-8">
          No open <b>{selectedPriority} priority </b>tickets, good job!
        </p>
      )}
      {selectedPriority === "all" && filteredTickets.length === 0 && (
        <p className="text-center">No open tickets, good job!</p>
      )}
      {filteredTickets.length > 0 &&
        filteredTickets.map((ticket) => (
          <div key={ticket.id} className="card">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <small className="block">Created by {ticket.user_email}</small>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        ))}
      <div className="flex justify-left my-8">
        <Link href="/">
          <button className="btn-primary">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
