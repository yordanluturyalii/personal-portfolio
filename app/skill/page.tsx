import { Sidebar } from "../_components/sidebar"

function SkillPage() {

    const skills = {
        Languages: ['HTML/CSS', 'Javascript', 'PHP'],
        'Web Framework': ['React.js', 'Next.js', 'Laravel', 'TailwindCSS', 'Bootstrap'],
        'Database Service': ['MySQL', 'PostgreSQL'],
        DevOps: ['Docker', 'Linux', 'Git', 'Github', 'Gitlab'],
        Tools: ['Visual Studio Code', 'Postman']
    }

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden">
            <Sidebar />
            <main className="flex-1 p-4 relative overflow-hidden">
                <h1 className="text-4xl lg:text-6xl font-bold mb-8">Skills</h1>
                <div className="border-t border-gray-800 w-full mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold mb-4">{category}</h2>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item} className="text-gray-400">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Green glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>
            </main>
        </div>
    )
}

export default SkillPage