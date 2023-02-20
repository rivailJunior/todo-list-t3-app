import ListProvider from "~/context/listContext";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <ListProvider>
        <body className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          {children}
        </body>
      </ListProvider>
    </html>
  );
}
