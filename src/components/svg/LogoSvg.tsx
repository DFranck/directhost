const LogoSvg = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="81"
      height="108"
      viewBox="0 0 81 108"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M49.5 24.5C53.5 30.5 57 41 55 54C61.0875 51.5346 66.1437 47.5883 68 43C73.9045 28.4059 58.1069 7.31777 37.7721 6.73819C40.5207 12.4239 37.9422 18.7621 30 26.5C26.0617 30.337 24.6603 37.1254 28 43C31.3953 48.9724 40 55 52 54C54 40.5 53 34.5 49.5 24.5Z"
        // fill={`hsl(var(--${fill}))`}
        fill={`hsl(var(--primary))`}
      />
      <path
        d="M0.5 56.5C0.5 80 8.5 93.5 30 108C41.715 94.7435 46.241 81.5301 51 57C37 57 28.5 50 25 43C17 52.5 10.5 56 0.5 56.5Z"
        fill={`hsl(var(--${fill}))`}
      />
      <path
        d="M71 43C68 50.5 63 54 54 57C48.0562 85.6509 45 94 33 108C66.5 103 81 75.5 81 48C76 48 74.5 46.5 71 43Z"
        fill={`hsl(var(--${fill}))`}
      />
    </svg>
  );
};

export default LogoSvg;
