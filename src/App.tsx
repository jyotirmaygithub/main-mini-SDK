import React from 'react';
import Navbar from './components/Navbar';
import MiniApp from './components/miniApp';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* <MiniApp title="Chat App">
          <p>This could be a mini chat application.</p>
        </MiniApp> */}
  
        <MiniApp title="To-Do List">
          <iframe
            src="http://localhost:5173" // or your hosted mini-app URL
            title="To-Do List MiniApp"
            className="w-full border rounded"
          />
        </MiniApp>


        {/* <MiniApp title="Notes">
          <textarea
            className="w-full h-40 p-2 border rounded"
            placeholder="Write your notes here..."
          />
        </MiniApp> */}
      </div>
    </div>
  );
};

export default App;
