"use client";

import { useState, useEffect } from "react";

// Icons as SVG components
const CodeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
    </svg>
);

const ServerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
);

const PaletteIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
);

const RocketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15,3 21,3 21,9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19,12 12,19 5,12" />
    </svg>
);

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// Navigation Component
function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "0.75rem 1.5rem",
                transition: "all 0.3s ease",
                background: isScrolled ? "rgba(15, 15, 35, 0.9)" : "transparent",
                backdropFilter: isScrolled ? "blur(20px)" : "none",
                borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <a
                    href="#"
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {"<Dev />"}
                </a>

                {/* Desktop Navigation */}
                <div
                    style={{
                        display: "flex",
                        gap: "2rem",
                        alignItems: "center",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={{
                                color: "rgba(255,255,255,0.8)",
                                fontWeight: 500,
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#8b5cf6")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: "none",
                        background: "transparent",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                    }}
                    className="mobile-menu-btn"
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "rgba(15, 15, 35, 0.98)",
                        backdropFilter: "blur(20px)",
                        padding: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                    className="mobile-menu"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                color: "rgba(255,255,255,0.8)",
                                fontWeight: 500,
                                padding: "0.5rem 0",
                                fontSize: "1.1rem",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
}

// Instagram Icon
const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

// Hero Section
function Hero() {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6rem 1.5rem 4rem",
                position: "relative",
                zIndex: 1,
            }}
        >
            <div
                className="container"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                }}
            >
                {/* Left Side - Text Content */}
                <div style={{ textAlign: "left" }}>
                    <div
                        className="animate-fade-in"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 1.5rem",
                            background: "rgba(139, 92, 246, 0.15)",
                            border: "1px solid rgba(139, 92, 246, 0.3)",
                            borderRadius: "999px",
                            marginBottom: "2rem",
                            fontSize: "0.9rem",
                            color: "#8b5cf6",
                            fontWeight: 500,
                        }}
                    >
                        <span style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%", animation: "pulse 2s infinite" }}></span>
                        Available for freelance work
                    </div>

                    <h1
                        className="animate-fade-in delay-100"
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                        }}
                    >
                        I craft{" "}
                        <span className="gradient-text">digital experiences</span>
                        <br />
                        that inspire
                    </h1>

                    <p
                        className="animate-fade-in delay-200"
                        style={{
                            fontSize: "1.25rem",
                            color: "rgba(255,255,255,0.7)",
                            maxWidth: "500px",
                            marginBottom: "2.5rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Full-stack developer passionate about creating beautiful, performant web applications
                        with modern technologies and exceptional user experiences.
                    </p>

                    <div
                        className="animate-fade-in delay-300"
                        style={{
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap",
                            marginBottom: "2.5rem",
                        }}
                    >
                        <a href="#projects" className="btn-primary">
                            View My Work
                            <ArrowDownIcon />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get in Touch
                        </a>
                    </div>

                    {/* Social Links - Only GitHub, LinkedIn, Instagram */}
                    <div
                        className="animate-fade-in delay-400"
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                        }}
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "1.5rem",
                                color: "rgba(255,255,255,0.7)",
                                transition: "all 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#8b5cf6";
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <GithubIcon />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "1.5rem",
                                color: "rgba(255,255,255,0.7)",
                                transition: "all 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#06b6d4";
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "1.5rem",
                                color: "rgba(255,255,255,0.7)",
                                transition: "all 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#ec4899";
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

                {/* Right Side - Profile Image with Glassmorphism Frame */}
                <div
                    className="animate-fade-in delay-200"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    {/* Glowing background effect */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4))",
                            borderRadius: "50%",
                            filter: "blur(60px)",
                            opacity: 0.6,
                            animation: "pulse-glow 4s ease-in-out infinite",
                        }}
                    />

                    {/* Glass frame container */}
                    <div
                        style={{
                            position: "relative",
                            padding: "6px",
                            background: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "28px",
                            boxShadow: "0 25px 80px rgba(139, 92, 246, 0.25), 0 10px 40px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        {/* Animated border gradient */}
                        <div
                            style={{
                                position: "absolute",
                                inset: "-2px",
                                background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #8b5cf6)",
                                borderRadius: "30px",
                                zIndex: -1,
                                opacity: 0.6,
                                animation: "rotate-gradient 6s linear infinite",
                            }}
                        />

                        {/* Image - Flipped horizontally */}
                        <img
                            src="/me.jpeg"
                            alt="Developer Profile"
                            style={{
                                width: "380px",
                                height: "380px",
                                objectFit: "cover",
                                borderRadius: "24px",
                                display: "block",
                                transform: "scaleX(-1)",
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @keyframes pulse-glow {
                    0%, 100% { transform: scale(0.95); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.7; }
                }
                @keyframes rotate-gradient {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                @media (max-width: 900px) {
                    .container {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                    }
                }
            `}</style>
        </section>
    );
}

// About Section
function About() {
    const stats = [
        { number: "5+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "30+", label: "Happy Clients" },
        { number: "99%", label: "Client Satisfaction" },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>
                <p className="section-subtitle">
                    Turning complex problems into elegant solutions through code and creativity
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem",
                        marginBottom: "4rem",
                    }}
                >
                    <div className="glass glass-hover" style={{ padding: "2rem" }}>
                        <div className="icon-wrapper" style={{ marginBottom: "1.5rem" }}>
                            <CodeIcon />
                        </div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                            Frontend Development
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                            Creating responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS frameworks.
                        </p>
                    </div>

                    <div className="glass glass-hover" style={{ padding: "2rem" }}>
                        <div className="icon-wrapper" style={{ marginBottom: "1.5rem", background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}>
                            <ServerIcon />
                        </div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                            Backend Development
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                            Building scalable APIs and server-side applications with Node.js, Python, and cloud infrastructure.
                        </p>
                    </div>

                    <div className="glass glass-hover" style={{ padding: "2rem" }}>
                        <div className="icon-wrapper" style={{ marginBottom: "1.5rem", background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}>
                            <PaletteIcon />
                        </div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                            UI/UX Design
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                            Designing intuitive user experiences with attention to detail, accessibility, and modern design principles.
                        </p>
                    </div>
                </div>

                <div
                    className="glass"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: "1rem",
                        padding: "2rem",
                    }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} style={{ textAlign: "center", padding: "1rem" }}>
                            <div
                                className="gradient-text"
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: 800,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {stat.number}
                            </div>
                            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Projects Section
function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
            image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            github: "https://github.com",
            live: "https://example.com",
        },
        {
            title: "AI Dashboard",
            description: "Analytics dashboard powered by machine learning for real-time data visualization and insights.",
            image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            tags: ["React", "Python", "TensorFlow"],
            github: "https://github.com",
            live: "https://example.com",
        },
        {
            title: "Social Media App",
            description: "A modern social platform with real-time messaging, stories, and content sharing features.",
            image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            tags: ["React Native", "Firebase", "Node.js"],
            github: "https://github.com",
            live: "https://example.com",
        },
        {
            title: "Fintech Solution",
            description: "Secure banking application with advanced encryption and multi-factor authentication.",
            image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            tags: ["Vue.js", "Go", "AWS"],
            github: "https://github.com",
            live: "https://example.com",
        },
    ];

    return (
        <section id="projects" className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
            <div className="container">
                <h2 className="section-title">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="section-subtitle">
                    A selection of projects that showcase my skills and passion for development
                </p>

                <div className="grid-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass glass-hover"
                            style={{ overflow: "hidden" }}
                        >
                            <div
                                style={{
                                    height: "200px",
                                    background: project.image,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <RocketIcon />
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 700,
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.7)",
                                        marginBottom: "1rem",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {project.description}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tech-badge">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            color: "rgba(255,255,255,0.8)",
                                            fontSize: "0.9rem",
                                            transition: "color 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8b5cf6")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                                    >
                                        <GithubIcon /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            color: "rgba(255,255,255,0.8)",
                                            fontSize: "0.9rem",
                                            transition: "color 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                                    >
                                        <ExternalLinkIcon /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Skills Section
function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "SASS"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
        },
        {
            title: "Tools & Cloud",
            skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">
                    Skills & <span className="gradient-text">Technologies</span>
                </h2>
                <p className="section-subtitle">
                    The tools and technologies I use to bring ideas to life
                </p>

                <div className="grid-3">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass glass-hover"
                            style={{ padding: "2rem" }}
                        >
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    marginBottom: "1.5rem",
                                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {category.title}
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        style={{
                                            padding: "0.5rem 1rem",
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "8px",
                                            fontSize: "0.875rem",
                                            color: "rgba(255,255,255,0.8)",
                                            transition: "all 0.3s ease",
                                            cursor: "default",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
                                            e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.5)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Contact Section
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
            <div className="container">
                <h2 className="section-title">
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <p className="section-subtitle">
                    Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                </p>

                <div
                    className="glass"
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        padding: "2.5rem",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "1.5rem" }}>
                            <label
                                htmlFor="name"
                                style={{
                                    display: "block",
                                    marginBottom: "0.5rem",
                                    fontSize: "0.9rem",
                                    color: "rgba(255,255,255,0.8)",
                                }}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.875rem 1rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "1rem",
                                    outline: "none",
                                    transition: "border-color 0.3s ease",
                                }}
                                onFocus={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.5)")}
                                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label
                                htmlFor="email"
                                style={{
                                    display: "block",
                                    marginBottom: "0.5rem",
                                    fontSize: "0.9rem",
                                    color: "rgba(255,255,255,0.8)",
                                }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.875rem 1rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "1rem",
                                    outline: "none",
                                    transition: "border-color 0.3s ease",
                                }}
                                onFocus={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.5)")}
                                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                        </div>

                        <div style={{ marginBottom: "2rem" }}>
                            <label
                                htmlFor="message"
                                style={{
                                    display: "block",
                                    marginBottom: "0.5rem",
                                    fontSize: "0.9rem",
                                    color: "rgba(255,255,255,0.8)",
                                }}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={5}
                                style={{
                                    width: "100%",
                                    padding: "0.875rem 1rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "1rem",
                                    outline: "none",
                                    resize: "vertical",
                                    transition: "border-color 0.3s ease",
                                    fontFamily: "inherit",
                                }}
                                onFocus={(e) => (e.target.style.borderColor = "rgba(139, 92, 246, 0.5)")}
                                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center" }}
                        >
                            Send Message
                            <EmailIcon />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

// Footer
function Footer() {
    return (
        <footer
            style={{
                padding: "3rem 1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                position: "relative",
                zIndex: 1,
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                }}
            >
                <div style={{ display: "flex", gap: "1.5rem" }}>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8b5cf6")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ec4899")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >
                        <InstagramIcon />
                    </a>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
                    © {new Date().getFullYear()} Developer. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

// Main Page Component
export default function Home() {
    return (
        <main>
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}
