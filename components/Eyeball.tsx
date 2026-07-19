export default function Eyeball({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="6" />
      <circle cx="50" cy="50" r="26" fill="#7DD3FC" stroke="#0A0A0A" strokeWidth="6" />
      <circle cx="50" cy="50" r="10" fill="#0A0A0A" />
      <circle cx="44" cy="44" r="4" fill="#FFFFFF" />
    </svg>
  );
}
