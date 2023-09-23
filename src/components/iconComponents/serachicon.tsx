import * as React from "react";
type SvgSearchProps = {
    marginTop?: number;
    marginBottom?: number;
  } & React.SVGProps<SVGSVGElement>;
  function SvgSearch({ marginTop, marginBottom, ...props }: SvgSearchProps) {
    const style = {
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
      };
    return (
        <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
        <circle cx="11.0586" cy="11.5588" r="7.06194" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.0033 20.5034L16.0517 16.5518" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>              
        );
}
export default SvgSearch