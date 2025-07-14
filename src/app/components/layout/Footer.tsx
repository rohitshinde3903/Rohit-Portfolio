import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Send,
  Copy,
  Check,
  ExternalLink,
  X,
  Linkedin,
  Phone,
  FileText
} from 'lucide-react';

const AwesomeContact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [toast, setToast] = useState({ show: false, message: '' });

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/rohitshinde3903",
      color: "hover:text-purple-500",
      handle: "@rohitshinde3903",
      bgHover: "group-hover:bg-purple-500/10"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rohitshinde3903",
      color: "hover:text-blue-500",
      handle: "Rohit Shinde",
      bgHover: "group-hover:bg-blue-500/10"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Resume",
      href: "RohitShindeResume7499273903.pdf",
      color: "hover:text-cyan-500",
      handle: "Download PDF",
      bgHover: "group-hover:bg-cyan-500/10"
    }
  ];

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    showToast('Copied to clipboard!');
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    return (
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={`transform-gpu ${className}`}
      >
        {children}
      </motion.div>
    );
  };

  const Toast = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: toast.show ? 1 : 0, y: toast.show ? 0 : 50 }}
      className="fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 flex items-center space-x-2 border border-gray-700"
    >
      <Check className="w-5 h-5 text-green-500" />
      <span>{toast.message}</span>
    </motion.div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 mb-4">
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-400">Get In Touch</span>
          </div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's <span className="text-purple-500">Collaborate</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <TiltCard>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Send className="text-purple-500" size={20} />
                <span>Send Me a Message</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </TiltCard>

          {/* Contact Info */}
          <TiltCard>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Phone className="text-blue-500" size={20} />
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ x: 5 }}
                  onClick={() => handleCopy('rohitshinde3903@gmail.com', 'email')}
                  className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-between cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">rohitshinde3903@gmail.com</p>
                    </div>
                  </div>
                  {copied === 'email' ? (
                    <Check className="text-green-500 w-5 h-5" />
                  ) : (
                    <Copy className="text-gray-500 group-hover:text-purple-500 w-5 h-5 transition-colors" />
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  onClick={() => handleCopy('+91 74992 73903', 'phone')}
                  className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-between cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">+91 74992 73903</p>
                    </div>
                  </div>
                  {copied === 'phone' ? (
                    <Check className="text-green-500 w-5 h-5" />
                  ) : (
                    <Copy className="text-gray-500 group-hover:text-blue-500 w-5 h-5 transition-colors" />
                  )}
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border ${link.bgHover} border-gray-700 transition-all`}
                    >
                      {link.icon}
                      <span className="text-sm text-white">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && <Toast />}
      </AnimatePresence>
    </section>
  );
};

export default AwesomeContact;
