import "@/styles/globals.css";
import { Providers } from "./providers";
import { robotoFont } from "./ui/fonts";
import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background p-8">
      <body className={`${robotoFont} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
