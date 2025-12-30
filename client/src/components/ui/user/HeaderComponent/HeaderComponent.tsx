"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function HeaderComponent() {
  const pathname = usePathname();

  /**
   * Ref trỏ tới container tabs (desktop)
   * Dùng để đo offsetWidth
   */
  const navRef = useRef<HTMLDivElement>(null);

  /**
   * Danh sách tab trên header home
   * Dùng chung cho mobile + desktop + indicator
   */
  const headerItems = [
    { name: "Bảng tin", link: "/" },
    { name: "Theo dõi", link: "/following" },
    { name: "Bạn bè", link: "/friends" },
  ];

  /**
   * Xác định tab đang active
   * - "/" so sánh tuyệt đối
   * - các tab khác dùng startsWith
   * Trả về index của tab
   */
  const activeIndex = headerItems.findIndex((item) =>
    item.link === "/" ? pathname === "/" : pathname.startsWith(item.link)
  );

  /**
   * Lưu chiều rộng mỗi tab (desktop)
   * Ban đầu = 0 vì DOM chưa mount
   */
  const [tabWidth, setTabWidth] = useState(0);

  /**
   * ================== HEADER CONDITIONS ==================
   */

  // Header có tabs (home)
  const showHeaderTabsHome =
    pathname === "/" ||
    pathname.startsWith("/following") ||
    pathname.startsWith("/friends");

  // Header tìm kiếm
  const showHeaderSearch = pathname.startsWith("/search");

  // Header nhóm
  const showHeaderGroup = pathname.startsWith("/group");

  // Header tin nhắn
  const showHeaderMessages = pathname.startsWith("/messages");

  // Header thông báo
  const showHeaderNotification = pathname.startsWith("/notification");

  /**
   * Danh sách route hệ thống
   * Dùng để loại trừ khi detect trang profile
   */
  const SYSTEM_ROUTES = [
    "/",
    "/following",
    "/friends",
    "/search",
    "/group",
    "/messages",
    "/notification",
  ];

  /**
   * Trang profile:
   * - URL dạng /username
   * - Không thuộc system routes
   */
  const showHeaderProfile =
    pathname.split("/").length === 2 && !SYSTEM_ROUTES.includes(pathname);

  /**
   * ================== MEASURE TAB WIDTH ==================
   * Dùng ResizeObserver để đo và cập nhật tabWidth
   * Fix lỗi offsetWidth null khi component unmount
   */
  useEffect(() => {
    // Không chạy nếu header tabs không hiển thị
    if (!showHeaderTabsHome) return;

    // DOM chưa mount
    if (!navRef.current) return;

    /**
     * Hàm đo width container và chia đều cho số tab
     */
    const updateWidth = () => {
      if (!navRef.current) return;
      setTabWidth(navRef.current.offsetWidth / headerItems.length);
    };

    // Đo lần đầu
    updateWidth();

    // Theo dõi resize
    const observer = new ResizeObserver(updateWidth);
    observer.observe(navRef.current);

    // Cleanup khi unmount / đổi route
    return () => observer.disconnect();
  }, [headerItems.length, showHeaderTabsHome]);

  return (
    <header className="sticky top-0 z-20 md:pb-4 bg-white/50 backdrop-blur-md">
      {/* ================= HOME HEADER ================= */}
      {showHeaderTabsHome && (
        <div className="px-4 font-medium w-full text-center md:rounded-b-full md:shadow-md">
          {/* ===== MOBILE HEADER ===== */}
          <div className="flex flex-col md:hidden">
            <div className="flex justify-between items-center p-4">
              <div />
              <div>Logo</div>
              <div>more</div>
            </div>

            <nav className="flex justify-center">
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

          {/* ===== DESKTOP HEADER ===== */}
          <nav className="relative md:flex hidden justify-center md:px-4 md:py-2">
            <div ref={navRef} className="relative flex">
              {/* Indicator trượt theo tab active */}
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
        </div>
      )}

      {/* ================= SEARCH HEADER ================= */}
      {showHeaderSearch && (
        <div className="px-4 py-3 font-medium w-full text-center shadow rounded-b-full">
          Tìm kiếm
        </div>
      )}

      {/* ================= GROUP HEADER ================= */}
      {showHeaderGroup && (
        <div className="px-4 py-3 font-medium w-full text-center shadow rounded-b-full">
          Nhóm
        </div>
      )}

      {/* ================= MESSAGES HEADER ================= */}
      {showHeaderMessages && (
        <div className="px-4 py-3 font-medium w-full text-center shadow rounded-b-full">
          Tin nhắn
        </div>
      )}

      {/* ================= NOTIFICATION HEADER ================= */}
      {showHeaderNotification && (
        <div className="px-4 py-3 font-medium w-full text-center shadow rounded-b-full">
          Thông báo
        </div>
      )}

      {/* ================= PROFILE HEADER ================= */}
      {showHeaderProfile && (
        <div className="px-4 py-3 font-medium w-full text-center shadow rounded-b-full">
          Trang cá nhân
        </div>
      )}
    </header>
  );
}
