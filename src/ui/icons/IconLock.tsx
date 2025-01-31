import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconLock = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M16.424 9.448V7.3a4.55 4.55 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M15.683 21.25H8.042a3.79 3.79 0 0 1-3.792-3.792v-4.29a3.79 3.79 0 0 1 3.792-3.791h7.641a3.79 3.79 0 0 1 3.792 3.792v4.289a3.79 3.79 0 0 1-3.792 3.792"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M11.862 14.203v2.22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconLock);
export default ForwardRef;
