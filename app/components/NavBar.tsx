import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between py-4 sticky top-0 left-0 right-0 bg-white *:font-semibold">
        <div></div>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
