import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Logo from "../../../assets/images/logos/AppbarLogo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const collapseItems = ["Home", "Dashboard", "Documentation", "FAQs"];
  const [active, setActive] = useState([false, false, false, false]);
  useEffect(() => {
    if (router.pathname == "/home") setActive([true, false, false, false]);
    else if (router.pathname == "/dashboard")
      setActive([false, true, false, false]);
    else if (router.pathname == "/documentation")
      setActive([false, false, true, false]);
    else if (router.pathname == "/faqs") setActive([false, false, false, true]);
  }, []);

  return (
    <Navbar variant="sticky">
      <Navbar.Toggle
        showIn={"md"}
        aria-label="toggle navigation"
        className="mx-2 fill-[#00FF00]"
      />
      <Navbar.Brand>
        <Image src={Logo} className="h-16 w-16" />
        <Text b color="inherit" hideIn="xs">
          SaveMyForm
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={"success"} hideIn="md" variant={"default"}>
        <Navbar.Link
          isActive={active[0]}
          href="/home"
          className="hover:text-[#116148]"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          isActive={active[1]}
          href="/dashboard"
          className="hover:text-[#116148]"
        >
          Dashboard
        </Navbar.Link>
        <Navbar.Link
          isActive={active[2]}
          href="/documentation"
          className="hover:text-[#116148]"
        >
          Documentation
        </Navbar.Link>
        <Navbar.Link
          isActive={active[3]}
          href="/faqs"
          className="hover:text-[#116148]"
        >
          FAQs
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Button
          bordered
          flat
          auto
          color="success"
          className="hover:bg-[#90EE90] hover:text-[#FFFFFF]"
        >
          Login
        </Button>
        <Button
          auto
          flat
          bordered
          color={"success"}
          className="bg-[#01EC64] text-[#00694B] hover:bg-[#90EE90] hover:text-[#FFFFFF]"
        >
          Sign Up
        </Button>
      </Navbar.Content>
      <Navbar.Collapse className="text-[#00694B]">
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="success"
              css={{
                minWidth: "100%",
              }}
              href={`/${item.toLowerCase()}`}
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
