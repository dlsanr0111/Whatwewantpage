import { Lightbulb, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const features = [
  {
    icon: Lightbulb,
    title: '문제 정의 능력',
    description: '진짜 문제가 무엇인지 파악하고, 본질을 꿰뚫는 질문을 던집니다.',
    color: 'from-[#88c8c3] to-[#88c8c3]/70',
    delay: 0,
  },
  {
    icon: Zap,
    title: '실행 속도',
    description: '아이디어를 빠르게 프로토타입으로 만들고, 즉시 테스트합니다.',
    color: 'from-[#a8b5ff] to-[#a8b5ff]/70',
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: '기술+기획 밸런스',
    description: '기술적 구현과 사용자 경험, 두 마리 토끼를 모두 잡습니다.',
    color: 'from-[#d4a5f5] to-[#d4a5f5]/70',
    delay: 0.2,
  },
];

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white snap-start snap-always relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c8c3]/5 via-white to-[#a8b5ff]/5" />
      
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#88c8c3]/15 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#d4a5f5]/15 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#a8b5ff]/12 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #88c8c3 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating shapes and icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagons */}
        <motion.div
          className="absolute top-1/5 left-1/6 w-20 h-20"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 120, 240, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#88c8c3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#a8b5ff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/5 w-24 h-24"
          animate={{
            y: [0, 30, 0],
            rotate: [360, 240, 120, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a8b5ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d4a5f5" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Triangles */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 10, 90 90, 10 90"
              fill="none"
              stroke="#88c8c3"
              strokeWidth="2"
              opacity="0.2"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-20 h-20"
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 1.15, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 10, 90 90, 10 90"
              fill="none"
              stroke="#d4a5f5"
              strokeWidth="2"
              opacity="0.2"
            />
          </svg>
        </motion.div>

        {/* Rings */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-28 h-28 rounded-full border-2 border-[#a8b5ff]/15"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-20 h-20 rounded-full border-2 border-[#88c8c3]/20"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? '#88c8c3' : i % 3 === 1 ? '#a8b5ff' : '#d4a5f5'
              }40, transparent)`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Curved lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M 0 50 Q 150 30, 300 50 T 600 50"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 100 80 Q 250 60, 400 80 T 700 80"
            stroke="url(#lineGrad2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#88c8c3" />
              <stop offset="50%" stopColor="#a8b5ff" />
              <stop offset="100%" stopColor="#d4a5f5" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a5f5" />
              <stop offset="50%" stopColor="#a8b5ff" />
              <stop offset="100%" stopColor="#88c8c3" />
            </linearGradient>
          </defs>
        </svg>
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
              Our Strengths
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold px-4">
            우리의 강점
          </h2>
          <p className="text-base sm:text-base text-gray-600 px-4">
            WWW 팀이 일하는 방식
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group text-center relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white rounded-3xl p-8 sm:p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        className={`w-20 h-20 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg relative`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                        
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color}`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>

                    <h3 className="text-xl sm:text-2xl mb-3 font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-base text-gray-600 max-w-sm mx-auto px-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting lines animation */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.path
            d="M 300 300 Q 640 200 980 300"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#88c8c3" />
              <stop offset="50%" stopColor="#a8b5ff" />
              <stop offset="100%" stopColor="#d4a5f5" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  );
}