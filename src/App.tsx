import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
        <Navbar />

        {/*The <main> content area will change based on the URL*/}
        <main>
            <Routes>
                {/*Define what component to show for each URL path*/}
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </main>

    </BrowserRouter>
  )
}

export default App
