import CreateForm from "./CreateForm";
import Link from "next/link";

export default function CreateTicket() {
  return (
    <main className="my-0 ">
      <div className=" my-1 mx-auto w-full md:w-3/4 lg:w-1/2 flex justify-center items-center">
        <h2 className="text-primary text-center">Add a new ticket</h2>
      </div>
      {/* <h2 className="text-primary text-center">Add a new ticket</h2> */}

      <CreateForm />
    </main>
  );
}
