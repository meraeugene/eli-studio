import { ReactNode } from "react";
import { FaqSection } from "@/app/sections/(common)/Faq";
import { WhiteHeader } from "../../components/WhiteHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <WhiteHeader />
      <main>{children}</main>
      <FaqSection />
    </>
  );
}
