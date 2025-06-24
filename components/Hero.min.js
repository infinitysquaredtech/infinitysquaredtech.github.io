function Hero() {
    try {
        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" className="min-h-screen bg-gray-50 flex items-center pt-20">
            <div className="container mx-auto px-2">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-black fade-in order-2 md:order-1">
                    <div className="flex items-center mb-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">
                        Infinity Squared
                        <span className="block text-xl md:text-3xl font-light mt-1">Technologies</span>
                        </h1>
                    </div>
                    </div>
                    <p className="text-lg md:text-xl mb-8 text-gray-700">
                    Pioneering the future with cutting-edge AR/VR development, 
                    comprehensive AI/ML solutions, and innovative web technologies.
                    </p>
                    <div className="flex flex-wrap gap-4">
                    <button 
                        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-black text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base"
                    >
                        Explore Services
                    </button>
                    <button 
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-black text-black px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-sm md:text-base"
                    >
                        Get Started
                    </button>
                    </div>
                </div>
                
                <div className="relative order-1 md:order-2">
                    <div className="floating-animation w-[400px] h-[400px] md:w-[650px] md:h-[600px] items-center justify-center mx-auto">
                    <ThreeModel />
                    </div>
                    <div className="absolute -bottom-6 -left-0 w-16 h-16 md:w-24 md:h-24 bg-gray-300 rounded-full opacity-30"></div>
                    <div className="absolute -top-6 -right-0 w-20 h-20 md:w-32 md:h-32 bg-gray-400 rounded-full opacity-30"></div>
                </div>
                </div>
            </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
