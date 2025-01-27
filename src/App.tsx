// import Button from '@mui/material/Button';

// export default function App() {
//   return (
// <div>
// <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-500 to-blue-800 animate-gradient bg-[length:400%_400%]"></div>

// <div className="absolute inset-0 opacity-30">
//   <div className="absolute top-0 left-0 w-96 h-96 bg-gray-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
//   <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
// </div>

// <div className="relative ">
//     <h1>Matan Golani</h1>
//     <p className="mt-4 text-lg text-white">This is where you can showcase your projects and skills.</p>
//     <Button variant="contained">Hello world</Button>
//     {/* Add more content here */}
//   </div>
// </div>

//   )
// }
// src/App.tsx
import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-gray-500 p-6">
      <Home />
    </div>
    
  );
};

export default App;
