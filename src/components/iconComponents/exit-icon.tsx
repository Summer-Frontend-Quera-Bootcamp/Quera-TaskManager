import * as React from "react";
function SvgCelender(props:React.SVGProps<SVGSVGElement>){
    return (
        <svg width="64" height="36" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="36" rx="8" fill="#F1F3F5"/>
            <g filter="url(#filter0_dd_1485_1500)">
            <g clip-path="url(#clip0_1485_1500)">
            <rect x="31" y="3" width="30" height="30" rx="5" fill="white"/>
            <path d="M46 24.5C49.5899 24.5 52.5 21.5899 52.5 18C52.5 14.4101 49.5899 11.5 46 11.5C42.4101 11.5 39.5 14.4101 39.5 18C39.5 21.5899 42.4101 24.5 46 24.5Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M53.14 25.14L53.01 25.01M53.01 10.99L53.14 10.86L53.01 10.99ZM38.86 25.14L38.99 25.01L38.86 25.14ZM46 8.08V8V8.08ZM46 28V27.92V28ZM36.08 18H36H36.08ZM56 18H55.92H56ZM38.99 10.99L38.86 10.86L38.99 10.99Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_dd_1485_1500" x="29" y="2" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1485_1500"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_1485_1500" result="effect2_dropShadow_1485_1500"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1485_1500" result="shape"/>
            </filter>
            <clipPath id="clip0_1485_1500">
            <rect x="31" y="3" width="30" height="30" rx="5" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );
}
export default SvgCelender