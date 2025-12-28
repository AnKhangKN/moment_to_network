"use client";

import { usePathname } from "next/navigation";

export default function ProfilePage() {
  const pathname = usePathname();

  return <div>Profile page {pathname} </div>;
}
