"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiArrowLeftLight, PiGearSixFill } from "react-icons/pi";

export default function SidebarGroupDetailComponent() {
  const pathname = usePathname();

  if (!pathname.startsWith("/group")) return null;

  const isGroupActive =
    pathname.startsWith("/group/feed") ||
    pathname.startsWith("/group/explore") ||
    pathname.startsWith("/group/my-groups");

  return (
    <aside
      className={`hidden ${
        isGroupActive ? "hidden" : "md:block"
      } h-screen lg:w-80 w-26 p-4 z-10 shadow overflow-hidden transition-all duration-300`}
    >
      <div className="flex flex-col space-y-2">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/group/feed"
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

        {/* Content */}
        <div className="flex flex-col overflow-y-auto h-[calc(100vh-80px)] py-2 border">
          <div>
            <div className="h-screen">test</div>
            <div className="h-screen"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
