import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconMenu = (
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
      fill="#000"
      fillRule="evenodd"
      d="M12 16.762c-.695 0-1.262.565-1.262 1.26a1.262 1.262 0 0 0 2.523 0c0-.695-.566-1.26-1.26-1.26Zm0-6.022c-.695 0-1.262.565-1.262 1.261a1.262 1.262 0 0 0 2.523 0c0-.696-.566-1.26-1.26-1.26Zm0-3.5c.695 0 1.261-.565 1.261-1.261a1.262 1.262 0 0 0-2.523 0c0 .696.567 1.26 1.262 1.26Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMenu);
export default ForwardRef;
