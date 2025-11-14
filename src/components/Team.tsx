import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const members = [
  {
    name: '최인묵',
    role: '팀장',
    description: '문제를 정의하고, 아이디어를 현실로 만드는 것을 좋아합니다.',
    skills: ['React', 'Next.js', 'CS', '교육', 'Product'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    color: 'from-[#88c8c3] to-[#a8b5ff]',
  },
  {
    name: '김현수',
    role: '팀원',
    description: '안정적인 인프라와 효율적인 시스템 설계에 관심이 많습니다.',
    skills: ['백엔드', 'DB', '인프라', 'Node.js', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    color: 'from-[#a8b5ff] to-[#d4a5f5]',
  },
];

const workingPrinciples = [
  '실험을 두려워하지 않습니다',
  '빠르게 실행하고 배웁니다',
  '서로에게서 배웁니다',
];

export function Team() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="team"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white snap-start snap-always overflow-y-auto relative"
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

        {/* Sparkles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Team Story */}
        <motion.div
          className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto"
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
              About Us
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-6 font-bold px-4">Team</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold px-4">
            우리는 <span className="gradient-text font-bold">what we want</span> 팀입니다
          </p>
          <p className="text-base sm:text-base text-gray-600 leading-relaxed px-4">
            컴퓨터 사이언스를 기반으로, 세상에 필요한 제품을 만들어가는 팀입니다.
            궁금한 것이 생기면 직접 만들어보고, 실패하더라도 배움을 얻습니다.
            공모전, 해커톤, 사이드 프로젝트를 통해 끊임없이 성장하고 있습니다.
          </p>
        </motion.div>

        {/* Team Values */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 sm:p-8 md:p-12 mb-10 sm:mb-16 border border-gray-200 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl mb-7 sm:mb-8 text-center font-bold">
            우리가 일하는 방식
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {workingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-20 h-1.5 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                    index === 0
                      ? 'from-[#88c8c3] to-[#a8b5ff]'
                      : index === 1
                      ? 'from-[#a8b5ff] to-[#d4a5f5]'
                      : 'from-[#d4a5f5] to-[#88c8c3]'
                  }`}
                  whileHover={{ width: 96 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-base sm:text-base text-gray-700 font-semibold px-2">
                  {principle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 sm:gap-6 mb-5 sm:mb-6">
                    <motion.div
                      className={`w-24 h-24 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${member.color} flex-shrink-0 overflow-hidden shadow-lg`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
                        <motion.span
                          className={`px-3 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${member.color} text-white rounded-full text-sm whitespace-nowrap font-semibold shadow-md`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {member.role}
                        </motion.span>
                      </div>
                      <p className="text-base sm:text-base text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 sm:mb-6">
                    <p className="text-sm sm:text-sm text-gray-500 mb-3 font-semibold">
                      Skills & Interests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 sm:px-4 sm:py-2 bg-gray-50 group-hover:bg-white rounded-full text-sm text-gray-700 border border-gray-100 font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          #{skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {[
                      { icon: Github, label: 'GitHub' },
                      { icon: Linkedin, label: 'LinkedIn' },
                      { icon: Mail, label: 'Email' },
                    ].map(({ icon: Icon, label }) => (
                      <motion.button
                        key={label}
                        className="p-2.5 sm:p-2 hover:bg-gray-50 rounded-xl transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}