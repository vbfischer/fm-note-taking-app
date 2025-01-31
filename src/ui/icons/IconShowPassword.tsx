import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconShowPassword = (
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
      fillRule="evenodd"
      d="M12.003 10.115c-1.332 0-2.412 1.036-2.412 2.315s1.08 2.316 2.412 2.316 2.412-1.037 2.412-2.316c0-1.28-1.08-2.315-2.412-2.315M8.09 12.43c0-2.075 1.752-3.755 3.912-3.755s3.912 1.68 3.912 3.755c0 2.074-1.752 3.756-3.912 3.756S8.09 14.504 8.09 12.43"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.976 7.195A11.25 11.25 0 0 1 12.002 4.7a11.25 11.25 0 0 1 7.026 2.493c1.775 1.44 2.976 3.377 2.976 5.237s-1.2 3.797-2.976 5.237a11.25 11.25 0 0 1-7.026 2.493 11.25 11.25 0 0 1-7.026-2.494C3.2 16.226 2 14.289 2 12.43s1.2-3.795 2.976-5.235m.968 1.1C4.37 9.571 3.5 11.14 3.5 12.43s.87 2.859 2.444 4.136a9.7 9.7 0 0 0 6.058 2.154 9.7 9.7 0 0 0 6.058-2.153c1.574-1.277 2.444-2.846 2.444-4.137s-.87-2.86-2.444-4.137a9.7 9.7 0 0 0-6.058-2.153 9.7 9.7 0 0 0-6.058 2.154Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconShowPassword);
export default ForwardRef;
