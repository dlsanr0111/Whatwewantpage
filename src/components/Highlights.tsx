import { ArrowUpRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const highlights = [
  {
    id: 1,
    title: 'AI 기반 학습 도우미',
    description: '학생들의 학습 패턴을 분석하고 맞춤형 학습 경로를 제안하는 교육 플랫폼',
    period: '2025.01 ~ 2025.03',
    tags: ['React', 'LLM', 'Education'],
    color: 'from-[#88c8c3] to-[#88c8c3]/70',
    gradient: 'from-[#88c8c3]/10 to-[#88c8c3]/5',
  },
  {
    id: 2,
    title: '실시간 협업 도구',
    description: '원격 팀을 위한 실시간 협업 및 프로젝트 관리 도구',
    period: '2024.11 ~ 2024.12',
    tags: ['Next.js', 'WebSocket', 'Collaboration'],
    color: 'from-[#a8b5ff] to-[#a8b5ff]/70',
    gradient: 'from-[#a8b5ff]/10 to-[#a8b5ff]/5',
  },
  {
    id: 3,
    title: '데이터 시각화 대시보드',
    description: '복잡한 데이터를 직관적인 차트와 그래프로 표현하는 분석 플랫폼',
    period: '2024.09 ~ 2024.10',
    tags: ['React', 'D3.js', 'Analytics'],
    color: 'from-[#d4a5f5] to-[#d4a5f5]/70',
    gradient: 'from-[#d4a5f5]/10 to-[#d4a5f5]/5',
  },
];

export function Highlights() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 snap-start snap-always relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a8b5ff]/5 via-white to-[#d4a5f5]/5" />
      
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#a8b5ff]/15 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#88c8c3]/15 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#d4a5f5]/10 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-[#88c8c3]/20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/5 w-24 h-24 rounded-full border-2 border-[#a8b5ff]/20"
          animate={{
            y: [0, 40, 0],
            x: [0, -15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full border-2 border-[#d4a5f5]/20"
          animate={{
            y: [0, -25, 0],
            x: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Squares */}
        <motion.div
          className="absolute top-1/2 left-1/5 w-16 h-16 border-2 border-[#88c8c3]/15 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-gradient-to-br from-[#a8b5ff]/10 to-[#d4a5f5]/10 rounded-lg"
          animate={{
            rotate: [360, 270, 180, 90, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Dots pattern */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#88c8c3]/30 to-[#a8b5ff]/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Lines */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#88c8c3]/30 to-transparent"
          animate={{
            rotate: [0, 45, 90, 135, 180],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a8b5ff]/30 to-transparent"
          animate={{
            rotate: [180, 135, 90, 45, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
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
              Highlights
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold px-4">
            대표 프로젝트
          </h2>
          <p className="text-base sm:text-base text-gray-600 px-4">
            우리가 최근에 만든 것들을 소개합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${project.color} mb-5 sm:mb-6 flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-white rounded-lg" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl mb-3 font-bold group-hover:text-[#88c8c3] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 min-h-[60px] sm:min-h-[60px] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm sm:text-sm text-gray-500 mb-4 sm:mb-4">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{project.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 sm:px-3 sm:py-1 bg-gray-100 group-hover:bg-white rounded-full text-sm text-gray-700 font-medium transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="flex items-center gap-2 text-base sm:text-base text-[#88c8c3] font-semibold group/btn"
                    whileHover={{ gap: 12 }}
                  >
                    자세히 보기
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
