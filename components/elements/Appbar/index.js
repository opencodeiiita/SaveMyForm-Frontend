import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Logo from "../../../assets/images/logos/AppbarLogo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const collapseItems = ["Home", "Dashboard", "Documentation", "FAQ"];
  const [active, setActive] = useState([false, false, false, false]);
  useEffect(() => {
    if (router.pathname == "/") setActive([true, false, false, false]);
    else if (router.pathname == "/dashboard")
      setActive([false, true, false, false]);
    else if (router.pathname == "/documentation")
      setActive([false, false, true, false]);
    else if (router.pathname == "/faq") setActive([false, false, false, true]);
  }, []);

  return (
    <Navbar variant="sticky" className="w-full opacity-100 bg-[#FFFFFF]">
      <Navbar.Toggle
        showIn={"sm"}
        aria-label="toggle navigation"
        className="mx-2 fill-[#00FF00]"
      />
      <Navbar.Brand>
        <Image src={Logo} className="h-16 w-16 mr-4" />
        <Text b color="inherit" hideIn="xs" className="text-2xl">
          SaveMyForm
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={"success"} hideIn="sm" variant={"default"}>
        <Navbar.Link
          isActive={active[0]}
          href="/"
          className="hover:text-[#116148] text-lg"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          isActive={active[1]}
          href="/dashboard"
          className="hover:text-[#116148] text-lg"
        >
          Dashboard
        </Navbar.Link>
        <Navbar.Link
          isActive={active[2]}
          href="/documentation"
          className="hover:text-[#116148] text-lg"
        >
          Documentation
        </Navbar.Link>
        <Navbar.Link
          isActive={active[3]}
          href="/faq"
          className="hover:text-[#116148] text-lg"
        >
          FAQs
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Link href="/signin">
          <Button
            bordered
            flat
            auto
            color="success"
            className="hover:bg-[#90EE90] hover:text-[#FFFFFF] rounded-md text-lg"
          >
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button
            auto
            flat
            bordered
            color={"success"}
            className="bg-[#01EC64] text-[#00694B] hover:bg-[#90EE90] hover:text-[#FFFFFF] rounded-md text-lg"
          >
            Sign Up
          </Button>
        </Link>
      </Navbar.Content>
      <Navbar.Collapse className="text-[#00694B]">
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="success"
              css={{
                minWidth: "100%",
              }}
              href={
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
              }
              className="hover:text-[#00694B] duration-75"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
