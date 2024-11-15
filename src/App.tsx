export default function App() {
  return (
<div>
<div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-cyan-500 animate-gradient bg-[length:400%_400%]"></div>

<div className="absolute inset-0 opacity-30">
  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
</div>

<div className="relative ">
    <h1>Welcome to My Portfolio</h1>
    <p className="mt-4 text-lg text-white">This is where you can showcase your projects and skills.</p>
    {/* Add more content here */}
  </div>
</div>




  )
}