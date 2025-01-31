import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconGoogle = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.838 14.718a9 9 0 0 0 .086-2.857.56.56 0 0 0-.557-.473h-7.805a.56.56 0 0 0-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 0 1 8.369-5.776.57.57 0 0 0 .73-.06l1.703-1.733a.56.56 0 0 0-.046-.832 8.9 8.9 0 0 0-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694-.167 5.108 3.927 9.302 8.995 9.302 4.383 0 8.037-3.14 8.838-7.29"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconGoogle);
export default ForwardRef;
