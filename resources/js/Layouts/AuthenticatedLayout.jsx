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
                <div className="max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo and Panel Title */}
                    <Link href="/" className="flex items-center">
                        <ApplicationLogo className="h-10 w-auto fill-current text-white mr-3" />
                        <h1 className="text-lg font-semibold">
                            ExamMaster Admin Panel
                        </h1>
                    </Link>

                    {/* Profile and Log Out on the Right (Dropdown) */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center text-white hover:bg-green-500 hover:text-green-400 focus:outline-none"
                        >
                            <span className="mr-2">Profile</span>
                            <svg
                                className="w-5 h-5 text-white"
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

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-green-800 rounded-md shadow-lg">
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
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar Navigation */}
                <nav className="w-40 bg-green-800 text-white flex-shrink-0">
                    <div className="p-4 space-y-4">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            className="block px-4 py-2 rounded text-white hover:bg-white hover:text-green-800"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            href={route("usermanagements.index")}
                            active={route().current("usermanagements.index")}
                            className="block px-4 py-2 rounded text-white hover:bg-white hover:text-green-800"
                        >
                            Modules
                        </NavLink>
                        <NavLink
                            href={route("modmanagements.index")}
                            active={route().current("modmanagements.index")}
                            className="block px-4 py-2 rounded text-white hover:bg-white hover:text-green-800"
                        >
                            TOS
                        </NavLink>
                        <NavLink
                            href={route("tosgenerates.index")}
                            active={route().current("tosgenerates.index")}
                            className="block px-4 py-2 rounded text-white hover:bg-white hover:text-green-800"
                        >
                            Exam
                        </NavLink>

                        <NavLink
                            href={route("settingss.index")}
                            active={route().current("settingss.index")}
                            className="block px-4 py-2 rounded text-white hover:bg-white hover:text-green-800"
                        >
                            Settings
                        </NavLink>
                    </div>
                </nav>

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
