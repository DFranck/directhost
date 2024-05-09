const QuoteSvg = ({
  fill,
  className,
}: {
  fill: string;
  className?: string;
}) => {
  return (
    <svg
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 649.68 700"
      fill={`hsl(var(--${fill}))`}
      className={className}
    >
      <path
        className="cls-1"
        d="M450,500v150H50V50h250V0H50C22.39,0,0,22.39,0,50v600c0,27.61,22.39,50,50,50h400c27.61,0,50-22.39,50-50v-150h-50Z"
      />
      <path
        className="cls-1"
        d="M638.5,94l-82.5-82.5c-15.55-15.25-40.45-15.25-56,0L150,361.5v138.5h138.25l350-350c15.25-15.55,15.25-40.45,0-56h.25ZM267.5,450h-67.5v-67.5l236-236.25,67.75,67.75-236.25,236ZM539,178.75l-67.75-67.75,56.75-56.75,67.75,67.75-56.75,56.75Z"
      />
    </svg>
  );
};

export default QuoteSvg;
