import { BrowserRouter as Router, Routes, Outlet, Route } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { Footer, Navbar, ScrollToTop } from './components';
import { Home } from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

    useEffect(function () {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Router>
                <ScrollToTop />
                <Toaster />

                <Routes>
                    <Route path="/" element={<HomeLayout />}>

                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} />

                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};


export default App
