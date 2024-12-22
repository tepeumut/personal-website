import {motion} from "framer-motion";
import {IconBrandGithub, IconBrandLinkedin, IconMail} from '@tabler/icons-react';
import {SocialLinks} from '@/types/content';
import Logo from './Logo';

interface HeaderProps {
    socialLinks: SocialLinks;
}

export default function Header({socialLinks}: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="/"
                        className="block group"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <Logo className="text-white group-hover:text-zinc-300 transition-colors"/>
                    </motion.a>
                    <nav className="flex items-center gap-8">
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                           className="text-[13px] text-zinc-400 hover:text-white transition-colors tracking-tight flex items-center gap-1">
                            <IconBrandGithub size={16}/>
                            GitHub
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                           className="text-[13px] text-zinc-400 hover:text-white transition-colors tracking-tight flex items-center gap-1">
                            <IconBrandLinkedin size={16}/>
                            LinkedIn
                        </a>
                        <a href={`mailto:${socialLinks.email}`}
                           className="text-[13px] text-zinc-400 hover:text-white transition-colors tracking-tight flex items-center gap-1">
                            <IconMail size={16}/>
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
