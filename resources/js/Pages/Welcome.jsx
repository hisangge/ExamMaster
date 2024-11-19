import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            {/* Main Container */}
            <div className="bg-green-100 text-black min-h-screen flex flex-col">
                {/* Header */}
                <header className="w-full p-4 relative">
                    {/* Navigation Links in Upper-Right */}
                    <nav className="absolute top-4 right-4 flex space-x-4">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-4 py-2 font-medium text-black transition hover:text-gray-700 focus:outline-none"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-4 py-2 font-medium text-black transition hover:text-green-700 focus:outline-none"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-4 py-2 font-medium text-black transition hover:text-green-700 focus:outline-none"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <img
                            src="/Minsu.jpg"
                            alt="ExamMaster Logo"
                            className="w-40 h-40 mb-6 rounded-full mx-auto shadow-lg"
                        />
                        <h1 className="text-4xl font-bold text-green-700 mb-4">
                            Welcome to ExamMaster
                        </h1>
                        <p className="text-lg text-green-600 mb-6">
                            Your trusted solution for exam management and
                            preparation.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
