import "./globals.css";

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn’t just a website. It’s something truly special, built with love — just for you. Open it and feel it unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* --- PREMIUM FONTS IMPORT START --- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@700;800&family=Grand+Hotel&display=swap" 
          rel="stylesheet" 
        />
        {/* --- PREMIUM FONTS IMPORT END --- */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
