import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      {/* suspense is made to make a loading just for a particular part of the
      page */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
