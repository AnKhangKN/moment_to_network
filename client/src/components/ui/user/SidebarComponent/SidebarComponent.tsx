"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import {
  PiHouseSimple,
  PiHouseSimpleFill,
  PiMagnifyingGlass,
  PiUsers,
  PiPlusCircle,
  PiChatCircleDots,
  PiBellSimple,
  PiBellSimpleFill,
  PiUserCircle,
  PiChatCircleDotsFill,
  PiUserCircleFill,
  PiUsersFill,
  PiMagnifyingGlassFill,
} from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";

type SidebarItem = {
  name: string;
  link: string;
  icon: (active: boolean) => React.ReactNode;
};

export default function SidebarComponent() {
  const pathname = usePathname();

  const isHomeActive =
    pathname === "/" || pathname === "/following" || pathname === "/friends";

  const isGroupActive = pathname.startsWith("/group");

  const sidebarItems: SidebarItem[] = [
    {
      name: "Trang chủ",
      link: "/",
      icon: () =>
        isHomeActive ? (
          <PiHouseSimpleFill size={24} />
        ) : (
          <PiHouseSimple size={24} />
        ),
    },
    {
      name: "Tìm kiếm",
      link: "/search",
      icon: (active) =>
        active ? (
          <PiMagnifyingGlassFill size={24} />
        ) : (
          <PiMagnifyingGlass size={24} />
        ),
    },
    {
      name: "Nhóm",
      link: "/group/feed",
      icon: () =>
        isGroupActive ? <PiUsersFill size={24} /> : <PiUsers size={24} />,
    },
    {
      name: "Tạo bài",
      link: "/create-post",
      icon: () => <PiPlusCircle size={24} />,
    },
    {
      name: "Tin nhắn",
      link: "/messages",
      icon: (active) =>
        active ? (
          <PiChatCircleDotsFill size={24} />
        ) : (
          <PiChatCircleDots size={24} />
        ),
    },
    {
      name: "Thông báo",
      link: "/notification",
      icon: (active) =>
        active ? <PiBellSimpleFill size={24} /> : <PiBellSimple size={24} />,
    },
    {
      name: "Trang cá nhân",
      link: `/khang_phan`,
      icon: (active) =>
        active ? <PiUserCircleFill size={24} /> : <PiUserCircle size={24} />,
    },
  ];

  return (
    <aside
      className={`${
        pathname.startsWith("/group")
          ? "hidden"
          : "md:block h-screen transition-all duration-300 ease-in-out lg:w-56 w-22"
      } hidden 
      `}
    >
      <div className="flex flex-col h-full p-4 justify-between">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-3 h-10">
          <div className="px-2 lg:hidden block">
            <RiNextjsFill size={40} />
          </div>
          <div className="lg:block hidden px-4">Nextjs</div>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);

            return (
              <Link
                key={item.link}
                href={item.link}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg transition
                  ${
                    isActive ? "bg-gray-200" : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                <span>{item.icon(isActive)}</span>

                <span
                  className={`whitespace-nowrap transition-all duration-300 opacity-0 w-0 overflow-hidden
                    lg:opacity-100 lg:w-auto`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer toggle */}
        <div
          className="text-gray-500 flex items-center gap-3 px-4 py-3.5 rounded-lg cursor-pointer 
        hover:bg-gray-100"
        >
          <div>
            <HiMiniBars3BottomLeft size={24} />
          </div>
          <span
            className={`whitespace-nowrap transition-all duration-300 opacity-0 w-0 overflow-hidden
                    lg:opacity-100 lg:w-auto`}
          >
            Xem thêm
          </span>
        </div>
      </div>
    </aside>
  );
}
