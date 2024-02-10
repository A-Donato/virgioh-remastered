"use client";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  console.log("path", path);

  return (
    <Navbar>
      <NavbarContent>
        <NavbarItem>
          <Link href={"/"}>AAAA</Link>
        </NavbarItem>
        <NavbarItem> AAAA </NavbarItem>
        <NavbarItem> AAAA </NavbarItem>
        <NavbarItem> AAAA </NavbarItem>
        <NavbarItem> AAAA </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
