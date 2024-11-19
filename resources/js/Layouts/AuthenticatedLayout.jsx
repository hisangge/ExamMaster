import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex flex-col min-h-screen bg-green-100">
            {/* Top Header */}
            <header className="w-full bg-green-800 text-white shadow">
                <div className="max-w-10xl h-20 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo and Panel Title */}
                    <Link href="/" className="flex items-center">
                        <ApplicationLogo className="h-10 w-auto fill-current text-white mr-3" />
                        <h1 className="text-lg font-semibold">ExamMaster</h1>
                    </Link>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center text-green hover:text-white focus:outline-none"
                        >
                            <span className="mr-2">{user.name || "Profile"}</span>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-green-800 rounded-md shadow-lg">
                                <div className="flex flex-col p-2">
                                    <NavLink
                                        href={route("profile.edit")}
                                        active={route().current("profile.edit")}
                                        className="block px-4 py-2 text-sm rounded hover:bg-green-800 hover:text-white"
                                    >
                                        Edit Profile
                                    </NavLink>
                                    <NavLink
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="block px-4 py-2 text-sm rounded hover:bg-green-800 hover:text-white"
                                    >
                                        Log Out
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar Navigation */}
                <aside className="w-64 bg-green-800 text-white flex-shrink-0 p-10">
                <nav className="space-y-4">
    <NavLink
        href={route("dashboard")}
        active={route().current("dashboard")}
        className={`block px-11 py-3 rounded-md text-white hover:bg-green-600 hover:text-white ${
            route().current("dashboard") ? "bg-green-500" : ""
        }`}
    >
        Dashboard
    </NavLink>

                        <NavLink
                            href={route("usermanagements.index")}
                            active={route().current("usermanagements.index")}
                            className="block px-11 py-3 rounded-md text-white hover:bg-green-600 hover:text-white"
                        >
                        Modules
                        </NavLink>
                        <NavLink
                            href={route("modmanagements.index")}
                            active={route().current("modmanagements.index")}
                            className="block px-10 py-3 rounded-md text-white hover:bg-green-600 hover:text-white"
                        >
                        Table of Specifications
                        </NavLink>
                        <NavLink
                            href={route("tosgenerates.index")}
                            active={route().current("tosgenerates.index")}
                            className="block px-11 py-3 rounded-md text-white hover:bg-green-600 hover:text-white"
                        >
                        Exams
                        </NavLink>
                        <NavLink
                            href={route("settingss.index")}
                            active={route().current("settingss.index")}
                            className="block px-11 py-3 rounded-md text-white hover:bg-green-600 hover:text-white"
                        >
                        Settings
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                    {header && (
                        <header className="bg-white shadow">
                            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}
                    <main className="flex-1 p-6">{children}</main>
                </div>
            </div>
        </div>
    );
}
