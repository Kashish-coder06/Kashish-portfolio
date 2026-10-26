import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Bubbles from "@/components/Bubbles";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kashish Kumari | Python Developer & Data Analytics Portfolio",
  description:
    "Portfolio of Kashish Kumari - Python Developer, Data Analyst, Graphic Designer & GenAI Builder based in Hyderabad, Pakistan. Specializing in RAG pipelines, FastAPI workflows, and visual design.",
  keywords: [
    "Kashish Kumari",
    "Python Developer",
    "Data Analytics",
    "Generative AI",
    "Graphic Designer",
    "FastAPI",
    "Pandas",
    "Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Kashish Kumari" }],
  creator: "Kashish Kumari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kashishkumari.dev",
    title: "Kashish Kumari | Python Developer & Data Analytics Portfolio",
    description:
      "Python developer and data analytics learner who builds AI-powered tools, automations and clean visual designs.",
    siteName: "Kashish Kumari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashish Kumari | Portfolio",
    description:
      "Python developer and data analytics learner who builds AI-powered tools, automations and clean visual designs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased selection:bg-cyan-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Bubbles />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
