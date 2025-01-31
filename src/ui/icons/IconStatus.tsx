import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconStatus = (
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
      d="M5.658 6.348c.27-.27.708-.27.979 0l.876.876a.692.692 0 0 1-.98.979l-.875-.876a.69.69 0 0 1 0-.98m1.855 9.446c.27.27.27.709 0 .98l-1.589 1.589a.692.692 0 1 1-.98-.979l1.59-1.59c.27-.27.708-.27.979 0m7.592 0c.27-.27.709-.27.98 0l1.588 1.59a.692.692 0 1 1-.98.979l-1.588-1.59a.69.69 0 0 1 0-.979M11.308 4.584c.382 0 .692.31.692.692v.662a.692.692 0 1 1-1.384 0v-.662c0-.383.31-.692.692-.692m-8.484 7.415c0-.382.31-.692.692-.692h1.731a.692.692 0 0 1 0 1.384H3.516A.69.69 0 0 1 2.824 12m13.852 0c0-.382.31-.692.693-.692h2.247a.692.692 0 0 1 0 1.384h-2.247a.69.69 0 0 1-.693-.692m-5.368 5.368c.382 0 .692.31.692.693v2.247a.692.692 0 1 1-1.384 0V18.06c0-.383.31-.693.692-.693"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStatus);
export default ForwardRef;
