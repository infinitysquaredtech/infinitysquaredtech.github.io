function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            service: '',
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert('Thank you for your message! We\'ll get back to you soon.');
                setFormData({ name: '', email: '', service: '', message: '' });
            } catch (error) {
                alert('Sorry, there was an error sending your message. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        };

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-xl text-gray-300">Ready to transform your ideas into reality?</p>
                    </div>

                    {/* Contact form full width */}
                    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-gray-800 text-white placeholder-gray-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-gray-800 text-white placeholder-gray-400"
                            />
                        </div>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-gray-800 text-white mb-4"
                        >
                            <option value="">Select a Service</option>
                            <option value="ar-vr">AR/VR Development</option>
                            <option value="ai-ml">AI/ML Solutions</option>
                            <option value="web-dev">Web Development</option>
                        </select>
                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-gray-800 text-white placeholder-gray-400 mb-6"
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
