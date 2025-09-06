import React, { SVGProps } from "react";

type ICONS_PROPS = {
    icon?: string;
    className?: string;
} & SVGProps<SVGSVGElement>;

const Icons = ({ icon, className, ...props }: ICONS_PROPS) => {
    const iconsList: Record<string, React.ReactElement> = {
        greentick: (
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5562 7.59168C16.8892 9.22596 16.6518 10.925 15.8838 12.4055C15.1157 13.886 13.8633 15.0584 12.3354 15.7272C10.8075 16.3961 9.0965 16.5209 7.48772 16.0809C5.87894 15.6409 4.46962 14.6627 3.49479 13.3094C2.51996 11.9561 2.03853 10.3095 2.1308 8.64415C2.22307 6.97884 2.88346 5.39549 4.00183 4.15816C5.12021 2.92082 6.62897 2.10428 8.27651 1.84472C9.92405 1.58515 11.6108 1.89824 13.0554 2.73178" stroke="#00A63E" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.22217 8.32096L9.40967 10.5085L16.7013 3.2168" stroke="#00A63E" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        greendot: (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.659668" y="0.0498047" width="7" height="7" rx="3.5" fill="#00C950" />
            </svg>

        ),
        notice: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1735 16.1499L12.1735 3.89985C12.0209 3.63053 11.7996 3.40652 11.5321 3.25066C11.2646 3.09481 10.9606 3.0127 10.651 3.0127C10.3415 3.0127 10.0375 3.09481 9.76998 3.25066C9.50251 3.40652 9.28117 3.63053 9.12854 3.89985L2.12854 16.1499C1.97426 16.417 1.89336 16.7203 1.89405 17.0288C1.89473 17.3373 1.97697 17.6402 2.13243 17.9067C2.28789 18.1732 2.51104 18.3939 2.77927 18.5463C3.0475 18.6988 3.35127 18.7776 3.65979 18.7749H17.6598C17.9668 18.7745 18.2684 18.6935 18.5342 18.5397C18.7999 18.386 19.0206 18.1651 19.174 17.8991C19.3274 17.6331 19.4081 17.3314 19.408 17.0244C19.4079 16.7174 19.3271 16.4158 19.1735 16.1499Z" stroke="#E7000B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.6597 8.27441V11.7744" stroke="#E7000B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.6597 15.2744H10.6684" stroke="#E7000B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        finding: (
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.57617 6.5625H15.2428" stroke="#155DFC" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.57617 10.9375H15.2428" stroke="#155DFC" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.9515 2.1875L6.49316 15.3125" stroke="#155DFC" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.3265 2.1875L10.8682 15.3125" stroke="#155DFC" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),

    };
    return icon ? iconsList[icon] || null : null;
};

export default Icons;