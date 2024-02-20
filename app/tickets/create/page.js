import CreateForm from "./CreateForm";
import Link from "next/link";

export default function CreateTicket() {
  return (
    <main>
      <div className="  mx-auto ">
        <h2 className="text-primary text-center">Add a new ticket</h2>
      </div>
      {/* <h2 className="text-primary text-center">Add a new ticket</h2> */}

      <CreateForm />
    </main>
  );
}
