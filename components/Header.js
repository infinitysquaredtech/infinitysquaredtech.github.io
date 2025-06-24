function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center logo-container">
                            <img 
                                src="asset/logos/infinity_logo.webp" 
                                alt="Infinity Squared Technologies Logo" 
                                className="w-20"
                            />
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black transition-colors font-medium">Home</button>
                            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-black transition-colors font-medium">Services</button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black transition-colors font-medium">About</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black transition-colors font-medium">Contact</button>
                        </div>

                        <button 
                            className="md:hidden text-black"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                            <div className="flex flex-col space-y-3">
                                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black py-2 text-left">Home</button>
                                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-black py-2 text-left">Services</button>
                                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black py-2 text-left">About</button>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black py-2 text-left">Contact</button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
