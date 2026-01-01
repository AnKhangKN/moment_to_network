"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiHouseSimple,
  PiHouseSimpleFill,
  PiUsers,
  PiUsersFill,
  PiChatCircleDots,
  PiChatCircleDotsFill,
  PiBellSimple,
  PiBellSimpleFill,
  PiUserCircle,
  PiUserCircleFill,
} from "react-icons/pi";

type SidebarItem = {
  name: string;
  link: string;
  icon: (active: boolean) => React.ReactNode;
};

export default function BottomComponent() {
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
      name: "Nhóm",
      link: "/group/feed",
      icon: () =>
        isGroupActive ? <PiUsersFill size={24} /> : <PiUsers size={24} />,
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
      link: "/khang_phan",
      icon: (active) =>
        active ? <PiUserCircleFill size={24} /> : <PiUserCircle size={24} />,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white">
      <ul className="flex justify-between items-center px-2 py-1">
        {sidebarItems.map((item) => {
          const isActive =
            item.link === "/" ? isHomeActive : pathname.startsWith(item.link);

          return (
            <li key={item.name} className="flex-1">
              <Link
                href={item.link}
                className={`flex flex-col items-center py-2 text-xs ${
                  isActive ? "text-indigo-600" : "text-gray-500"
                }`}
              >
                {item.icon(isActive)}
                <span className="mt-0.5">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
