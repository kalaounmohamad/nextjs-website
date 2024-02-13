import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav className="flex justify-between items-center">
        <h2>Tickets</h2>
        <Link href="/tickets/create">
          <button className="btn-primary py-1 px-3 text-2xl">+</button>
        </Link>
      </nav>
      {/* suspense is made to make a loading just for a particular part of the
      page */}
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
