import {motion} from "framer-motion";
import {IconMapPin} from '@tabler/icons-react';
import {Header} from '@/types/content';

interface HeroProps {
    header: Header;
}

export default function Hero({header}: HeroProps) {
    return (
        <motion.header
            className="mb-20 mt-20"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-5xl font-medium tracking-tight mb-4">
                        {header.name}
                    </h1>
                    <p className="text-xl text-zinc-400 tracking-tight mb-4">
                        {header.title}
                    </p>
                    <div className="flex items-center gap-4 text-[15px] text-zinc-500 tracking-tight">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                {header.status}
            </span>
                        <span className="flex items-center gap-1.5">
              <IconMapPin size={16} className="text-zinc-500"/>
                            {header.location}
            </span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
