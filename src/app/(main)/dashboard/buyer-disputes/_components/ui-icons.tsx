
import React, { SVGProps } from "react";

type ICONS_PROPS = {
    icon?: string;
    className?: string;
} & SVGProps<SVGSVGElement>;

const Icons = ({ icon, className, ...props }: ICONS_PROPS) => {
    const iconsList: Record<string, React.ReactElement> = {
        pending: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7998 1.2002V3.2002" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.89941 4.10039L10.3494 2.65039" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.7998 6.2002H11.7998" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.89941 8.2998L10.3494 9.7498" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.7998 9.2002V11.2002" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.25 9.7498L4.7 8.2998" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.7998 6.2002H3.7998" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.25 2.65039L4.7 4.10039" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        resolved: (
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11.2002C8.76142 11.2002 11 8.96162 11 6.2002C11 3.43877 8.76142 1.2002 6 1.2002C3.23858 1.2002 1 3.43877 1 6.2002C1 8.96162 3.23858 11.2002 6 11.2002Z" fill="#00C950" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 6.2002L5.5 7.2002L7.5 5.2002" fill="#00C950" />
                <path d="M4.5 6.2002L5.5 7.2002L7.5 5.2002" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };
    return icon ? iconsList[icon] || null : null;
};

export default Icons;