"use client";

import Image from "next/image";
import { PiUserFill } from "react-icons/pi";
import { Group } from "../group.type";
import Link from "next/link";

interface GroupProps {
  group: Group[];
}

export default function MyGroupSection({ group }: GroupProps) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 px-4 py-3.5 lg:px-0">
          <button className="lg:hidden">
            <PiUserFill size={22} />
          </button>
          <span className="hidden lg:block font-medium whitespace-nowrap">
            Nhóm bạn quản lý
          </span>
        </div>

        <button className="hidden lg:block text-sm text-indigo-500 hover:underline">
          Xem tất cả
        </button>
      </div>

      {group.map((groupItem) => (
        <Link
          href={`/group/${groupItem.group_id}`}
          key={groupItem.group_id}
          className="flex items-center gap-2 px-2 cursor-pointer"
        >
          <div className="border overflow-hidden h-10 w-10 rounded-lg">
            <Image
              src={groupItem.group_avatar}
              alt={groupItem.group_name}
              width={40}
              height={40}
              className="w-full h-full object-center"
            />
          </div>

          <div className="hidden lg:flex flex-col min-w-0">
            <span className="w-52 truncate">{groupItem.group_name}</span>
            <span className="text-gray-400 text-[12px]">
              Đã tạo: {groupItem.created_at}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
