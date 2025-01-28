import MainHeader from "@/components/main-header/page";
import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function ContenLayout({ children }) {
  return (
        <div id="page">
          <MainHeader />
          {children}
        </div>
  );
}
