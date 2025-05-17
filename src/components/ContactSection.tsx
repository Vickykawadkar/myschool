'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-96 h-96 rounded-full blur-3xl bg-[#3B82F6]/20"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] mb-4">
            GET IN TOUCH
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">Let's Work Together</h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="p-3 bg-[#1E293B] rounded-lg mr-4">
                  <Mail size={20} className="text-[#3B82F6]" />
                </div>
                <div>
                  <h5 className="font-semibold">Email</h5>
                  <a
                    href="mailto:vickykawadkar779@gmail.com"
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                  >
                    vickykawadkar779@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="p-3 bg-[#1E293B] rounded-lg mr-4">
                  <Linkedin size={20} className="text-[#3B82F6]" />
                </div>
                <div>
                  <h5 className="font-semibold">LinkedIn</h5>
                  <a
                    href="https://www.linkedin.com/in/vicky-kawadkar-376459366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                  >
                    linkdin.com/in/vicky-kawadkar-376459366
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start">
                <div className="p-3 bg-[#1E293B] rounded-lg mr-4">
                  <Github size={20} className="text-[#3B82F6]" />
                </div>
                <div>
                  <h5 className="font-semibold">GitHub</h5>
                  <a
                    href="https://github.com/Vickykawadkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                  >
                    github.com/Vickykawadkar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <form className="bg-[#1E293B] p-8 rounded-xl border border-[#334155]">
              <h4 className="text-2xl font-bold mb-6">Send Me a Message</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563EB] transition-all flex items-center justify-center"
              >
                Send Message
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
