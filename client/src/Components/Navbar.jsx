import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="d-md-none"></div>
                <button
                    className="navbar-toggler mb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Vigsel</a>
                            <span className="d-md-none">  ----------------------------------------------------------</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Boende</a>
                            <span className="d-md-none">  ----------------------------------------------------------</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Brudfölje</a>
                            <span className="d-md-none">  ----------------------------------------------------------</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Gåvor</a>
                            <span className="d-md-none">  ----------------------------------------------------------</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Frågor och svar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
