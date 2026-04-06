export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 z-50 bg-white">
      <h1 className="text-xl font-bold">🦫</h1>
      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#about">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="/assets/Resume_SE_TeerachayaNgaesanthea.pdf"
          download
          className="ml-2 px-4 py-1.5 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition">
          Download CV
        </a>
      </div>
    </nav>
  );
}
