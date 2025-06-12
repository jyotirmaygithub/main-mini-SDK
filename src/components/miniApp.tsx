import React from 'react';

interface MiniAppProps {
  title: string;
  children: React.ReactNode;
}

const triggerBackend = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/trigger', {
      method: 'POST',
    });
    const data = await res.json();
    console.log(data.message); // "Action triggered successfully"
  } catch (err) {
    console.error('Failed to trigger backend:', err);
  }
};
window.addEventListener('message', (event: MessageEvent) => {
  if (event.data?.type === 'CALL_PARENT_FUNCTION') {
    console.log('Parent received payload:', event.data.data);
    triggerBackend(); // your function
  }
});


const MiniApp: React.FC<MiniAppProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full md:w-1/2 xl:w-1/3 overflow-auto flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div>{children}</div>
      </div>

      <div className="flex justify-end mt-4 gap-2" onClick={triggerBackend}>
        <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Trigger backend 
        </button>
        <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Close
        </button>
      </div>
    </div>
  );
};

export default MiniApp;
