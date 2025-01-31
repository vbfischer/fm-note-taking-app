import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconFontSerif = (
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
      d="m8.501 6.317 3.858 9.928q.22.585.506.79.3.205.553.221v.317a11 11 0 0 0-.901-.032q-.506-.016-1.028-.016-.663 0-1.233.016-.57 0-.917.032v-.317q.807-.03 1.012-.268.222-.253-.095-1.06L7.411 8.245l.253-.284-2.625 6.86q-.285.712-.347 1.187-.048.473.079.743a.8.8 0 0 0 .474.379 2.9 2.9 0 0 0 .822.126v.317a15 15 0 0 0-.964-.032 27 27 0 0 0-.902-.016q-.379 0-.68.016-.284 0-.521.032v-.317q.332-.078.664-.395.332-.316.632-1.075l3.668-9.47zm1.66 6.703v.316h-4.71l.157-.316zm5.559 4.663q-.664 0-1.138-.253a1.7 1.7 0 0 1-.712-.695 2.1 2.1 0 0 1-.237-1.012q0-.696.316-1.122.317-.444.806-.712.506-.269 1.06-.442.57-.19 1.059-.348.506-.174.822-.396.332-.22.332-.584v-1.075q0-.57-.19-.902a1 1 0 0 0-.49-.49 1.7 1.7 0 0 0-.727-.142q-.363 0-.775.11-.411.096-.648.396.348.095.57.38a1 1 0 0 1 .236.68q0 .441-.3.695-.285.252-.727.253-.491 0-.727-.3a1.18 1.18 0 0 1-.238-.728q0-.426.206-.696.221-.268.57-.505.378-.253.963-.427.601-.174 1.328-.174.68 0 1.17.158.507.143.838.474.396.364.522.917.126.537.126 1.312v4.364q0 .395.095.569.111.158.348.158a.6.6 0 0 0 .3-.08 2.3 2.3 0 0 0 .364-.236l.158.268q-.332.27-.68.427-.332.159-.854.158-.505 0-.822-.158a1.05 1.05 0 0 1-.474-.458 1.7 1.7 0 0 1-.142-.743q-.41.664-.98 1.011-.57.348-1.328.348m.759-.759q.442 0 .822-.252.395-.254.727-.76v-3.145a1.5 1.5 0 0 1-.506.442q-.331.174-.711.364a5 5 0 0 0-.728.443 2 2 0 0 0-.553.616q-.22.38-.221.965 0 .615.316.98.315.347.854.347"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFontSerif);
export default ForwardRef;
