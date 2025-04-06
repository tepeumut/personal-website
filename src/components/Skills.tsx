import {motion} from "framer-motion";
import {SkillSection, Technology} from '@/types/content';
import {IconMap} from '@/utils/iconMap';
import Image from 'next/image';

interface SkillsProps {
    skills: Record<string, SkillSection>;
    about: string;
}

export default function Skills({skills, about}: SkillsProps) {
    const renderIcon = (iconName: string, color?: string, size: number = 14) => {
        if (iconName === 'img') return null;
        const Icon = IconMap[iconName as keyof typeof IconMap];
        return Icon ? <Icon size={size} color={color}/> : null;
    };

    return (
        <motion.section
            className="mb-20"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
        >
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-12 tracking-tight max-w-2xl">
                {about}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([key, section]: [string, SkillSection]) => (
                    <div key={key} className="space-y-8">
                        <div
                            className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                            <h3 className="text-[14px] font-medium text-zinc-300 mb-4 tracking-tight flex items-center gap-2">
                                {renderIcon(section.icon, section.iconColor, 20)}
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {section.technologies.map((tech: Technology, index: number) => (
                                    <span key={index}
                                          className="text-[12px] px-3 py-1.5 rounded-full bg-zinc-800/50 text-zinc-400 tracking-tight hover:bg-zinc-700/50 transition-colors flex items-center gap-1.5">
                                        {tech.icon === 'img' && tech.iconSrc ? (
                                            <Image src={tech.iconSrc} alt={tech.name} width={14} height={14}/>
                                        ) : (
                                            renderIcon(tech.icon, tech.iconColor)
                                        )}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
