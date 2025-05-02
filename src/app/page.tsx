import { HeroSection } from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="bg-black text-white pt-20">
            <HeroSection />
            {/* How It Works Section */}
            <section className="py-16" id="how-it-works">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-6">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="text-6xl text-indigo-600">🎙️</div>
                            <h3 className="text-2xl font-semibold">Speak</h3>
                            <p>Record or upload a voice clip.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl text-indigo-600">🧠</div>
                            <h3 className="text-2xl font-semibold">Analyze</h3>
                            <p>Our AI identifies the language instantly.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-6xl text-indigo-600">🗺️</div>
                            <h3 className="text-2xl font-semibold">
                                Visualize
                            </h3>
                            <p>See your result highlighted on the map.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-300 py-6">
                <div className="container mx-auto text-center">
                    <p>© 2025 VaaniAI. Built with ❤️ in India.</p>
                    <div className="space-x-4 mt-4">
                        <a href="#privacy" className="hover:text-amber-500">
                            Privacy
                        </a>
                        <a href="#github" className="hover:text-amber-500">
                            GitHub
                        </a>
                        <a href="#contact" className="hover:text-amber-500">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
