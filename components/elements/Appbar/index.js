import React from 'react';
import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Popconfirm } from 'antd';
import Logo from '../../../assets/images/logos/AppbarLogo.svg';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { getLS, removeLS } from '../../utils/LocalStorage';
import { UserContext, AppbarContext } from '../../context';

import { useRef } from 'react';

export default function index() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { active, setActive } = useContext(AppbarContext);
  const router = useRouter();
  const collapseItems = ['Home', 'Dashboard', 'Documentation', 'FAQ'];
  const [openCollapse, setOpenCollapse] = useState(false);
  const navbarToggleRef = useRef();

  return (
    <Navbar variant="sticky" className="w-full opacity-100 bg-[#FFFFFF]">
      <Navbar.Toggle
        showIn={'sm'}
        aria-label="toggle navigation"
        className="mx-2 fill-[#00FF00]"
        onChange={(isSelected) => setOpenCollapse(isSelected)}
        ref={navbarToggleRef}
      />
      <Navbar.Brand>
        <Link onClick={() => router.push('/')}>
          <Image src={Logo} className="h-16 w-16 mr-4" alt="Logo" />
        </Link>
        <Link onClick={() => router.push('/')}>
          <Text b color="#001E2B" hideIn="xs" className="text-2xl">
            SaveMyForm
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content activeColor={'success'} hideIn="sm" variant={'default'}>
        <Navbar.Link
          isActive={active.home}
          onClick={() => {
            router.push('/');
          }}
          className="hover:text-[#116148] text-lg font-semibold"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          isActive={active.dashboard}
          onClick={() => {
            router.push('/dashboard');
          }}
          className="hover:text-[#116148] text-lg font-semibold"
        >
          Dashboard
        </Navbar.Link>
        <Navbar.Link
          isActive={active.documentation}
          onClick={() => {
            router.push('/documentation');
          }}
          className="hover:text-[#116148] text-lg font-semibold"
        >
          Documentation
        </Navbar.Link>
        <Navbar.Link
          isActive={active.faq}
          onClick={() => {
            router.push('/faq');
          }}
          className="hover:text-[#116148] text-lg font-semibold"
        >
          FAQs
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {!isLoggedIn ? (
          <>
            <Button
              flat
              auto
              color="transparent"
              className="text-lg font-semibold cursor-pointer hover:text-[#00694B] hover:bg-[#DEF7E5] rounded-md"
              onClick={() => router.push('/signin')}
            >
              Login
            </Button>
            <Button
              auto
              flat
              bordered
              color={'#001E2B'}
              className="bg-[#01EC64] border-[#001E2B] text-[#001E2B] hover:bg-[#11FC74] rounded-md text-lg font-bold"
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Popconfirm
              placement="leftTop"
              title="Are you sure you want to Log Out?"
              // description="Are you sure? You want to delete this task"
              onConfirm={() => {
                removeLS('secret');
                router.push('/');
                setIsLoggedIn(false);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                auto
                flat
                bordered
                color={'danger'}
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-[#FFF]  rounded-md text-lg"
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
            <div
              css={{
                minWidth: '100%',
              }}
              onClick={() => {
                router.push(
                  item.toLowerCase() === 'home'
                    ? '/'
                    : `/${item.toLowerCase()}`,
                );
                openCollapse && navbarToggleRef.current.click();
              }}
              className="hover:text-[#00694B] duration-75 text-left"
            >
              {item}
            </div>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
