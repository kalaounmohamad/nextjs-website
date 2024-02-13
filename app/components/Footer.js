import Image from "next/image";
import Link from "next/link";
import Logo from "./creoshift_logo.jpg";
import Instagram from "./instagram.png";
import Facebook from "./facebook.png";
import X from "./X.png";

export default function Footer() {
  return (
    <footer>
      <div class="max-w-5xl mx-auto border-t-2 border-gray-200 py-5 flex flex-row justify-between items-center flex-wrap gap-y-4">
        {/* <div class="max-w-5xl mx-auto border-t-2 border-gray-200 py-5 sm:flex sm:flex-row sm:justify-between sm:items-center sm:flex-wrap grid grid-cols-2 grid-rows-2"> */}

        <Link href="/">
          <Image
            src={Logo}
            alt="Creoshift logo"
            width={70}
            loading="eager"
            className="hover:opacity-75"
          />
        </Link>
        <div class="footer-links m-3 flex flex-col sm:flex-row flex-wrap sm:space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div class="social-icons flex mt-4 gap-4 sm:mt-0">
          <a href="https://www.facebook.com" target="_blank">
            <Image
              src={Facebook}
              alt="Facebook Icon"
              class="w-8 hover:opacity-75"
            />
          </a>
          <a href="https://www.x.com" target="_blank">
            <Image src={X} alt="X Icon" class="w-8 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <Image
              src={Instagram}
              alt="Instagram Icon"
              class="w-8 hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
