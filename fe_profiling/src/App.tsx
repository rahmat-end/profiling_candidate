import { Routes, Route } from 'react-router-dom'
import Biodata from './pages/Biodata'
import BiodataUpdate from './pages/BiodataUpdate'
import Profiling from './pages/Profiling'
import Submitted from './pages/Submitted'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/biodata" element={<Biodata />} />
        <Route path="/biodata_update" element={<BiodataUpdate />} />
        <Route path="/profiling" element={<Profiling />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </>
  )
}
