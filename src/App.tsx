import React from 'react';
import Navbar from './components/Navbar';
import MiniApp from './components/miniApp';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <MiniApp title="Chat App">
          <p>This could be a mini chat application.</p>
        </MiniApp>

        <MiniApp title="To-Do List">
          <ul className="list-disc pl-5">
            <li>Learn React</li>
            <li>Build mini-app layout</li>
            <li>Deploy the app</li>
          </ul>
        </MiniApp>

        <MiniApp title="Notes">
          <textarea
            className="w-full h-40 p-2 border rounded"
            placeholder="Write your notes here..."
          />
        </MiniApp>
      </div>
    </div>
  );
};

export default App;
