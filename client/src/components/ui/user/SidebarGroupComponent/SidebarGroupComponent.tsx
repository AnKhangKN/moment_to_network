"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiArrowLeftLight,
  PiCompassLight,
  PiCopySimpleLight,
  PiGearSixFill,
} from "react-icons/pi";

export default function SidebarGroupComponent() {
  const pathname = usePathname();

  return (
    <aside
      className={`${
        pathname.startsWith("/group")
          ? "md:block h-screen transition-all duration-300 ease-in-out lg:w-80 w-22 hidden z-10 shadow p-4"
          : "hidden"
      }`}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
              href="/"
            >
              <PiArrowLeftLight size={22} />
            </Link>

            <h2 className="font-bold text-xl">Nhóm</h2>
          </div>

          <div className={`p-2 cursor-pointer hover:bg-gray-200 rounded-full`}>
            <PiGearSixFill size={24} />
          </div>
        </div>

        <div className="px-4 py-2.5 bg-gray-200 rounded-full">
          Tìm kiếm nhóm
        </div>

        <div className="flex flex-col">
          <div>
            <PiCopySimpleLight size={22} />
            <span> Bảng tin</span>
          </div>

          <div>
            <PiCompassLight size={22} />
            <span> Khám phá</span>
          </div>

          <div>Nhóm của tôi</div>
        </div>

        <button className="px-4 py-2.5 bg-gray-200 rounded-lg">
          Tạo nhóm mới
        </button>

        <hr />

        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <span>Nhóm bạn quản lý</span>
            <button className="hover:underline cursor-pointer text-indigo-500">
              Xem tất cả
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-400 rounded-lg"></div>

              <div className="flex flex-col">
                <span>Nhóm của tôi</span>
                <span className="text-gray-400 text-[12px]">
                  Đã tạo: 22 giờ trước
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-400 rounded-lg"></div>

              <div className="flex flex-col">
                <span>Nhóm của tôi</span>
                <span className="text-gray-400 text-[12px]">
                  Đã tạo: 22 giờ trước
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <span>Nhóm bạn tham gia</span>
            <button className="hover:underline cursor-pointer text-indigo-500">
              Xem tất cả
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-400 rounded-lg"></div>

              <div className="flex flex-col">
                <span>Nhóm của tôi</span>
                <span className="text-gray-400 text-[12px]">
                  Đã tạo: 22 giờ trước
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-400 rounded-lg"></div>

              <div className="flex flex-col">
                <span>Nhóm của tôi</span>
                <span className="text-gray-400 text-[12px]">
                  Đã tạo: 22 giờ trước
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
