export interface Technology {
    name: string;
    icon: string;
    iconColor?: string;
    iconSrc?: string;
}

export interface SkillSection {
    icon: string;
    iconColor: string;
    technologies: Technology[];
}

export interface Skills {
    blockchain: SkillSection;
    backend: SkillSection;
    frontend: SkillSection;
    database: SkillSection;

    [key: string]: SkillSection;
}

export interface Project {
    name: string;
    status: string;
    description: string;
    technologies: string[];
    url?: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
    sourceCode: string;
}

export interface Header {
    name: string;
    title: string;
    status: string;
    location: string;
}

export interface Content {
    header: Header;
    about: string;
    skills: Skills;
    projects: Project[];
    socialLinks: SocialLinks;
}
