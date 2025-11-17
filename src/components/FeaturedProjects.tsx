import { Github, ExternalLink, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { memo } from 'react';
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

  // 번역된 프로젝트 데이터 가져오기
  const translatedProjects: any = t('projectsData.projects', { returnObjects: true });
  
  // featured=true인 프로젝트만 필터링
  const featuredProjects = projectsData.projects
    .filter(p => p.featured)
    .map((project, index) => ({
      ...project,
      ...translatedProjects[index],
      color: colorMap[project.id] || 'from-[#88c8c3] to-[#a8b5ff]',
      links: project.links,
    }));

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white snap-start snap-always overflow-y-auto relative"
    >
      {/* Background elements (simplified) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a8b5ff]/5 via-white to-[#88c8c3]/5" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-bold px-4">
            {t('projectsData.featuredTitle')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 mb-8 max-w-2xl mx-auto leading-relaxed">
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
    </section>
  );
});

