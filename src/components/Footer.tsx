export default function Footer() {
  return (
    <footer className="text-center py-4 border-t mt-10 text-sm text-gray-400 bg-white">
  © {new Date().getFullYear()} Teerachaya. All rights reserved.
  | 
  Illustrations by <a href="https://www.shigureni.com" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-white">
    shigureni
  </a>
</footer>

  );
}
