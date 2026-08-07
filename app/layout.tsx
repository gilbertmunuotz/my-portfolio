import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { MotionProvider } from "@/components/motion-provider"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import Script from "next/script"


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
    images: [
      {
        url: "/me-1200.jpg",
        width: 1200,
        height: 630,
        alt: "Gilbert Munuo - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilbert Munuo | Full-Stack Developer",
    description: "Full-stack developer specializing in scalable web and mobile applications.",
    images: ["/me-1200.jpg"]
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>

        <Script
          id="person-schema"
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

      </body>
    </html>
  );
}
