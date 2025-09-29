import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Jianping from "./groupMemberPage/jianping.jsx";
import Ardit from "./groupMemberPage/ardit.jsx";
import Yiming from "./groupMemberPage/yiming.jsx";
import Emmanuel from "./groupMemberPage/emmanuel.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jianping" element={<Jianping />} />
        <Route path="/ardit" element={<Ardit />} />
        <Route path="/yiming" element={<Yiming />} />
        <Route path="/emmanuel" element={<Emmanuel />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
