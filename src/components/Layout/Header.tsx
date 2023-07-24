import { useState, FC, useEffect } from "react";
import NextLink from "next/link";
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";

import ConnectButton from "../ConnectButton";
import { Logo } from "../ui";

interface Props {}

const navigation = [
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Discord", href: "#" },
  { name: "OpenSea", href: "#" },
];

const Header: FC<Props> = ({}) => {
  //Change nav color when scroll
  const [scrolling, setScrolling] = useState(false);
  const handleScroll: any = () => setScrolling(window.scrollY >= 90);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white-10">
      <Navbar
        css={{
          ...(scrolling
            ? {
              $$navbarBlurBackgroundColor: "transparent",
            }
            : {
                $$navbarBackgroundColor: "transparent",
                $$navbarBlurBackgroundColor: "transparent",
                $$navbarBlur: "3px",
              }),
        }}
        disableBlur={!scrolling}
        isBordered
        variant="sticky"
      >
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          {navigation.map((item, i) => (
            <NextLink href={item.href}>
              <Navbar.Link key={i}>{item.name}</Navbar.Link>
            </NextLink>
          ))}
        </Navbar.Content>
        <Navbar.Content
          hideIn="xs"
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item>
            <ConnectButton />
          </Navbar.Item>
          {/* <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Navbar.Content>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Collapse
          css={{
            background: "transparent",
            $$navbarListBlurBackgroundColor: "transparent",
          }}
        >
          {navigation.map((item, index) => (
            <Navbar.CollapseItem
              key={item.name}
              activeColor="secondary"
              isActive={index === 2}
            >
              <NextLink href={item.href}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                >
                  {item.name}
                </Link>
              </NextLink>
            </Navbar.CollapseItem>
          ))}
          <Navbar.CollapseItem>
            <ConnectButton />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
