import { callParentFunction } from './sdk'
import './App.css'

function App() {
  return (
    <>
      <h1>Mini-App</h1>
      <div className="card">
        <button onClick={() => callParentFunction("hello")}>
          call sdk
        </button>
      </div>
    </>
  )
}

export default App