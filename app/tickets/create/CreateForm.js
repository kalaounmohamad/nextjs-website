"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const newTicket = {
  //     title,
  //     body,
  //     priority,
  //     user_email: "kalaounmohamad@hotmail.com",
  //   };

  //   const res = await fetch("http://localhost:4000/tickets", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newTicket),
  //   });

  //   if (res.status === 201) {
  //     router.refresh();
  //     router.push("/tickets");
  //   }
  // };

  const generateId = () => {
    return Date.now(); // Generate a unique ID based on current timestamp
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {
      id: generateId(),
      title,
      body,
      priority,
      user_email: "kalaounmohamad@hotmail.com",
    };

    // Retrieve existing tickets array from local storage or initialize as empty array
    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];

    // Add new ticket to the existing tickets array
    const updatedTickets = [...existingTickets, newTicket];

    // Store updated tickets array in local storage
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    // Simulated fetch for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
      // router.push("/tickets"); // Navigate to the tickets page
      window.location.reload();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 w-full">
      {/* <form onSubmit={handleSubmit} className="bg-gray-100 w-full lg:w-10/12 "> */}
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          maxLength={200}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
          rows={5}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary mb-2" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
