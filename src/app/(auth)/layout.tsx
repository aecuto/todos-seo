export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <div className="m-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
