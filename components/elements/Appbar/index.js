import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Popconfirm } from "antd";
import Logo from "../../../assets/images/logos/AppbarLogo.svg";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getLS, removeLS } from "../../utils/LocalStorage";
import { UserContext, AppbarContext } from "../../context";

export default function index() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const router = useRouter();
  const collapseItems = ["Home", "Dashboard", "Documentation", "FAQ"];
  const { active, setActive } = useContext(AppbarContext);
  return (
    <Navbar variant="sticky" className="w-full opacity-100 bg-[#FFFFFF]">
      <Navbar.Toggle
        showIn={"sm"}
        aria-label="toggle navigation"
        className="mx-2 fill-[#00FF00]"
      />
      <Navbar.Brand>
        <Link href="/">
          <Image src={Logo} className="h-16 w-16 mr-4" />
        </Link>
        <Link href="/">
          <Text b color="success" hideIn="xs" className="text-2xl">
            SaveMyForm
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content activeColor={"success"} hideIn="sm" variant={"default"}>
        <Navbar.Link
          isActive={active.home}
          // href="/"
          onClick={() => {
            router.push("/");
            // setActive([true, false, false, false]);
          }}
          className="hover:text-[#116148] text-lg"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          isActive={active.dashboard}
          // href="/dashboard"
          onClick={() => {
            router.push("/dashboard");
            // setActive([false, true, false, false]);
          }}
          className="hover:text-[#116148] text-lg"
        >
          Dashboard
        </Navbar.Link>
        <Navbar.Link
          isActive={active.documentation}
          // href="/documentation"
          onClick={() => {
            router.push("/documentation");
            // setActive([false, false, true, false]);
          }}
          className="hover:text-[#116148] text-lg"
        >
          Documentation
        </Navbar.Link>
        <Navbar.Link
          isActive={active.faq}
          // href="/faq"
          onClick={() => {
            router.push("/faq");
            // setActive([false, false, false, true]);
          }}
          className="hover:text-[#116148] text-lg"
        >
          FAQs
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {!isLoggedIn ? (
          <>
            {/* <Link href="/signin"> */}
            <Button
              bordered
              flat
              auto
              color="success"
              className="hover:bg-[#90EE90]  hover:bg-opacity-25 rounded-md text-lg"
              onClick={() => router.push("/signin")}
            >
              Login
            </Button>
            {/* </Link> */}
            {/* <Link href="/signup"> */}
            <Button
              auto
              flat
              bordered
              color={"success"}
              className="bg-[#01EC64] text-[#00694B] hover:bg-[#11FC74] rounded-md text-lg"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </Button>
            {/* </Link> */}
          </>
        ) : (
          <>
            <Popconfirm
              placement="leftTop"
              title="Are you sure you want to Log Out?"
              // description="Are you sure? You want to delete this task"
              onConfirm={() => {
                removeLS("secret");
                router.push("/");
                setIsLoggedIn(false);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                auto
                flat
                bordered
                color={"danger"}
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-[#FFF]  rounded-md text-lg"
                // onClick={showModal}
              >
                Log Out
              </Button>
            </Popconfirm>
          </>
        )}
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
