import { Mail, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const memberColors = [
  'from-[#88c8c3] to-[#a8b5ff]',
  'from-[#a8b5ff] to-[#d4a5f5]',
];

const memberEmails = [
  'inmook@whatwewant.com',
  'hyunsu@whatwewant.com',
];

export const Team = memo(function Team() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useTranslation();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // 번역된 데이터 가져오기
  const translatedMembers: any = t('team.members', { returnObjects: true });
  const members = translatedMembers.map((member: any, index: number) => ({
    ...member,
    color: memberColors[index],
    email: memberEmails[index],
  }));

  const copyEmail = (email: string, index: number) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section
      id="team"
      ref={ref}
      className="h-screen flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white snap-start snap-always relative"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a5f5]/5 via-gray-50 to-[#88c8c3]/5" />
      
      <motion.div
        className="absolute top-20 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#88c8c3]/15 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#a8b5ff]/15 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          y: [0, -40, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#d4a5f5]/12 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Floating cards pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/5 w-32 h-32 bg-gradient-to-br from-[#88c8c3]/5 to-[#a8b5ff]/5 rounded-3xl border border-[#88c8c3]/20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-24 h-24 bg-gradient-to-br from-[#a8b5ff]/5 to-[#d4a5f5]/5 rounded-2xl border border-[#a8b5ff]/20"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#d4a5f5]/5 to-[#88c8c3]/5 rounded-xl border border-[#d4a5f5]/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Sparkles - optimized */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                fill={i % 3 === 0 ? '#88c8c3' : i % 3 === 1 ? '#a8b5ff' : '#d4a5f5'}
                opacity="0.3"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Organization Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
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
            <span className="px-5 py-2.5 bg-gradient-to-r from-[#d4a5f5]/10 to-[#88c8c3]/10 rounded-full text-sm text-gray-600 font-semibold border border-[#d4a5f5]/20">
              {t('team.badge')}
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">{t('team.title')}</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
            {t('team.description')}
          </p>
        </motion.div>

        {/* Organization Chart */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-8 max-w-3xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <motion.button
                className="w-full group relative"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => copyEmail(member.email, index)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`relative bg-gradient-to-br ${member.color} rounded-2xl p-8 sm:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 text-center">
                    {/* Role */}
                    <motion.div
                      className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.role}
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                      {member.name}
                    </h3>

                    {/* Email Section */}
                    <motion.div
                      className="pt-4 border-t border-white/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === index ? 1 : 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {copiedEmail === member.email ? (
                        <motion.div
                          className="flex items-center justify-center gap-2 text-white"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                        >
                          <Check className="w-5 h-5" />
                          <span className="text-sm font-semibold">{t('team.emailCopied')}</span>
                        </motion.div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 text-white/90">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm font-medium">{member.email}</span>
                          </div>
                          <motion.div
                            className="flex items-center justify-center gap-1.5 text-xs text-white/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>{t('team.clickToCopy')}</span>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});