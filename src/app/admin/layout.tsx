import AdminLayout from "@/components/layout/AdminLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
