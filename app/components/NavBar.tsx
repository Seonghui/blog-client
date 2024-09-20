import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="py-4 sticky top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-lg">
        <div className="flex justify-end mx-auto lg:max-w-screen-md sm:max-w-screen-sm">
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
