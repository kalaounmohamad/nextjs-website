import Image from "next/image";
import Link from "next/link";
import Logo from "./creoshift_logo.jpg";
import Instagram from "./instagram.jpeg";
import Facebook from "./facebook.png";
import X from "./X.png";

export default function Footer() {
  return (
    <footer>
      <div class="max-w-5xl mx-auto border-t-2 border-gray-200 py-5 flex flex-col justify-between items-center sm:flex-row">
        <Link href="/">
          <Image
            src={Logo}
            alt="Creoshift logo"
            width={70}
            height={70}
            placeholder="blur"
          />
        </Link>
        <div class="footer-links my-3 space-x-0 sm:space-x-4 flex flex-col sm:flex-row">
          <a href="#" class=" mx-auto  flex">
            Privacy Policy
          </a>
          <a href="#" class=" mx-auto mt-2 sm:mt-0  flex">
            Terms of Service
          </a>
        </div>
        <div class="social-icons flex">
          <a href="https://www.facebook.com" target="_blank" class="mr-4">
            <Image src={Facebook} alt="Facebook Icon" class="w-8" />
          </a>
          <a href="https://www.x.com" target="_blank" class="mr-4">
            <Image src={X} alt="X Icon" class="w-8" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <Image src={Instagram} alt="Instagram Icon" class="w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
