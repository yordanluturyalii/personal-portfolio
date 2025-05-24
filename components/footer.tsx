import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">Yordan Aserama Luturyali</h3>
						<p className="text-gray-400 mb-4">
							Software Engineer passionate about building scalable web
							applications and exploring new technologies.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://github.com/yordanluturyalii"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com/in/yordan-aserama-luturyali"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:yrdn.luturyali@gmail.com"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="#about"
									className="text-gray-400 hover:text-white transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#experience"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Experience
								</Link>
							</li>
							<li>
								<Link
									href="#skills"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Skills
								</Link>
							</li>
							<li>
								<Link
									href="/articles"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Articles
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Contact Info</h4>
						<div className="space-y-2 text-gray-400">
							<div className="flex items-center">
								<Mail className="w-4 h-4 mr-2" />
								yrdn.luturyali@gmail.com
							</div>
							<div className="flex items-center">
								<Phone className="w-4 h-4 mr-2" />
								+62 819 4458 2397
							</div>
							<div>Semarang, Jawa Tengah</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2024 Yordan Aserama Luturyali. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
