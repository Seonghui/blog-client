import Navbar from "@/app/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto lg:max-w-screen-md sm:max-w-screen-sm">
        {children}
      </main>
    </>
  );
}
