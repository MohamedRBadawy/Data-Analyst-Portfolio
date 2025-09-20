import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import GenerativeBackground from './components/GenerativeBackground';
import CustomCursor from './components/CustomCursor';
import { InteractionProvider } from './context/InteractionContext';

function App() {
    return (
        <InteractionProvider>
            <Router>
                <CustomCursor />
                <GenerativeBackground />
                <div className="relative z-10 lg:pl-20">
                    <Sidebar />
                    <main className="min-h-screen">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/resources" element={<ResourcesPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </InteractionProvider>
    );
}

export default App;