import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconClock = (
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
      fill="#2B303B"
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.364 9.75-9.75 9.75-5.385 0-9.75-4.366-9.75-9.75"
      clipRule="evenodd"
    />
    <path
      fill="#2B303B"
      fillRule="evenodd"
      d="M11.922 7.827a.75.75 0 0 1 .75.75v3.672l2.81 1.68a.75.75 0 1 1-.77 1.287l-3.174-1.897a.75.75 0 0 1-.366-.644V8.577a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconClock);
export default ForwardRef;
