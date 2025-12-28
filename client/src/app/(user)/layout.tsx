import BottomComponent from "@/components/ui/user/BottomComponent/BottomComponent";
import FooterComponent from "@/components/ui/user/FooterComponent/FooterComponent";
import HeaderComponent from "@/components/ui/user/HeaderComponent/HeaderComponent";
import SidebarComponent from "@/components/ui/user/SidebarComponent/SidebarComponent";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SidebarComponent />

      <div className="flex-1 h-screen overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="flex md:px-4">
            <div className="md:w-150 w-full mx-auto flex flex-col">
              <HeaderComponent />

              <section className="my-5">
                <div className="md:mx-4">{children}</div>
              </section>

              <BottomComponent />

              <FooterComponent />
            </div>

            <div className="bg-gray-500 w-64 lg:block hidden">Right panel</div>
          </div>
        </div>
      </div>
    </div>
  );
}
