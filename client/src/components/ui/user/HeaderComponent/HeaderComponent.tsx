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

    return (
        <header className="sticky top-0 z-20 bg-white/50 backdrop-blur-md">
            <div className="flex flex-col md:hidden border-b">
                <div className=" flex justify-between items-center p-4">
                    <div></div>
                    <div>Logo</div>
                    <div>more</div>
                </div>

                <div className="flex border-b justify-center p-4">
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
                </div>
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

                                style={hasWidth ? { width: tabWidth } : undefined}>
                                {item.name}
                            </Link>
                        );
                    })}

                </div>
            </nav>
        </header>
    );
}
