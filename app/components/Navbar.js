import Image from "next/image";
import Link from "next/link";
import Logo from "./creoshift_logo.jpg";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Creoshift logo" width={70} placeholder="blur" />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
