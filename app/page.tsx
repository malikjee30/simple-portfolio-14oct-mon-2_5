// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      {/* Main content */}
      <div className="text-white flex flex-col justify-center items-start max-w-xl">
        <h1 className="text-6xl font-bold mb-4">Assalamoalaikum.</h1>
        <p className="text-xl mb-6">My name is Ghulam Nasir</p>
        <p className="text-sm">
          I am proud of me that I am the student of Governor initiative of Artificial
          Inteligence Cources, And I want a bright student of this future planning and 
          thanks to sir Zia-ur-Rahman and them team and faculties. 
        </p>
      </div>

      {/* Center planet-like circle */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full w-64 h-64 bg-gradient-to-t from-purple-800 to-orange-200" />
        <div className="rounded-full w-64 h-64 bg-black border border-gray-700" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-6">
        <ul className="flex flex-col space-y-4 text-white">
          <li className="text-purple-400 cursor-pointer">Home</li>
          <li className="text-gray-500">Work</li>
        </ul>
      </nav>
    </div>
  );
}
