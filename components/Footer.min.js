function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-black text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Infinity Squared Technologies. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
