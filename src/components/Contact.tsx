import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState, memo } from 'react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'team@whatwewant.com',
    href: 'mailto:team@whatwewant.com',
    color: 'from-[#88c8c3] to-[#a8b5ff]',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@whatwewant',
    href: 'https://github.com',
    color: 'from-[#a8b5ff] to-[#d4a5f5]',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'WWW Team',
    href: 'https://linkedin.com',
    color: 'from-[#d4a5f5] to-[#88c8c3]',
  },
];

export const Contact = memo(function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 snap-start snap-always overflow-y-auto relative"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c8c3]/5 via-white to-[#d4a5f5]/5" />
      
      <motion.div
        className="absolute top-20 right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#88c8c3]/15 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#a8b5ff]/15 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#d4a5f5]/12 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="px-5 py-2.5 bg-gradient-to-r from-[#88c8c3]/10 to-[#a8b5ff]/10 rounded-full text-sm text-gray-600 font-semibold border border-[#88c8c3]/20">
              Get in Touch
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold px-4">Contact</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            우리와 함께 만들고 싶다면, 편하게 연락 주세요
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 sm:p-8 md:p-12 border border-gray-200 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12">
            {/* Left: Contact Info */}
            <div>
              <h3 className="text-xl sm:text-2xl mb-5 sm:mb-6 font-bold">
                Let's Connect
              </h3>
              <p className="text-base sm:text-base text-gray-600 mb-7 sm:mb-8 leading-relaxed">
                프로젝트 협업, 공모전 참여, 혹은 그냥 이야기를 나누고 싶으시다면 언제든 연락주세요!
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.label !== 'Email' ? '_blank' : undefined}
                      rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 bg-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        className={`w-14 h-14 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm sm:text-sm text-gray-500 font-semibold">
                          {method.label}
                        </p>
                        <p className="text-base sm:text-base text-gray-800 group-hover:text-[#88c8c3] transition-colors truncate font-semibold">
                          {method.value}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <Send className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right: Quick Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl mb-5 sm:mb-6 font-bold">
                Quick Message
              </h3>
              <form className="space-y-5">
                {[
                  { name: 'name', label: '이름', type: 'text', placeholder: '홍길동' },
                  { name: 'email', label: '이메일', type: 'email', placeholder: 'hello@example.com' },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <label className="block text-sm sm:text-sm text-gray-600 mb-2 font-semibold">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.name]: e.target.value })
                      }
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 sm:py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-2xl sm:rounded-xl focus:outline-none focus:border-[#88c8c3] focus:bg-white transition-all text-base"
                      animate={{
                        scale: focusedField === field.name ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm sm:text-sm text-gray-600 mb-2 font-semibold">
                    메시지
                  </label>
                  <motion.textarea
                    placeholder="함께 만들고 싶은 프로젝트가 있나요?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 sm:py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-2xl sm:rounded-xl focus:outline-none focus:border-[#88c8c3] focus:bg-white transition-all resize-none text-base"
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] text-white rounded-2xl sm:rounded-xl overflow-hidden text-base font-semibold shadow-lg"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(136, 200, 195, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    보내기
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6db3ae] to-[#8a9bef]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-10 sm:mt-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-sm sm:text-sm font-semibold">
            © 2025 what we want (WWW) Team. All rights reserved.
          </p>
          <motion.p
            className="text-sm sm:text-sm mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            what we want, we build.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
});