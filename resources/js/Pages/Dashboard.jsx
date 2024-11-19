import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="flex flex-col h-full bg-gray-100"></div>
        </AuthenticatedLayout>
    );
}
