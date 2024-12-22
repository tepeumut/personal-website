import {motion} from "framer-motion";
import {IconBrandGithub} from '@tabler/icons-react';
import {SocialLinks} from '@/types/content';

interface FooterProps {
    name: string;
    socialLinks: SocialLinks;
}

export default function Footer({name, socialLinks}: FooterProps) {
    return (
        <motion.footer
            className="mt-24 border-t border-zinc-800/50 py-12"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.6}}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[13px] text-zinc-400 tracking-tight">
                    © {new Date().getFullYear()} {name}. All rights reserved.
                </p>
                <nav className="flex items-center gap-6">
                    <a href={socialLinks.sourceCode} target="_blank" rel="noopener noreferrer"
                       className="text-[13px] text-zinc-400 hover:text-white transition-colors tracking-tight flex items-center gap-1">
                        <IconBrandGithub size={16}/>
                        Blog Source
                    </a>
                </nav>
            </div>
        </motion.footer>
    );
}
