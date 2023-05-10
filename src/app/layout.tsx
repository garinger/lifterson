import "./globals.css";

export const metadata = {
  title: "Lifterson",
  description: "Track lifting stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
