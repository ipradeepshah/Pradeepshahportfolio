
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradeep Shah - IT Support Engineer & Cybersecurity Enthusiast",
  description: " Pradeep Shah is a professional IT Support Engineer and Cybersecurity Enthusiast based in UAE. Expert in IT troubleshooting, Microsoft 365, networking, and secure IT solutions",
  keywords: [
    "Pradeep Shah",
    "Engineer",
    "IT Support Engineer",
    "Cybersecurity Enthusiast",
    "IT troubleshooting services",
    "Microsoft 365 setup",
    "Network troubleshooting",
    "IT support engineer UAE",
    "Outlook Email backup solutions",
    "Remote desktop troubleshooting UAE"
  ],
  authors: [{ name: "Pradeep Shah",
              
     url: "https://www.linkedin.com/in/ipradeepshah/" }],
  creator: "Pradeep Shah",
  openGraph: {
    title: "Pradeep Shah - Full Stack Developer",
    description: "Explore the portfolio of Pradeep Shah, a passionate Full Stack Developer with expertise in building modern web applications. Discover projects, blogs, and more.",
    url: "https://pradeepshah.com.np",
    siteName: "Pradeep Shah - IT Support Engineer & Cybersecurity Enthusiast ",
    // images: [
    //   {
    //     url: "https://pradeepshah.vercel.app/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pradeep Shah Portfolio",
    //   },
    //   ],
    },
    verification: {
      google: "ojrMCa-WpK0Vy08VcOeDGmV6KMrBtlUueQNTUqZs8To",
    },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ojrMCa-WpK0Vy08VcOeDGmV6KMrBtlUueQNTUqZs8To" />
        </head>
        
        
        
    <body className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
