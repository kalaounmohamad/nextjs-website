import CreateForm from "./CreateForm";
import Link from "next/link";

export default function CreateTicket() {
  return (
    <main>
      <div className="sm:my-5 my-2 mx-auto w-full md:w-3/4 lg:w-1/2 flex justify-between items-center">
        <h2 className="text-primary text-center">Add a new ticket</h2>
        <Link href="/tickets">
          <button className="bg-gray-400 text-white py-1 px-3 hover:bg-red-500 ">
            Cancel
          </button>
        </Link>
      </div>
      {/* <h2 className="text-primary text-center">Add a new ticket</h2> */}

      <CreateForm />
    </main>
  );
}
