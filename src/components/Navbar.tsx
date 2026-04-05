import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 z-50 bg-white">
      <h1 className="text-xl font-bold">🦫</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Experience</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
