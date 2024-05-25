import React from "react";
import Header from "./admin/Header";
import { Outlet } from "react-router-dom";
import Footer from "./admin/Footer";

const LayoutAdmin = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
