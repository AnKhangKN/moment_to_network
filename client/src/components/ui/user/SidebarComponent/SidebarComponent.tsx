"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

type SidebarItem = {
  name: string;
  link: string;
  icon: (active: boolean) => React.ReactNode;
};

export default function SidebarComponent() {
  const pathname = usePathname();

  const sidebarItems: SidebarItem[] = [
    {
      name: "Trang chủ",
      link: "/",
      icon: (active) =>
        active ? <PiHouseSimpleFill size={22} /> : <PiHouseSimple size={22} />,
    },
    {
      name: "Tìm kiếm",
      link: "/search",
      icon: (active) =>
        active ? (
          <PiMagnifyingGlassFill size={22} />
        ) : (
          <PiMagnifyingGlass size={22} />
        ),
    },
    {
      name: "Nhóm",
      link: "/group",
      icon: (active) =>
        active ? <PiUsersFill size={22} /> : <PiUsers size={22} />,
    },
    {
      name: "Tạo bài",
      link: "/create-post",
      icon: () => <PiPlusCircle size={22} />,
    },
    {
      name: "Tin nhắn",
      link: "/messages",
      icon: (active) =>
        active ? (
          <PiChatCircleDotsFill size={22} />
        ) : (
          <PiChatCircleDots size={22} />
        ),
    },
    {
      name: "Thông báo",
      link: "/notification",
      icon: (active) =>
        active ? <PiBellSimpleFill size={22} /> : <PiBellSimple size={22} />,
    },
    {
      name: "Trang cá nhân",
      link: `/khang_phan`,
      icon: (active) =>
        active ? <PiUserCircleFill size={22} /> : <PiUserCircle size={22} />,
    },
  ];

  return (
    <aside className="hidden md:block h-screen w-56 bg-white border-r">
      <div className="flex flex-col h-full p-4 justify-between">
        {/* Logo */}
        <div className="text-xl font-bold mb-6">LOGO</div>

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
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-gray-200 font-medium"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {item.icon(isActive)}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="text-sm text-gray-500">Xem thêm</div>
      </div>
    </aside>
  );
}
