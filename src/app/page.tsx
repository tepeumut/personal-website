"use client";

import {JetBrains_Mono} from "next/font/google";
import content from '@/data/content.json';
import {Content} from '@/types/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const jetbrains = JetBrains_Mono({subsets: ["latin"]});

export default function Home() {
    const {header, about, skills, projects, socialLinks} = content as Content;

    return (
        <div className={`min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 ${jetbrains.className}`}>
            <div className="fixed inset-0 opacity-5 pointer-events-none"/>

            <Header socialLinks={socialLinks}/>

            <main className="relative mx-auto max-w-5xl px-6 py-16">
                <Hero header={header}/>
                <Skills skills={skills} about={about}/>
                <Projects projects={projects}/>
                <Footer name={header.name} socialLinks={socialLinks}/>
            </main>
        </div>
    );
}
