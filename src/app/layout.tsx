import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://tepeumut.com'),
    title: "Umut Tepe - Full Stack Developer",
    description: "Full Stack Developer specializing in web development, blockchain, and modern technologies.",
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
        title: "Umut Tepe - Full Stack Developer",
        description: "Full Stack Developer specializing in web development, blockchain, and modern technologies.",
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
        title: "Umut Tepe - Full Stack Developer",
        description: "Full Stack Developer specializing in web development, blockchain, and modern technologies.",
        creator: "@tepeumut",
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
    },
    robots: {
        index: true,
        follow: true,
    },
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
