import Footer from "@/components/Footer";
import Navber from "@/components/Navbar/Navbar";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navber/>
      <main className="min-h-dvh">{children}</main>
      <Footer/>
    </>
  );
}