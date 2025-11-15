import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef, memo } from 'react';

export const Hero = memo(function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // throttle with requestAnimationFrame
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        rafRef.current = undefined;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 snap-start snap-always relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto text-center w-full relative z-10">
        {/* Main Text */}
        <div className="mb-10">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight px-4 font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            우리가 궁금한 것을,
            <br />
            <span className="gradient-text">직접 만들어보는 팀</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto mb-4 px-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            what we want, we build.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            실험, 실행, 기획력으로 다양한 프로젝트를 만들어가는 소규모 IT 팀입니다.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 sm:mt-24 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-sm sm:text-base text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});