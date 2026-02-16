import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Gilbert Munuo | Full-Stack Developer",
  description: "Full-stack developer specializing in scalable web and mobile applications.",
  keywords: [
    "Gilbert Munuo",
    "Full Stack Developer Tanzania",
    "Next.js Developer",
    "React Native Developer",
    "Software Engineer Tanzania",
  ],
  authors: [{ name: "Gilbert Munuo" }],
  creator: "Gilbert Munuo",
  metadataBase: new URL("https://gilbertmunuotz.com"),
  openGraph: {
    title: "Gilbert Munuo | Full-Stack Developer",
    description: "Full-stack developer specializing in scalable web and mobile applications.",
    url: "https://gilbertmunuotz.com",
    siteName: "Gilbert Munuo's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilbert Munuo | Full-Stack Developer",
    description: "Full-stack developer specializing in scalable web and mobile applications.",
  },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gilbert Munuo",
      jobTitle: "Full Stack Developer",
      url: "https://gilbertmunuotz.com",
      sameAs: [
        "https://github.com/gilbertmunuotz",
        "https://x.com/gilbertmunuotz",
        "https://instagram.com/gilbertmunuotz"
      ],
    }),
  }}
/>

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
