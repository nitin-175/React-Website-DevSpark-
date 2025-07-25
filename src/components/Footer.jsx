import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <footer style={{ backgroundColor: "#0d0d0d", color: "#f1f1f1", paddingTop: "3rem", position: "relative" }}>
            <Container fluid className="text-center">
                {/* Motto */}
                <div className="footer-tagline mb-4" style={{ fontSize: "1.1rem", color: "#ccc" }}>
                    Empowering your digital journey.
                </div>

                {/* Optional Navigation */}
                <div className="footer-links mb-4">
                    <ul className="list-inline" style={{ marginBottom: 0 }}>
                        <li className="list-inline-item mx-3">
                            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>About</a>
                        </li>
                        <li className="list-inline-item mx-3">
                            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Contact</a>
                        </li>
                        <li className="list-inline-item mx-3">
                            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Services</a>
                        </li>
                        <li className="list-inline-item mx-3">
                            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Blog</a>
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="socials mb-4">
                    <ul className="list-inline">
                        <li className="list-inline-item mx-2">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f1f1f1", fontSize: "1.3rem" }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item mx-2">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f1f1f1", fontSize: "1.3rem" }}>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item mx-2">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f1f1f1", fontSize: "1.3rem" }}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className="list-inline-item mx-2">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f1f1f1", fontSize: "1.3rem" }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="copyright py-3" style={{ fontSize: "0.9rem", borderTop: "1px solid #444" }}>
                    &copy; 2025 <strong>Corporate</strong>. All Rights Reserved.
                </div>

                {showTopBtn && (
                    <div
                        className="go-to-top-btn"
                        onClick={goTop}
                        role="button"
                        tabIndex={0}
                        aria-label="Go to top"
                        title="Back to Top"
                        style={{
                            position: "fixed",
                            bottom: "25px",
                            right: "25px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                            cursor: "pointer",
                            zIndex: 9999,
                        }}
                    >
                        <i className="fas fa-chevron-up"></i>
                    </div>
                )}
            </Container>
        </footer>
    );
}
