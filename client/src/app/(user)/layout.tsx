"use client";

import BottomComponent from "@/components/ui/user/BottomComponent/BottomComponent";
// import FooterComponent from "@/components/ui/user/FooterComponent/FooterComponent";
import HeaderComponent from "@/components/ui/user/HeaderComponent/HeaderComponent";
import SidebarComponent from "@/components/ui/user/SidebarComponent/SidebarComponent";
import SidebarGroupComponent from "@/components/ui/user/SidebarGroupComponent/SidebarGroupComponent";
import SidebarGroupDetailComponent from "@/components/ui/user/SidebarGroupDetailComponent/SidebarGroupDetailComponent";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const groupLocation = pathname.startsWith("/group");

  return (
    <div className="flex bg-[#fafafa]">
      <SidebarComponent />

      <SidebarGroupComponent />

      <SidebarGroupDetailComponent />

      <div className="flex-1 h-screen overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="flex md:px-4">
            <div
              className={`${
                groupLocation ? "md:w-3/4" : "md:w-150"
              }  w-full mx-auto flex flex-col`}
            >
              <HeaderComponent />

              <section className="my-5">
                <div className="md:mx-4">{children}</div>
              </section>

              <BottomComponent />

              {/* <FooterComponent /> */}
            </div>

            <div
              className={`${
                pathname.startsWith("/group")
                  ? "hidden"
                  : "bg-gray-500 w-64 lg:block hidden"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
