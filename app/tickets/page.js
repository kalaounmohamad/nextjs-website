"use client";
import { useState } from "react";
import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";
import CreateTicket from "./create/page";

export default function Tickets() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <div className="flex justify-between items-center">
        <h2>Tickets</h2>
        <button
          className="btn-primary py-1 px-3 text-2xl"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
      </div>
      {/* Render the modal content conditionally */}
      {showModal && (
        <div className="fixed z-50 inset-0  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-gray-100 rounded-lg mx-auto w-full sm:w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute text-primary ml-auto text-xl font-bold hover:opacity-50 top-4 right-4"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <CreateTicket />
          </div>
        </div>
      )}
      {/* suspense is made to make a loading just for a particular part of the
      page */}
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
