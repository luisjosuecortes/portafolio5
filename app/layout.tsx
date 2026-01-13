import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Developer Portfolio | Creative Solutions",
    description: "Full-stack developer specializing in modern web applications, UI/UX design, and scalable solutions. Let's build something amazing together.",
    keywords: ["developer", "portfolio", "web development", "full-stack", "react", "nextjs"],
    authors: [{ name: "Developer" }],
    openGraph: {
        title: "Developer Portfolio | Creative Solutions",
        description: "Full-stack developer specializing in modern web applications",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body>
                {/* Animated background orbs */}
                <div className="bg-orbs">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                </div>
                {children}
            </body>
        </html>
    );
}
