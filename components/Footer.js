function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-black text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <img 
                                    src="https://app.trickle.so/storage/public/images/usr_1124d167b8000001/b227a9b0-c764-4e91-b5bb-3652543e578c.png" 
                                    alt="Infinity Squared Technologies" 
                                    className="w-10 h-10"
                                />
                                <span className="text-xl font-bold">Infinity Squared Technologies</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Transforming the future with innovative AR/VR, AI/ML, and web development solutions.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">AR/VR Development</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">AI/ML Solutions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Infinity Squared Technologies. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
