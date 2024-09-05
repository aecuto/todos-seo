export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="pt-20">
          <div className="flex justify-center max-w-[1024px] flex-col mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
