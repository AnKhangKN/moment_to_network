"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

export default function HeaderComponent() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const headerItems = [
    { name: "Bảng tin", link: "/" },
    { name: "Theo dõi", link: "/following" },
    { name: "Bạn bè", link: "/friends" },
  ];

  // derive state
  const activeIndex = headerItems.findIndex((item) =>
    item.link === "/" ? pathname === "/" : pathname.startsWith(item.link)
  );

  const [tabWidth, setTabWidth] = useState(0);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    const updateWidth = () => {
      setTabWidth(navRef.current!.offsetWidth / headerItems.length);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(navRef.current);

    return () => observer.disconnect();
  }, [headerItems.length]);

  const showHeaderTabsHome =
    pathname === "/" ||
    pathname.startsWith("/following") ||
    pathname.startsWith("/friends");

  const showHeaderSearch = pathname.startsWith("/search");

  const showHeaderGroup = pathname.startsWith("/group");

  const showHeaderMessages = pathname.startsWith("/messages");

  const showHeaderNotification = pathname.startsWith("/notification");

  const SYSTEM_ROUTES = [
    "/",
    "/following",
    "/friends",
    "/search",
    "/group",
    "/messages",
    "/notification",
  ];

  const showHeaderProfile =
    pathname.split("/").length === 2 && !SYSTEM_ROUTES.includes(pathname);

  return (
    <header className="sticky top-0 z-20 bg-white/50 backdrop-blur-md">
      {showHeaderTabsHome && (
        <>
          <div className="flex flex-col md:hidden border-b">
            <div className=" flex justify-between items-center p-4">
              <div></div>
              <div>Logo</div>
              <div>more</div>
            </div>

            <nav className="flex border-b justify-center p-4">
              {headerItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="px-8 py-3 text-center text-md font-medium z-10
                         text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <nav className="relative md:flex hidden justify-center p-4">
            <div ref={navRef} className="relative flex">
              {/* Indicator */}
              <div
                className="absolute inset-y-0 rounded-full bg-black/10
                       transition-transform duration-300 ease-out"
                style={{
                  width: tabWidth,
                  transform: `translateX(${activeIndex * tabWidth}px)`,
                }}
              />

              {/* Tabs */}
              {headerItems.map((item) => {
                const hasWidth = tabWidth > 0;

                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    scroll={false}
                    className={`py-3 text-center text-md font-medium z-10
                                    text-gray-600 hover:text-gray-900
                                    ${hasWidth ? "" : "px-8"}`}
                    style={hasWidth ? { width: tabWidth } : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </>
      )}

      {showHeaderSearch && (
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-medium">Tìm kiếm</span>
          <input
            placeholder="Tìm kiếm..."
            className="border rounded-full px-4 py-1 text-sm outline-none"
          />
        </div>
      )}

      {/* ================= GROUP ================= */}
      {showHeaderGroup && <div className="px-4 py-3 font-medium">Nhóm</div>}

      {/* ================= MESSAGES ================= */}
      {showHeaderMessages && (
        <div className="px-4 py-3 font-medium">Tin nhắn</div>
      )}

      {/* ================= NOTIFICATION ================= */}
      {showHeaderNotification && (
        <div className="px-4 py-3 font-medium">Thông báo</div>
      )}

      {/* ================= PROFILE ================= */}
      {showHeaderProfile && (
        <div className="px-4 py-3 font-medium">Trang cá nhân</div>
      )}
    </header>
  );
}
