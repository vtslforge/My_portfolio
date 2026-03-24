"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <main className="fixed bottom-10 left-1/2 -translate-x-1/2 border h-12 w-fit bg-chart-5">
        <Button>Home</Button>
        <Button>Blog</Button>
        <Button>Git</Button>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Theme
      </Button>
    </main>
  );
};

export default Navbar;
