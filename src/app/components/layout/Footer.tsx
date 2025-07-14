import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Send,
  Copy,
  Check,
  X,
  Linkedin,
  Phone,
  FileText
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const AwesomeContact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSending, setIsSending] = useState(false);

  // EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_aky6vwe';
  const EMAILJS_TEMPLATE_OWNER = 'template_j5p9rpf'; // Contact Us template (to you)
  const EMAILJS_TEMPLATE_USER = 'template_pxnoyms';   // Auto-Reply template (to sender)
  const EMAILJS_USER_ID = 'PLnsOuh3M-Hq4QRMJ';        // Public Key

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/rohitshinde3903",
      bgHover: "group-hover:bg-purple-500/10"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rohitshinde3903",
      bgHover: "group-hover:bg-blue-500/10"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Resume",
      href: "RohitShindeResume7499273903.pdf",
      bgHover: "group-hover:bg-cyan-500/10"
    }
  ];

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  }, []);

  const handleCopy = useCallback((text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    showToast('Copied to clipboard!');
    setTimeout(() => setCopied(null), 2000);
  }, [showToast]);


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSending(true);
  
  try {
    // Send contact info to yourself with correct template variables
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_OWNER,
      {
        from_name: formData.name,    // Matches {{from_name}} in template
        from_email: formData.email,  // Matches {{from_email}} in template
        from_phone: formData.phone || 'Not provided', // Matches {{from_phone}}
        message: formData.message    // Matches {{message}}
      },
      EMAILJS_USER_ID
    );
    
    // Send auto-reply to the sender
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_USER,
      {
        to_email: formData.email,
        name: formData.name,
        message: formData.message
      },
      EMAILJS_USER_ID
    );
    
    showToast('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    console.error('EmailJS error details:', error);
    
    // Enhanced error logging
    // if (error instanceof Error) {
    //   console.log('Error status:', error);
    //   console.log('Error text:', error);
    // }
    
    showToast('Failed to send message. Please try again.', 'error');
  } finally {
    setIsSending(false);
  }
};

  // Fixed TiltCard component that won't cause re-renders on input change
  const TiltCard = useCallback(({ children, className }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
      x.set(0);
      y.set(0);
    }, [x, y]);

    return (
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`transform-gpu ${className}`}
      >
        {children}
      </motion.div>
    );
  }, []);

  const Toast = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: toast.show ? 1 : 0, y: toast.show ? 0 : 50 }}
      className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 flex items-center space-x-2 border ${
        toast.type === 'success' 
          ? 'bg-gray-900 text-white border-green-500/30' 
          : 'bg-red-900/80 text-white border-red-500/30'
      }`}
    >
      {toast.type === 'success' ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <X className="w-5 h-5 text-red-500" />
      )}
      <span>{toast.message}</span>
    </motion.div>
  );

  // Handle form input changes
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

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
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all ${
                    isSending 
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
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
