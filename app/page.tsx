"use client";

import { useState, useEffect, useRef } from "react";

// Reveal on Scroll Component
function RevealOnScroll({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                filter: isVisible ? "blur(0)" : "blur(10px)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
        >
            {children}
        </div>
    );
}

// Custom Cursor Component
function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Detect hoverable elements
        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Add hover detection to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            {/* Outer Ring */}
            <div
                style={{
                    position: "fixed",
                    left: position.x,
                    top: position.y,
                    width: isHovering ? "50px" : "40px",
                    height: isHovering ? "50px" : "40px",
                    border: "2px solid",
                    borderColor: "rgba(139, 92, 246, 0.6)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
                    opacity: isVisible ? 1 : 0,
                    zIndex: 9999,
                    mixBlendMode: "difference",
                }}
            />
            {/* Inner Dot */}
            <div
                style={{
                    position: "fixed",
                    left: position.x,
                    top: position.y,
                    width: isHovering ? "32px" : "16px",
                    height: isHovering ? "32px" : "16px",
                    background: "rgba(255, 255, 255, 0.01)",
                    backdropFilter: "brightness(1.2) contrast(1.1)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 10px rgba(139, 92, 246, 0.2)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.15s ease, height 0.15s ease, opacity 0.2s ease, background 0.2s ease",
                    opacity: isVisible ? 1 : 0,
                    zIndex: 9999,
                }}
            />
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
}

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
        { href: "#projects", label: "Proyectos" },
        { href: "#about", label: "Sobre Mí" },
        { href: "#skills", label: "Habilidades" },
        { href: "#contact", label: "Contacto" },
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
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {"<Luis Cortes>"}
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
                        Disponible para proyectos freelance
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
                        Transformando <span className="gradient-text">ideas en Experiencias</span> Digitales
                    </h1>

                    <p
                        className="animate-fade-in delay-200"
                        style={{
                            fontSize: "1.25rem",
                            color: "rgba(255,255,255,0.7)",
                            maxWidth: "550px",
                            marginBottom: "2.5rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Desarrollador Full Stack especializado en construir aplicaciones web modernas, escalables y de alto impacto visual.
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
                            Ver Mis Proyectos
                            <ArrowDownIcon />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Contáctame
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
    const services = [
        {
            icon: <CodeIcon />,
            title: "Desarrollo Frontend",
            desc: "Creando interfaces interactivas y responsivas con React, Next.js y Tailwind.",
            gradient: "linear-gradient(135deg, #8b5cf6, #06b6d4)"
        },
        {
            icon: <ServerIcon />,
            title: "Arquitectura Backend",
            desc: "Construyendo APIs robustas y escalables con Node.js y Python.",
            gradient: "linear-gradient(135deg, #06b6d4, #8b5cf6)"
        },
        {
            icon: <PaletteIcon />,
            title: "Diseño UI/UX",
            desc: "Diseñando experiencias de usuario intuitivas, accesibles y hermosas.",
            gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)"
        },
    ];

    const stats = [
        { number: "5+", label: "Años" },
        { number: "50+", label: "Proyectos" },
        { number: "30+", label: "Clientes" },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.2fr",
                        gap: "4rem",
                        alignItems: "center",
                    }}
                    className="about-grid"
                >
                    {/* Left Side - Image */}
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {/* Glowing background */}
                        <div
                            style={{
                                position: "absolute",
                                width: "80%",
                                height: "80%",
                                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
                                borderRadius: "50%",
                                filter: "blur(50px)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        />

                        {/* Image container */}
                        <div
                            style={{
                                position: "relative",
                                padding: "6px",
                                background: "rgba(255, 255, 255, 0.08)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                borderRadius: "24px",
                                boxShadow: "0 25px 60px rgba(139, 92, 246, 0.2), 0 10px 30px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <img
                                src="/me2.jpeg"
                                alt="About Me"
                                style={{
                                    width: "360px",
                                    height: "450px",
                                    objectFit: "cover",
                                    borderRadius: "20px",
                                    display: "block",
                                }}
                            />

                            {/* Decorative floating elements */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-15px",
                                    right: "-15px",
                                    width: "60px",
                                    height: "60px",
                                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)",
                                }}
                            >
                                <RocketIcon />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                fontWeight: 800,
                                marginBottom: "1rem",
                                lineHeight: 1.2,
                            }}
                        >
                            Sobre <span className="gradient-text">Mí</span>
                        </h2>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.7)",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                marginBottom: "2.5rem",
                            }}
                        >
                            Soy un desarrollador full-stack apasionado por convertir problemas complejos
                            en soluciones elegantes y amigables. Con experiencia en tecnologías web modernas,
                            creo experiencias digitales hermosas y de alto rendimiento.
                        </p>

                        {/* Services Expanded Cards */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                marginBottom: "2.5rem",
                            }}
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="glass"
                                    style={{
                                        padding: "1.25rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1.25rem",
                                        borderRadius: "16px",
                                        transition: "all 0.3s ease",
                                        cursor: "default",
                                        border: "1px solid rgba(255,255,255,0.05)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateX(10px)";
                                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                        e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateX(0)";
                                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            background: service.gradient,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            flexShrink: 0,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{service.title}</h4>
                                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div
                            className="glass"
                            style={{
                                display: "flex",
                                gap: "2rem",
                                padding: "1.5rem 2rem",
                                borderRadius: "16px",
                                justifyContent: "space-around",
                            }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} style={{ textAlign: "center" }}>
                                    <div
                                        className="gradient-text"
                                        style={{
                                            fontSize: "2rem",
                                            fontWeight: 800,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {stat.number}
                                    </div>
                                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
}

// Projects Section
function Projects() {
    const projects = [
        {
            title: "Penguin Academy",
            description: "Plataforma educativa especializada en Inteligencia Artificial, programación y matemáticas aplicadas.",
            image: "/proyecto1.png",
            tags: ["Next.js", "React", "TypeScript", "Tailwind"],
            live: "https://example.com",
        },
        {
            title: "TREEJS",
            description: "Aplicación web interactiva con animaciones 3D creadas con ThreeJS.",
            image: "/proyecto2.png",
            tags: ["ThreeJS", "JavaScript", "WebGL", "3D"],
            live: "https://example.com",
        },
        {
            title: "Entropy Evolve",
            description: "Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software.",
            image: "/proyecto3.png",
            tags: ["Python", "AI", "Machine Learning"],
            live: "https://example.com",
        },
        {
            title: "Metro CDMX",
            description: "Calculador de rutas óptimas para el sistema de transporte colectivo Metro de la Ciudad de México.",
            image: "/proyecto4.png",
            tags: ["Algorithms", "Graph Theory", "React"],
            live: "https://example.com",
        },
        {
            title: "Portafolios Web",
            description: "Colección de diseños de portafolios web modernos, interactivos y totalmente responsivos.",
            image: "/proyecto5.png",
            tags: ["Web Design", "Next.js", "Animations"],
            live: "https://example.com",
        },
        {
            title: "Tutor Inteligente",
            description: "Plataforma web inteligente para crear evaluaciones académicas mediante inteligencia artificial.",
            image: "/proyecto6.png",
            tags: ["AI", "Education", "Machine Learning"],
            live: "https://example.com",
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">
                    Mis <span className="gradient-text">Proyectos</span>
                </h2>
                <p className="section-subtitle">
                    Una selección de mis trabajos recientes y experimentos técnicos
                </p>

                {/* Bento Grid Layout */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gridTemplateRows: "auto",
                        gap: "1.5rem",
                    }}
                    className="projects-bento"
                >
                    {projects.map((project, index) => {
                        // Define grid spans for bento layout
                        const spans: { [key: number]: { col: string; row: string; height: string } } = {
                            0: { col: "span 8", row: "span 1", height: "400px" },
                            1: { col: "span 4", row: "span 1", height: "400px" },
                            2: { col: "span 4", row: "span 1", height: "350px" },
                            3: { col: "span 4", row: "span 1", height: "350px" },
                            4: { col: "span 4", row: "span 1", height: "350px" },
                            5: { col: "span 12", row: "span 1", height: "300px" },
                        };
                        const span = spans[index] || { col: "span 4", row: "span 1", height: "350px" };

                        return (
                            <a
                                key={index}
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card"
                                style={{
                                    gridColumn: span.col,
                                    gridRow: span.row,
                                    height: span.height,
                                    position: "relative",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    textDecoration: "none",
                                    display: "block",
                                    cursor: "pointer",
                                }}
                            >
                                {/* Background Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-bg"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="project-overlay"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(180deg, transparent 30%, rgba(15, 15, 35, 0.95) 100%)",
                                        transition: "opacity 0.4s ease",
                                    }}
                                />

                                {/* Hover Glow Effect */}
                                <div
                                    className="project-glow"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
                                        opacity: 0,
                                        transition: "opacity 0.4s ease",
                                    }}
                                />

                                {/* Content */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: "2rem",
                                        zIndex: 2,
                                    }}
                                >
                                    {/* Tags */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "0.5rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    fontSize: "0.7rem",
                                                    padding: "0.35rem 0.75rem",
                                                    background: "rgba(255,255,255,0.1)",
                                                    backdropFilter: "blur(8px)",
                                                    borderRadius: "999px",
                                                    color: "rgba(255,255,255,0.9)",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontSize: index === 0 || index === 5 ? "2rem" : "1.5rem",
                                            fontWeight: 800,
                                            marginBottom: "0.5rem",
                                            color: "white",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="project-desc"
                                        style={{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "0.95rem",
                                            lineHeight: 1.6,
                                            maxHeight: 0,
                                            overflow: "hidden",
                                            opacity: 0,
                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div
                                    className="project-arrow"
                                    style={{
                                        position: "absolute",
                                        top: "1.5rem",
                                        right: "1.5rem",
                                        width: "48px",
                                        height: "48px",
                                        background: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(8px)",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        opacity: 0,
                                        transform: "translate(10px, -10px)",
                                        transition: "all 0.4s ease",
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <style jsx>{`
                    .project-card:hover .project-bg {
                        transform: scale(1.1);
                    }
                    .project-card:hover .project-glow {
                        opacity: 1;
                    }
                    .project-card:hover .project-desc {
                        max-height: 100px;
                        opacity: 1;
                        margin-top: 0.5rem;
                    }
                    .project-card:hover .project-arrow {
                        opacity: 1;
                        transform: translate(0, 0);
                    }
                    @media (max-width: 900px) {
                        .projects-bento {
                            display: flex !important;
                            flex-direction: column !important;
                        }
                        .project-card {
                            grid-column: span 12 !important;
                            height: 300px !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}

// Community Section
function Community() {
    const groups = [
        {
            name: "Telegram",
            image: "/telegram.jpg",
            color: "#0088cc",
            description: "Únete a nuestra comunidad en Telegram",
        },
        {
            name: "WhatsApp",
            image: "/Whatsapp.jpg",
            color: "#25D366",
            description: "Únete a nuestro grupo de WhatsApp",
        },
    ];

    return (
        <section
            id="community"
            className="section"
            style={{
                background: "linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%)",
                padding: "6rem 1.5rem",
            }}
        >
            <div className="container" style={{ textAlign: "center" }}>
                <h2 className="section-title">
                    ¡Únete a la <span className="gradient-text">Comunidad</span>!
                </h2>
                <p
                    className="section-subtitle"
                    style={{
                        fontSize: "1.3rem",
                        maxWidth: "600px",
                        margin: "0 auto 3rem",
                    }}
                >
                    Escanea el código QR y sé parte de nuestra comunidad de desarrolladores 🚀
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {groups.map((group, index) => (
                        <div
                            key={index}
                            className="glass"
                            style={{
                                padding: "2rem",
                                borderRadius: "24px",
                                textAlign: "center",
                                transition: "all 0.4s ease",
                                border: `2px solid ${group.color}30`,
                                background: "rgba(255, 255, 255, 0.03)",
                                minWidth: "280px",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                                e.currentTarget.style.boxShadow = `0 20px 60px ${group.color}30`;
                                e.currentTarget.style.borderColor = `${group.color}60`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0) scale(1)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.borderColor = `${group.color}30`;
                            }}
                        >
                            <div
                                style={{
                                    width: "220px",
                                    margin: "0 auto 1.5rem",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={group.image}
                                    alt={`QR ${group.name}`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        borderRadius: "8px",
                                    }}
                                />
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "0.5rem",
                                    color: group.color,
                                }}
                            >
                                {group.name}
                            </h3>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.7)",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {group.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        marginTop: "3rem",
                        fontSize: "1.1rem",
                        color: "rgba(255,255,255,0.6)",
                    }}
                >
                    📱 ¡Escanea con tu cámara y únete ahora!
                </p>
            </div>
        </section>
    );
}

// Skills Section
function Skills() {
    const skillCategories = [
        {
            title: "Frontend & UI",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ThreeJS", "Figma"],
        },
        {
            title: "Backend & Cloud",
            skills: ["Node.js", "Python", "Django", "PostgreSQL", "AWS", "Docker"],
        },
        {
            title: "IA & Algoritmos",
            skills: ["Machine Learning", "TensorFlow", "AI Agents", "Graph Theory", "Algorithms", "Python"],
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">
                    Habilidades y <span className="gradient-text">Tecnologías</span>
                </h2>
                <p className="section-subtitle">
                    Las herramientas y tecnologías que utilizo para dar vida a las ideas
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
        alert("¡Gracias por contactarme! Te responderé pronto.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
            <div className="container">
                <h2 className="section-title">
                    ¿Hablamos? <span className="gradient-text">Contáctame</span>
                </h2>
                <p className="section-subtitle">
                    ¿Tienes un proyecto en mente? Me encantaría escucharte. Creemos algo increíble juntos.
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
                                Nombre
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
                                Correo Electrónico
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
                                Mensaje
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
                            Enviar Mensaje
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
                    © {new Date().getFullYear()} Desarrollador. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

// Main Page Component
export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <CustomCursor />
            <Navigation />
            <main
                style={{
                    filter: isLoaded ? "blur(0)" : "blur(20px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: "filter 1.5s ease-out, opacity 1.5s ease-out",
                }}
            >
                <Hero />
                <RevealOnScroll>
                    <Projects />
                </RevealOnScroll>
                <RevealOnScroll>
                    <About />
                </RevealOnScroll>
                <RevealOnScroll>
                    <Community />
                </RevealOnScroll>
                <RevealOnScroll>
                    <Skills />
                </RevealOnScroll>
                <RevealOnScroll>
                    <Contact />
                </RevealOnScroll>
                <Footer />
            </main>
        </>
    );
}
