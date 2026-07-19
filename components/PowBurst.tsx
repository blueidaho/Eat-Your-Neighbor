export default function PowBurst({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 4 L118 62 L172 34 L140 84 L196 96 L140 116 L164 172 L112 138 L100 196 L88 138 L36 172 L60 116 L4 96 L60 84 L28 34 L82 62 Z"
        fill="#7DD3FC"
        stroke="#0A0A0A"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
