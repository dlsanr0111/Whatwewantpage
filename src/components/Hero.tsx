import { ArrowRight, Sparkles, MousePointer2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 snap-start snap-always relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c8c3]/5 via-white to-[#a8b5ff]/5">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#88c8c3]/20 to-transparent blur-3xl"
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#a8b5ff]/20 to-transparent blur-3xl"
          animate={{
            x: -mousePosition.x / 80,
            y: -mousePosition.y / 80,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center w-full relative z-10">
        {/* Logo Circle with pulse animation */}
        <motion.div
          className="mb-8 sm:mb-10 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        >
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#88c8c3] via-[#a8b5ff] to-[#d4a5f5] flex items-center justify-center shadow-2xl relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.span
              className="text-white text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              W
            </motion.span>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#88c8c3] to-[#a8b5ff]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Main Text */}
        <div className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#88c8c3]/10 to-[#a8b5ff]/10 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-[#88c8c3]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 sm:w-4 sm:h-4 text-[#88c8c3]" />
            <span className="text-sm sm:text-sm text-gray-700 font-semibold">what we want</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8 tracking-tight px-4 font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            우리가 궁금한 것을,
            <br />
            <span className="gradient-text">직접 만들어보는 팀</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-3 px-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            what we want, we build.
          </motion.p>

          <motion.p
            className="text-base sm:text-base text-gray-500 max-w-xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            실험, 실행, 기획력으로 다양한 프로젝트를 만들어가는 소규모 IT 팀입니다.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mt-10 sm:mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative w-full sm:w-auto px-8 py-4 sm:py-4 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] text-white rounded-2xl sm:rounded-full overflow-hidden font-semibold text-base shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(136, 200, 195, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              프로젝트 보러가기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#6db3ae] to-[#8a9bef]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group w-full sm:w-auto px-8 py-4 sm:py-4 border-2 border-gray-200 rounded-2xl sm:rounded-full hover:border-[#88c8c3] hover:bg-[#88c8c3]/5 font-semibold relative overflow-hidden text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">협업 제안하기</span>
          </motion.button>
        </motion.div>

        {/* Floating Tags */}
        <motion.div
          className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {['#CS', '#Product', '#Experiment'].map((tag, index) => (
            <motion.div
              key={tag}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 hover:border-[#88c8c3] hover:shadow-lg cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <p className="text-sm sm:text-sm text-gray-700 font-semibold">{tag}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { duration: 1.5, repeat: Infinity } }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <MousePointer2 className="w-5 h-5" />
            <span className="text-xs">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}