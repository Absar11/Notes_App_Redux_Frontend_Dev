import { useState } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'

import AllNotes from './components/AllNotes'
import AddNotes from './components/AddNotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Notes App</h1>
      <FilterBar />
      <AddNotes />
      <AllNotes />
    </div>
  )
}

export default App
