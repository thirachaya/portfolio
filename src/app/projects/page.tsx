import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-teal-600">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blew Noxs Project */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-48 relative overflow-hidden rounded-t-xl">
            <Image src="/assets/blew-noxs.png" alt="Blew Noxs" width={1920} height={1080} className="w-full h-full" />

            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-2xl font-bold">BLEW NOXS</h2>
              <p className="text-sm">Modern Content Publishing Platform</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Blew Noxs Blog Editor</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-md font-medium">In Progress</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              A basic blog editor with a rich text editing experience using Tiptap.
              Built with Next.js, PostgreSQL, and TailwindCSS, supporting post creation and publishing.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-emerald-100 text-teal-800 px-2 py-1 rounded-md">Next.js</span>
              <span className="text-xs bg-emerald-100 text-teal-800 px-2 py-1 rounded-md">Tiptap Editor</span>
              <span className="text-xs bg-emerald-100 text-teal-800 px-2 py-1 rounded-md">TailwindCSS</span>
              <span className="text-xs bg-emerald-100 text-teal-800 px-2 py-1 rounded-md">PostgreSQL</span>
            </div>
            <div className="flex gap-3">
              <a href="https://blew-noxs-blog-editor.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white bg-gradient-to-r from-sky-700 to-emerald-500 px-4 py-2.5 rounded-lg hover:from-sky-600 hover:to-emerald-400 transition-all duration-300 w-full text-center shadow-md hover:shadow-lg">
                View Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
          <div className="h-48 bg-gray-50 flex items-center justify-center text-gray-400 border-b border-gray-100">
            <span className="text-sm font-medium tracking-widest uppercase">Coming Soon</span>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Future Project</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">Planned</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm flex-grow">
              Exploring new technologies to solve real-world problems. Stay tuned for updates!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}