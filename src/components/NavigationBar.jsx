import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg shadow"
                style={{
                    background: "linear-gradient(90deg, #0F2027, #203A43, #2C5364)",
                    padding: "12px 20px",
                }}
            >
                <div className="container-fluid">
                    <Link
                        className="navbar-brand fw-bold text-white fs-4"
                        to="/"
                        style={{ letterSpacing: "1px" }}
                    >
                        Blood Donation App
                    </Link>

                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">

                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/"
                                >
                                    Add Donors
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/view"
                                >
                                    View Donors
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;