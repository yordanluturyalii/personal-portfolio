"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
			<div className="text-center">
				<div className="mb-8">
					<h1 className="text-9xl font-bold text-gray-300">404</h1>
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Page Not Found
					</h2>
					<p className="text-gray-600 mb-8 max-w-md mx-auto">
						Sorry, the page you are looking for doesn't exist or has been moved.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
					>
						<Home className="w-4 h-4 mr-2" />
						Go Home
					</Link>
					<button
						onClick={() => window.history.back()}
						className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
}
