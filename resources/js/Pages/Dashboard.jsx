import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Pie } from "react-chartjs-2";

export default function Dashboard({ exams = [] }) {
    // Prepare data for the pie chart
    const pieData = {
        labels: exams.map((exam) => exam.title), // Titles of the exams
        datasets: [
            {
                label: "Exam Counts",
                data: exams.map((exam) => exam.participants || 0), // Example field for number of participants
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                ],
            },
        ],
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="flex flex-col h-full bg-gray-100 p-6">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Exams Generated</h1>

                {/* List of Exams */}
                <div className="bg-white shadow rounded-md p-4 mb-6">
                    {exams.length > 0 ? (
                        <ul className="space-y-2">
                            {exams.map((exam, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-50 p-3 rounded hover:bg-gray-100 transition"
                                >
                                    <span className="text-gray-700 font-medium">{exam.title}</span>
                                    <Link
                                        href={`/exams/${exam.id}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        View
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No exams generated yet.</p>
                    )}
                </div>

                {/* Pie Chart */}
                {exams.length > 0 && (
                    <div className="bg-white shadow rounded-md p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Exam Participation Overview
                        </h2>
                        <Pie data={pieData} />
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
