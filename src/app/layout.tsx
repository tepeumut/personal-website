import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Umut Tepe - Full Stack Developer & Blockchain Enthusiast",
    description: "Full-stack developer with 5 years of experience, specializing in web, mobile, and blockchain development.",
    keywords: [
        "Umut Tepe",
        "Full Stack Developer",
        "Blockchain Developer",
        "Software Engineer",
        "Web Development",
        "Mobile Development",
        "Istanbul",
        "Turkey",
        "Solana",
        "Solidity",
        "React",
        "Node.js"
    ],
    authors: [{name: "Umut Tepe"}],
    creator: "Umut Tepe",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://tepeumut.com",
        title: "Umut Tepe - Full Stack Developer & Blockchain Enthusiast",
        description: "Full-stack developer with 5 years of experience, specializing in web, mobile, and blockchain development.",
        siteName: "Umut Tepe",
        images: [
            {
                url: "/favicon.svg",
                width: 32,
                height: 32,
                alt: "Umut Tepe"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Umut Tepe - Full Stack Developer & Blockchain Enthusiast",
        description: "Full-stack developer with 5 years of experience, specializing in web, mobile, and blockchain development.",
        creator: "@tepeumut1",
        images: [
            {
                url: "/favicon.svg",
                width: 32,
                height: 32,
                alt: "Umut Tepe"
            }
        ]
    },
    icons: {
        icon: [
            {
                url: "/favicon.svg",
                sizes: "32x32",
                type: "image/svg+xml"
            }
        ]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}
