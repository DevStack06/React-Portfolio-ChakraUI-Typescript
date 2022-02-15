import React from "react";
import Footer from "../../foundation/Footer/Footer";
import NavBar from "../../foundation/NavBar/NavBar";

export default function LayoutPage({ children }: { children: any }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
