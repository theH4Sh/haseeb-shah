import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://haseebshah.dev"),
  title: {
    default: "Haseeb Shah — Backend & Fullstack Developer",
    template: "%s | Haseeb Shah",
  },
  description:
    "Portfolio of Haseeb Shah, a Backend & Fullstack Developer specializing in Node.js, Python, React, PostgreSQL, LangChain, and scalable web applications.",
  keywords: [
    "Haseeb Shah",
    "Backend Developer",
    "Fullstack Developer",
    "Software Engineer",
    "Node.js Developer",
    "Python Developer",
    "React Developer",
    "Next.js",
    "Django",
    "PostgreSQL",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Haseeb Shah", url: "https://github.com/theH4Sh" }],
  creator: "Haseeb Shah",
  publisher: "Haseeb Shah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haseeb Shah — Backend & Fullstack Developer",
    description:
      "Backend & Fullstack Developer building scalable web applications, APIs, databases, and modern frontends with Node.js, Python, and React.",
    url: "/",
    siteName: "Haseeb Shah Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haseeb Shah — Backend & Fullstack Developer",
    description:
      "Backend & Fullstack Developer building scalable web applications with Node.js, Python, and React.",
    creator: "@theH4Sh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
