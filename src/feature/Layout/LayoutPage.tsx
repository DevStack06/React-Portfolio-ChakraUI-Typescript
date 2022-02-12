import React from "react";
import NavBar from "../../foundation/NavBar/NavBar";

export default function LayoutPage({ children }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
