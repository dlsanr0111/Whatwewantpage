import { Github, ExternalLink, Calendar, User, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useAnimation } from 'motion/react';
import { useInView } from './hooks/useInView';
import { memo, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projects.json';

// 색상 매핑 (프로젝트 ID별)
const colorMap: Record<number, string> = {
  1: 'from-[#88c8c3] to-[#88c8c3]/70',
  2: 'from-[#a8b5ff] to-[#a8b5ff]/70',
  3: 'from-[#d4a5f5] to-[#d4a5f5]/70',
  4: 'from-[#88c8c3] to-[#a8b5ff]',
};

export const FeaturedProjects = memo(function FeaturedProjects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();

  // 자동 스크롤 시작
  const startAutoScroll = useCallback(() => {
    if (!isDragging) {
      controls.start({
        x: ['0%', `-${(100 / 3)}%`],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 60,
          ease: 'linear',
        },
      });
    }
  }, [isDragging, controls]);

  // 컴포넌트 마운트 시 자동 스크롤 시작
  useEffect(() => {
    startAutoScroll();
  }, [startAutoScroll]);

  // 번역된 프로젝트 데이터 가져오기
  const translatedProjects: any = t('projectsData.projects', { returnObjects: true });
  
  // featured=true인 프로젝트 모두 가져오기
  const featuredProjects = projectsData.projects
    .filter(p => p.featured)
    .map((project, index) => ({
      ...project,
      ...translatedProjects[index],
      color: colorMap[project.id] || 'from-[#88c8c3] to-[#a8b5ff]',
      links: project.links,
    }));

  // 무한 스크롤을 위해 프로젝트 배열 3번 반복 (끊김 없는 무한 루프)
  const duplicatedProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 bg-white snap-start snap-always overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a8b5ff]/5 via-white to-[#88c8c3]/5" />

      <div className="w-full relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-bold">
            {t('projectsData.featuredTitle')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('projectsData.description')}
          </p>
          
          {/* 모든 프로젝트 보기 버튼 */}
          <Link to="/projects">
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-base sm:text-lg">{t('projectsData.viewAll')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>

        {/* 컨베이어 벨트 스타일 무한 스크롤 */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -2000, right: 100 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            animate={controls}
            style={{ width: 'max-content' }}
            onDragStart={() => {
              setIsDragging(true);
              controls.stop();
            }}
            onDragEnd={() => {
              setIsDragging(false);
              setTimeout(startAutoScroll, 100);
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="group flex-shrink-0 w-[400px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full bg-white rounded-3xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
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
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-50 group-hover:bg-white rounded-full text-xs text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
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
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            
            {/* 모달 */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 닫기 버튼 */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* 모달 내용 */}
                <div className="p-8 sm:p-12">
                  {/* 그라데이션 바 */}
                  <div className={`h-3 bg-gradient-to-r ${selectedProject.color} rounded-full mb-6`} />

                  {/* 헤더 */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 flex-1">
                        {selectedProject.title}
                      </h2>
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 whitespace-nowrap">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  {/* 메타 정보 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="p-3 bg-gray-50 rounded-xl">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">{t('modal.periodLabel')}</p>
                        <p className="font-semibold">{selectedProject.period}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="p-3 bg-gray-50 rounded-xl">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">{t('modal.roleLabel')}</p>
                        <p className="font-semibold">{selectedProject.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* 설명 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('modal.descriptionTitle')}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* 기술 스택 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('modal.stackTitle')}</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.stack.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 링크 */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                    {selectedProject.links.github && (
                      <motion.a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#88c8c3] to-[#88c8c3]/80 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>{t('modal.githubButton')}</span>
                      </motion.a>
                    )}
                    {selectedProject.links.demo && (
                      <motion.a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#a8b5ff] to-[#a8b5ff]/80 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>{t('modal.demoButton')}</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
});

