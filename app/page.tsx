"use client";

import {
	Award,
	Calendar,
	ChevronDown,
	Clock,
	Code,
	Download,
	ExternalLink,
	Github,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Send,
	Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
	const [text, setText] = useState("");
	const fullText = "Software Engineer";

	useEffect(() => {
		let index = 0;
		const timer = setInterval(() => {
			setText(fullText.slice(0, index));
			index++;
			if (index > fullText.length) {
				clearInterval(timer);
			}
		}, 100);

		return () => clearInterval(timer);
	}, []);

	const stats = [
		{ icon: Code, label: "Years Experience", value: "2+" },
		{ icon: Award, label: "Awards Won", value: "2" },
		{ icon: Users, label: "Projects Completed", value: "10+" },
		{ icon: Clock, label: "Hours Coding", value: "1000+" },
	];

	const experiences = [
		{
			title: "Software Engineer Intern",
			company: "Crackin Code Studio",
			period: "October 2024 - January 2025",
			location: "Onsite",
			description:
				"Built key features in Kira Untung smart assistant app and CAT Exam App, contributed to ERP System development.",
			achievements: [
				"Developed chatbot feature integrated with OpenAI API and ingredient database",
				"Built visual ingredient and recipe detection system using image input",
				"Implemented Koran-style test module and MMPI personality test",
				"Created master data CRUD and transactional logging modules",
			],
			technologies: [
				"Laravel",
				"jQuery",
				"AJAX",
				"Alpine.js",
				"Blade",
				"Filament",
				"Livewire",
			],
		},
		{
			title: "Software Engineer Intern",
			company: "PT Koding Kreasi Indonesia",
			period: "Juli - September 2024",
			location: "Hybrid",
			description:
				"Developed RESTful APIs and mobile attendance app, created fully functional LMS using Next.js.",
			achievements: [
				"Built RESTful APIs for employee attendance management using Laravel",
				"Created mobile attendance app using FlutterFlow with API integration",
				"Developed LMS with Xendit payment gateway and MUX video streaming",
				"Implemented responsive UI with Shadcn and Magic UI components",
			],
			technologies: [
				"Laravel",
				"Next.js",
				"FlutterFlow",
				"Xendit",
				"MUX",
				"Prisma",
				"PostgreSQL",
				"Shadcn",
			],
		},
		{
			title: "Backend Developer Intern",
			company: "Vrasmedia IT Solution",
			period: "October - November 2023",
			location: "Remote",
			description:
				"Developed responsive admin dashboard for AC service bookings and maintained RESTful APIs.",
			achievements: [
				"Built responsive admin dashboard using Laravel and AdminLTE",
				"Developed RESTful APIs for booking submissions and service scheduling",
				"Collaborated remotely using GitLab for version control",
				"Practiced Agile methodology with daily stand-up meetings",
			],
			technologies: ["Laravel", "AdminLTE", "Bootstrap", "GitLab"],
		},
	];

	const skillCategories = [
		{
			title: "Programming Languages",
			skills: [
				{ name: "PHP", level: 90 },
				{ name: "JavaScript", level: 85 },
				{ name: "TypeScript", level: 80 },
			],
		},
		{
			title: "Frameworks & Libraries",
			skills: [
				{ name: "Laravel", level: 90 },
				{ name: "React", level: 85 },
				{ name: "Next.js", level: 80 },
			],
		},
		{
			title: "Soft Skills",
			skills: [
				{ name: "Communication", level: 85 },
				{ name: "Time Management", level: 90 },
				{ name: "Problem Solving", level: 85 },
			],
		},
	];

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
					<div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
								Hi, I'm{" "}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									Yordan
								</span>
							</h1>
							<div className="text-2xl md:text-3xl text-gray-600 h-12">
								<span className="border-r-2 border-blue-600 pr-1">{text}</span>
							</div>
						</div>

						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							A passionate fresh graduate with 2+ years of hands-on experience
							in developing and maintaining web applications using Laravel,
							React, and Next.js.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a
								href="#contact"
								className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
							>
								Get In Touch
							</a>
							<a
								href="/cv-yordan.pdf"
								download
								className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center"
							>
								<Download className="w-4 h-4 mr-2" />
								Download CV
							</a>
						</div>

						<div className="flex justify-center space-x-6">
							<a
								href="https://github.com/yordanluturyalii"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
							>
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://linkedin.com/in/yordan-aserama-luturyali"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
							>
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="mailto:yrdn.luturyali@gmail.com"
								className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
							>
								<Mail className="w-6 h-6" />
							</a>
						</div>
					</div>

					<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
						<ChevronDown className="w-6 h-6 text-gray-400" />
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							About Me
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Passionate about creating innovative solutions and continuously
							learning new technologies
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<p className="text-lg text-gray-700 leading-relaxed">
								I'm a fresh graduate with over 2 years of hands-on experience in
								developing and maintaining web applications using Laravel,
								React, and Next.js. I've built and contributed to real-world
								projects such as the BeetleHR Lite API, AC service booking
								dashboard, Eduleap LMS, and a badminton court reservation app.
							</p>

							<p className="text-lg text-gray-700 leading-relaxed">
								I'm recognized for achievements in software development,
								including 1st Place in the 2024 Semarang City Web Technologies
								Competition (LKS) and 1st Place in the 2023 Techcompfest
								National Web Design Competition.
							</p>

							<p className="text-lg text-gray-700 leading-relaxed">
								I'm passionate about exploring new technologies and eager to
								contribute in dynamic and collaborative startup or software
								house environments.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<div
									key={index}
									className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
								>
									<stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
									<div className="text-3xl font-bold text-gray-900 mb-1">
										{stat.value}
									</div>
									<div className="text-sm text-gray-600">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Experience
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							My journey through various internships and projects that shaped my
							skills
						</p>
					</div>

					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
							>
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-gray-900 mb-2">
											{exp.title}
										</h3>
										<div className="flex items-center text-blue-600 font-semibold mb-2">
											<ExternalLink className="w-4 h-4 mr-2" />
											{exp.company}
										</div>
										<div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
											<div className="flex items-center">
												<Calendar className="w-4 h-4 mr-1" />
												{exp.period}
											</div>
											<div className="flex items-center">
												<MapPin className="w-4 h-4 mr-1" />
												{exp.location}
											</div>
										</div>
									</div>
								</div>

								<p className="text-gray-700 mb-6 leading-relaxed">
									{exp.description}
								</p>

								<div className="mb-6">
									<h4 className="font-semibold text-gray-900 mb-3">
										Key Achievements:
									</h4>
									<ul className="space-y-2">
										{exp.achievements.map((achievement, idx) => (
											<li key={idx} className="flex items-start">
												<div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
												<span className="text-gray-700">{achievement}</span>
											</li>
										))}
									</ul>
								</div>

								<div>
									<h4 className="font-semibold text-gray-900 mb-3">
										Technologies Used:
									</h4>
									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Skill Section */}
			<section id="skills" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Skills
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Technologies and skills I've mastered throughout my journey
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{skillCategories.map((category, index) => (
							<div
								key={index}
								className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100"
							>
								<h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
									{category.title}
								</h3>
								<div className="space-y-4">
									{category.skills.map((skill, idx) => (
										<div key={idx}>
											<div className="flex justify-between items-center mb-2">
												<span className="font-medium text-gray-700">
													{skill.name}
												</span>
												<span className="text-sm text-gray-600">
													{skill.level}%
												</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2">
												<div
													className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
													style={{ width: `${skill.level}%` }}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Get In Touch
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Let's discuss opportunities and collaborate on exciting projects
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Contact Information
								</h3>
								<div className="space-y-4">
									<div className="flex items-center space-x-4">
										<div className="bg-blue-100 p-3 rounded-full">
											<Mail className="w-5 h-5 text-blue-600" />
										</div>
										<div>
											<p className="font-medium text-gray-900">Email</p>
											<a
												href="mailto:yrdn.luturyali@gmail.com"
												className="text-gray-600 hover:text-blue-600 transition-colors"
											>
												yrdn.luturyali@gmail.com
											</a>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-blue-100 p-3 rounded-full">
											<Phone className="w-5 h-5 text-blue-600" />
										</div>
										<div>
											<p className="font-medium text-gray-900">Phone</p>
											<a
												href="tel:+6281944582397"
												className="text-gray-600 hover:text-blue-600 transition-colors"
											>
												+62 819 4458 2397
											</a>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-blue-100 p-3 rounded-full">
											<MapPin className="w-5 h-5 text-blue-600" />
										</div>
										<div>
											<p className="font-medium text-gray-900">Location</p>
											<p className="text-gray-600">Semarang, Jawa Tengah</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-gray-900 mb-4">
									Follow Me
								</h4>
								<div className="flex space-x-4">
									<a
										href="https://github.com/yordanluturyalii"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
									>
										<Github className="w-5 h-5" />
									</a>
									<a
										href="https://linkedin.com/in/yordan-aserama-luturyali"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
									>
										<Linkedin className="w-5 h-5" />
									</a>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Send Message
							</h3>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
										placeholder="Your name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
										placeholder="your.email@example.com"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
										placeholder="Your message..."
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
								>
									<Send className="w-4 h-4" />
									<span>Send Message</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
