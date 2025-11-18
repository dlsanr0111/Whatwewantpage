import { useState, memo } from 'react';
import { Github, ExternalLink, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projects.json';

const categories = projectsData.categories;

// 색상 매핑 (프로젝트 ID별)
const colorMap: Record<number, string> = {
  1: 'from-[#88c8c3] to-[#88c8c3]/70',
  2: 'from-[#a8b5ff] to-[#a8b5ff]/70',
  3: 'from-[#d4a5f5] to-[#d4a5f5]/70',
  4: 'from-[#88c8c3] to-[#a8b5ff]',
  5: 'from-[#a8b5ff] to-[#d4a5f5]',
  6: 'from-[#d4a5f5] to-[#88c8c3]',
};

const projects = projectsData.projects.map(project => ({
  ...project,
  color: colorMap[project.id] || 'from-[#88c8c3] to-[#a8b5ff]',
}));

// 이전 데이터 (참고용으로 주석 처리)
const _oldProjects = [
  {
    id: 1,
    title: 'AI 학습 도우미',
    category: 'Product',
    period: '2025.01 ~ 2025.03',
    description: '학생들의 학습 패턴을 분석하고 맞춤형 학습 경로를 제안하는 교육 플랫폼',
    role: '프론트엔드, 기획',
    stack: ['React', 'Next.js', 'LLM API', 'Tailwind'],
    color: 'from-[#88c8c3] to-[#88c8c3]/70',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 2,
    title: '실시간 협업 도구',
    category: 'Product',
    period: '2024.11 ~ 2024.12',
    description: '원격 팀을 위한 실시간 협업 및 프로젝트 관리 도구',
    role: '풀스택',
    stack: ['Next.js', 'WebSocket', 'PostgreSQL', 'Redis'],
    color: 'from-[#a8b5ff] to-[#a8b5ff]/70',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 3,
    title: '해커톤 프로젝트 - 지역 탐험 앱',
    category: 'Hackathon',
    period: '2024.10',
    description: 'AR 기술을 활용한 지역 관광지 탐험 및 정보 제공 앱',
    role: '��획, UI/UX',
    stack: ['Flutter', 'Firebase', 'AR Kit'],
    color: 'from-[#d4a5f5] to-[#d4a5f5]/70',
    links: {
      github: '#',
    },
  },
  {
    id: 4,
    title: 'CS 학습 플랫폼',
    category: 'Education',
    period: '2024.08 ~ 2024.09',
    description: '운영체제, 자료구조 등 CS 기초를 인터랙티브하게 학습하는 플랫폼',
    role: '프론트엔드, 콘텐츠 기획',
    stack: ['React', 'D3.js', 'Canvas API'],
    color: 'from-[#88c8c3] to-[#a8b5ff]',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 5,
    title: '데이터 시각화 실험',
    category: 'Experiment',
    period: '2024.07',
    description: '복잡한 데이터를 아름답고 직관적인 차트로 표현하는 실험 프로젝트',
    role: '데이터 분석, 시각화',
    stack: ['React', 'D3.js', 'Recharts', 'Python'],
    color: 'from-[#a8b5ff] to-[#d4a5f5]',
    links: {
      github: '#',
    },
  },
  {
    id: 6,
    title: '머신러닝 챗봇',
    category: 'Experiment',
    period: '2024.06',
    description: '자연어 처리를 활용한 간단한 대화형 챗봇 프로토타입',
    role: '백엔드, ML 모델 연동',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'React'],
    color: 'from-[#d4a5f5] to-[#88c8c3]',
    links: {
      github: '#',
    },
  },
]; // 참고용 주석

export const Projects = memo(function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useTranslation();

  // 번역된 프로젝트 데이터 가져오기
  const translatedData: any = t('projectsData.projects', { returnObjects: true });
  const translatedProjects = projectsData.projects.map((project, index) => ({
    ...project,
    ...translatedData[index],
    color: colorMap[project.id] || 'from-[#88c8c3] to-[#a8b5ff]',
    links: project.links,
  }));

  const filteredProjects =
    selectedCategory === 'All'
      ? translatedProjects
      : translatedProjects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a8b5ff]/5 via-white to-[#88c8c3]/5" />
      
      <motion.div
        className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#88c8c3]/12 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 120, 240, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#a8b5ff]/12 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          rotate: [360, 240, 120, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#d4a5f5]/10 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Tech-inspired patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #88c8c3 1px, transparent 1px), linear-gradient(0deg, #a8b5ff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Code brackets */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/5 left-1/6 text-6xl font-mono text-[#88c8c3] opacity-10"
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          {'{ }'}
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/5 text-5xl font-mono text-[#a8b5ff] opacity-10"
          animate={{
            y: [0, 20, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
        >
          {'< />'}
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 text-4xl font-mono text-[#d4a5f5] opacity-10"
          animate={{
            rotate: [0, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          {'[ ]'}
        </motion.div>

        {/* Floating folder/file icons */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-16 h-16 bg-gradient-to-br from-[#88c8c3]/10 to-transparent rounded-lg border border-[#88c8c3]/20"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#a8b5ff]/10 to-transparent rounded-xl border border-[#a8b5ff]/20"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Binary code effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-[#88c8c3] opacity-10"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + (i % 3) * 30}%`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {Math.random() > 0.5 ? '01010101' : '10101010'}
          </motion.div>
        ))}

        {/* Particle system - optimized */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#88c8c3' : i % 3 === 1 ? '#a8b5ff' : '#d4a5f5',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
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
              {t('projectsData.badge')}
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold px-4">
            {t('projectsData.allTitle')}
          </h2>
          <p className="text-base sm:text-base text-gray-600 px-4">
            {t('projectsData.description')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all text-sm sm:text-base font-semibold ${
                selectedCategory === category
                  ? 'text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {selectedCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] rounded-full"
                  layoutId="activeCategory"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-full bg-white rounded-3xl p-6 sm:p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Animated gradient bar */}
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${project.color} rounded-full mb-4`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-[#88c8c3] transition-colors flex-1 leading-tight">
                      {project.title}
                    </h3>
                    <motion.span
                      className="px-3 py-1 bg-gray-50 group-hover:bg-gray-100 rounded-full text-xs text-gray-600 whitespace-nowrap flex-shrink-0 font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  <p className="text-sm sm:text-sm text-gray-600 min-h-[56px] sm:min-h-[48px] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate font-medium">{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <User className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate font-medium">{project.role}</span>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-50 group-hover:bg-white rounded-full text-xs text-gray-700 font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#88c8c3] transition-colors font-semibold"
                        whileHover={{ x: 3 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#a8b5ff] transition-colors font-semibold"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
});