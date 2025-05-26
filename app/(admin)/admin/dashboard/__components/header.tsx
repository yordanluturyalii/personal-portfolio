import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

interface DashboardHeaderProps {
    title: string
    url?: String
    isCreate: boolean
}

const DashboardHeader = ({ title, url, isCreate }: DashboardHeaderProps) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/admin/dashboard" className="mr-4">
                            <ArrowLeft className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                        </Link>
                        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                    </div>
                    {
                        isCreate && (
                            <Link
                                href={`/admin/dashboard/${url}/new`}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                New {url}
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader