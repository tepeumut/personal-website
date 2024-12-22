import {motion} from "framer-motion";
import {IconArrowRight, IconExternalLink} from '@tabler/icons-react';
import {Project} from '@/types/content';

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({projects}: ProjectsProps) {
    const isComingSoon = (status: string) => status.toLowerCase() === 'coming soon';

    return (
        <motion.section
            className="space-y-6"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
                <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-zinc-800 to-transparent"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => {
                    const comingSoon = isComingSoon(project.status);
                    const ProjectWrapper = comingSoon ? 'div' : 'a';
                    const wrapperProps = comingSoon ? {} : {
                        href: project.url || "#",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    };

                    return (
                        <motion.div
                            key={index}
                            className={`group relative ${comingSoon ? '' : 'cursor-pointer'}`}
                            whileHover={{scale: comingSoon ? 1 : 1.02}}
                            transition={{duration: 0.2}}
                        >
                            <ProjectWrapper {...wrapperProps} className="block">
                                <article className={`
                  relative p-6 h-full
                  bg-gradient-to-br from-zinc-900/50 to-zinc-800/30
                  rounded-xl border border-zinc-800/50 
                  ${!comingSoon && 'group-hover:border-zinc-700/50 group-hover:from-zinc-900/60 group-hover:to-zinc-800/40'} 
                  transition-all duration-300
                `}>
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-lg font-medium group-hover:text-white tracking-tight flex items-center gap-2">
                                            {project.name}
                                            {!comingSoon && (
                                                <IconExternalLink size={16}
                                                                  className="text-zinc-500 group-hover:text-white transition-colors"/>
                                            )}
                                        </h3>
                                        <span className={`
                      text-[11px] px-2 py-0.5 rounded-full 
                      ${comingSoon
                                            ? 'bg-zinc-800/80 text-zinc-400'
                                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                        }
                    `}>
                      {project.status}
                    </span>
                                    </div>
                                    <p className="text-[13px] text-zinc-400 tracking-tight mb-6 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`
                          text-[12px] px-2.5 py-1 rounded-md 
                          bg-zinc-800/50 text-zinc-400 tracking-tight
                          border border-zinc-700/50
                          ${!comingSoon && 'group-hover:border-zinc-700 group-hover:bg-zinc-800/80'}
                          transition-colors duration-300
                        `}
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    {!comingSoon && (
                                        <div
                                            className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <IconArrowRight size={20} className="text-zinc-400"/>
                                        </div>
                                    )}
                                </article>
                            </ProjectWrapper>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
