import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconFontSansSerif = (
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
      d="M4.808 17.55H3L7.062 6.263H9.03l4.063 11.289h-1.808l-3.192-9.24h-.088l-3.197 9.239Zm.303-4.42h5.865v1.433H5.111zm11.711 4.608q-.805 0-1.455-.297a2.45 2.45 0 0 1-1.031-.877q-.375-.573-.375-1.405 0-.717.276-1.18a2 2 0 0 1 .744-.733 3.9 3.9 0 0 1 1.047-.408q.58-.138 1.18-.21l1.234-.143q.474-.06.69-.193.214-.132.214-.43v-.038q0-.723-.407-1.12-.404-.396-1.202-.396-.832 0-1.312.37-.474.363-.656.81l-1.549-.353q.276-.772.805-1.246.534-.48 1.229-.695a4.8 4.8 0 0 1 1.46-.22q.508 0 1.076.121.573.115 1.069.43.501.315.821.899.32.578.32 1.504v5.623h-1.61v-1.158h-.066a2.4 2.4 0 0 1-.48.629 2.6 2.6 0 0 1-.82.512q-.503.204-1.202.204m.358-1.323q.684 0 1.169-.27a1.9 1.9 0 0 0 .744-.705 1.83 1.83 0 0 0 .259-.943v-1.091q-.088.088-.342.165a5 5 0 0 1-.568.127q-.32.05-.622.093-.304.039-.508.067-.48.06-.876.204-.391.143-.629.413-.231.265-.231.706 0 .61.452.926.451.308 1.152.308"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFontSansSerif);
export default ForwardRef;
