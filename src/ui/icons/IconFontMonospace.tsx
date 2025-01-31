import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconFontMonospace = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m3 17.365 3.605-10.93H8.54l3.604 10.93h-1.769l-1.769-5.957-.534-1.803-.5-1.835h-.067a56 56 0 0 1-.5 1.835q-.252.901-.518 1.803l-1.786 5.957zm2.02-3.137v-1.319h5.072v1.319zm11.324 3.338q-.785 0-1.418-.284-.618-.3-.985-.818-.35-.534-.35-1.251 0-1.37 1.335-2.086 1.35-.718 4.422-.952a2.1 2.1 0 0 0-.234-.918 1.42 1.42 0 0 0-.65-.65q-.435-.25-1.152-.25a3.7 3.7 0 0 0-.985.133 4.7 4.7 0 0 0-.934.333q-.45.217-.851.451l-.618-1.118q.45-.267 1.035-.534a6.3 6.3 0 0 1 1.252-.45 5.8 5.8 0 0 1 1.385-.168q1.134 0 1.886.418.75.417 1.134 1.184.384.768.384 1.853v4.906h-1.352l-.133-1.051h-.05a8 8 0 0 1-1.469.884 4 4 0 0 1-1.652.367Zm.467-1.319a3.1 3.1 0 0 0 1.285-.284q.634-.284 1.252-.8v-1.936q-1.602.117-2.52.367-.9.25-1.268.634a1.19 1.19 0 0 0-.367.868q0 .401.217.667.233.251.6.367.367.117.801.117"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFontMonospace);
export default ForwardRef;
