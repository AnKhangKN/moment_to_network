'use client'

import Link from "next/link";

export default function SidebarComponent() {
    const sidebarItems = [
        { name: "Trang chủ", link: "/" },
        { name: "Tìm kiếm", link: "/search" },
        { name: "Nhóm", link: "/group" },
        { name: "Tạo bài", link: "/create-post" },
        { name: "Tin nhắn", link: "/messages" },
        { name: "Thông báo", link: "/notification" },
        { name: "Trang cá nhân", link: "/profile" },
    ];

    return (
        <div className="overflow-hidden h-screen md:block hidden">
            <div className="overflow-y-auto h-screen bg-gray-500 w-56 flex flex-col justify-between p-4">
                <div>logo</div>

                <div>
                    {sidebarItems.map((item, index) => (
                        <Link key={index} href={item.link} className="block py-2 px-4 rounded hover:bg-gray-300 mb-2">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div>xem thêm</div>
            </div>
        </div>
    );
}