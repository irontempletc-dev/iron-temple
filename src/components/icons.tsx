import type { SVGProps } from 'react';

export function IronTempleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
      aria-label="Iron Temple Logo"
    >
      <path
        fill="hsl(var(--primary))"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
      />
      <path
        fill="hsl(var(--accent))"
        d="M168 88H88a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0v-28h64v28a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8Zm-8 48h-64v-32h64Z"
      />
    </svg>
  );
}
