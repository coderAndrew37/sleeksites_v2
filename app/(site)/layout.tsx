import { FloatingChat } from "../components/ui/FloatingButton";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FloatingChat />
      <Footer />
    </>
  );
}
