import React, { useState, useMemo } from "react";
import Link from "next/link";
import classNames from "classnames";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  UsersIcon,
  VideosIcon,
  SearchIcon,
  CalcIcon,
  BuildingIcon,
  ChatIcon,
  MapIcon,
  ToolIcon,
  InfoIcon,
  DocumentIcon,
  EyeIcon,
  BillIcon,
  StoreIcon,
  ClipIcon,
  SupportIcon,
} from "../sidebar-icons";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

const menuItems = [
  { id: 1, label: "Dashboard", icon: HomeIcon, link: "/" },
  { id: 2, label: "FAQs", icon: ArticleIcon, link: "/faq" },
  { id: 3, label: "RFID Search Engine", icon: SearchIcon, link: "/help" },
  { id: 4, label: "Video Modules", icon: VideosIcon, link: "/modules" },
  { id: 5, label: "Floor Plan Generator", icon: BuildingIcon, link: "/floor" },
  { id: 6, label: "Community", icon: UsersIcon, link: "/community" },
  { id: 7, label: "ROI Calculator", icon: CalcIcon, link: "/roi" },
  { id: 8, label: "Chat", icon: ChatIcon, link: "/chat" },
  { id: 9, label: "Equipment Supplier Map", icon: MapIcon, link: "/map" },
  { id: 10, label: "Project Status Tool", icon: ToolIcon, link: "/tool" },
  { id: 11, label: "My IoT", icon: InfoIcon, link: "/iot" },
  { id: 12, label: "Documents", icon: DocumentIcon, link: "/docs" },
  { id: 13, label: "Machine Vision", icon: EyeIcon, link: "/vision" },
  { id: 14, label: "Support Desk", icon: SupportIcon, link: "/support" },
  { id: 15, label: "Equipment Log", icon: ClipIcon, link: "/equipment" },
  { id: 16, label: "Billing", icon: BillIcon, link: "/billing" },
  { id: 17, label: "E-store", icon: StoreIcon, link: "/store" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "px-4 pt-8 pb-4 bg- flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap bg-light-lighter"
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const LogoWrapper = styled.div`
    background: #132f43;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 0;
  `;

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{
        background: "#132f43",
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
        height: "auto",
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex-none w-12 h-12 items-center pl-1">
            {(!toggleCollapse || !isCollapsible) && (
              <LogoWrapper>
                <Link href="/">
                  <Image
                    src={"/logo.png"}
                    alt="Picture of the logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </Link>
              </LogoWrapper>
            )}
          </div>
          <span
            className={classNames("ml-2 text-lg font-medium text-text grow", {
              hidden: toggleCollapse,
            })}
          />
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-8">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={index}>
                <Link href={menu.link} legacyBehavior>
                  <div className="flex py-3 px-4 items-center w-full h-full ">
                    <div style={{ width: "3rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames("text-md font-medium text-white")}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
