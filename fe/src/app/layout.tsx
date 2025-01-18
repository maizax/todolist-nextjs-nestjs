import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <main className="flex justify-center my-10">{children}</main>
      </body>
    </html>
  );
}
