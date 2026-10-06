import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

function Home() {
    return (
        <section className="page">
            <p className="eyebrow">Home</p>
            <h1>Welcome to the class app</h1>
            <p>This React project was created to practice setup, the terminal, and React Router.</p>
        </section>
    );
}

function About() {
    return (
        <section className="page">
            <p className="eyebrow">About</p>
            <h1>About this project</h1>
            <p>
                We used Vite to create the app, installed React Router, and set up page navigation
                using routes.
            </p>
        </section>
    );
}

function Contact() {
    return (
        <section className="page">
            <p className="eyebrow">Contact</p>
            <h1>Contact</h1>
            <p>Email: student@example.com</p>
            <p>GitHub: github.com/your-name</p>
        </section>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <nav className="main-nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Contact
                    </NavLink>
                </nav>

                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
