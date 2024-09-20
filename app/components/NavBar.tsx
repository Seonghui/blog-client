import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="py-4 sticky top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-lg">
        <div className="flex justify-between mx-auto lg:max-w-screen-md sm:max-w-screen-sm">
          <div>
            <Link href="/">
              <Image src="/logo.png" width={24} height={24} alt="logo" />
            </Link>
          </div>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
