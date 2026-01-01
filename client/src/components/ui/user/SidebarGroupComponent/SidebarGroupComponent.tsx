"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiArrowLeftLight,
  PiCompassFill,
  PiCompassLight,
  PiCopySimpleFill,
  PiCopySimpleLight,
  PiGearSixFill,
  PiMagnifyingGlass,
  PiPlusLight,
  PiUsersFill,
  PiUsersLight,
} from "react-icons/pi";
import GroupSection from "./GoupSection/GroupSection";
import MyGroupSection from "./MyGroupSection/MyGroupSection";
import { Group } from "./group.type";

interface GroupNavigation {
  name: string;
  link: string;
  icon: (active: boolean) => React.ReactNode;
}

export default function SidebarGroupComponent() {
  const myGroupList: Group[] = [
    {
      group_id: "mygroup1",
      group_name: "Nhóm của tôi",
      group_avatar: "/assets/images/group_avatar.webp",
      created_at: "22 giờ trước",
    },
    {
      group_id: "mygroup2",
      group_name: "Nhóm của tôi 2",
      group_avatar: "/assets/images/group_avatar.webp",
      created_at: "22 giờ trước",
    },
  ];

  const groupList: Group[] = [
    {
      group_id: "group1",
      group_name: "Nhóm tôi tham gia",
      group_avatar: "/assets/images/group_avatar.webp",
      created_at: "22 giờ trước",
    },
    {
      group_id: "group2",
      group_name: "Nhóm tôi tham gia 2",
      group_avatar: "/assets/images/group_avatar.webp",
      created_at: "22 giờ trước",
    },
    {
      group_id: "group3",
      group_name: "Nhóm tôi tham gia 3",
      group_avatar: "/assets/images/group_avatar.webp",
      created_at: "22 giờ trước",
    },
    {
      group_id: "group4",
      group_name: "Nhóm tôi tham gia 4",
      group_avatar: "/assets/images/group_avatar.webp",
      created_at: "22 giờ trước",
    },
  ];
  const pathname = usePathname();

  const groupNavigation: GroupNavigation[] = [
    {
      name: "Bảng tin",
      link: "/group/feed",
      icon: (active) =>
        active ? (
          <PiCopySimpleFill size={24} />
        ) : (
          <PiCopySimpleLight size={24} />
        ),
    },
    {
      name: "Khám phá",
      link: "/group/explore",
      icon: (active) =>
        active ? <PiCompassFill size={24} /> : <PiCompassLight size={24} />,
    },
    {
      name: "Nhóm của tôi",
      link: "/group/my-groups",
      icon: (active) =>
        active ? <PiUsersFill size={24} /> : <PiUsersLight size={24} />,
    },
  ];

  if (!pathname.startsWith("/group")) return null;

  const isGroupActive =
    pathname.startsWith("/group/feed") ||
    pathname.startsWith("/group/explore") ||
    pathname.startsWith("/group/my-groups");

  return (
    <aside
      className={`hidden ${
        isGroupActive ? "md:block" : "hidden"
      } h-screen lg:w-80 w-26 p-4 z-10 shadow overflow-hidden transition-all duration-300`}
    >
      <div className="flex flex-col space-y-2">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              <PiArrowLeftLight size={22} />
            </Link>
            <h2 className="hidden lg:block font-bold text-xl">Nhóm</h2>
          </div>

          <button className="hidden lg:block p-2 rounded-full hover:bg-gray-200">
            <PiGearSixFill size={24} />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center justify-center gap-3 py-3.5 lg:px-4 bg-gray-200 rounded-full">
          <PiMagnifyingGlass size={24} />
          <span className="hidden lg:block whitespace-nowrap">
            Tìm kiếm nhóm
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col overflow-y-auto h-[calc(100vh-125px)] py-2">
          {/* Navigation */}
          <div className="flex flex-col py-4 space-y-1">
            {groupNavigation.map((item) => {
              const isActive = pathname.startsWith(item.link);

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer ${
                    isActive ? "bg-gray-200" : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.icon(isActive)}
                  <span className="hidden lg:block whitespace-nowrap">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Create Group */}
          <button className="flex items-center gap-4 px-4 py-3.5 rounded-lg bg-gray-200 hover:bg-gray-300 lg:justify-center">
            <PiPlusLight size={24} />
            <span className="hidden lg:block whitespace-nowrap">
              Tạo nhóm mới
            </span>
          </button>

          <hr className="my-4 text-gray-300" />

          {/* Managed Groups */}
          <MyGroupSection group={myGroupList} />

          <hr className="my-4 text-gray-300" />

          {/* Joined Groups */}
          <GroupSection group={groupList} />
        </div>
      </div>
    </aside>
  );
}
