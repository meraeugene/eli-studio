import { FaqSection } from "@/app/sections/(common)/Faq";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <FaqSection />
    </>
  );
}
