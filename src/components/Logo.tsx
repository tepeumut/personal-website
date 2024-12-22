interface LogoProps {
    className?: string;
}

export default function Logo({className = ""}: LogoProps) {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect width="40" height="40" rx="12" className="fill-zinc-800"/>
            {/* Main shapes */}
            <g>
                {/* U letter */}
                <path
                    d="M9 12V23C9 25.2091 10.7909 27 13 27H15C17.2091 27 19 25.2091 19 23V12H16V23C16 23.5523 15.5523 24 15 24H13C12.4477 24 12 23.5523 12 23V12H9Z"
                    fill="currentColor"
                />
                {/* T letter */}
                <path
                    d="M20 12H32V15H27.5V27H24.5V15H20V12Z"
                    fill="currentColor"
                />
            </g>
            {/* Hover effect overlay */}
            <g fillOpacity="0.1" className="group-hover:fill-opacity-20 transition-all">
                <path
                    d="M9 12V23C9 25.2091 10.7909 27 13 27H15C17.2091 27 19 25.2091 19 23V12H16V23C16 23.5523 15.5523 24 15 24H13C12.4477 24 12 23.5523 12 23V12H9Z"
                    fill="currentColor"
                />
                <path
                    d="M20 12H32V15H27.5V27H24.5V15H20V12Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
}
