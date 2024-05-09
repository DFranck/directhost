const StonksSvg = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.55 22.6"
      className={className}
      fill={`hsl(var(--${fill}))`}
    >
      <path
        className="cls-1"
        d="M0,13.94c.08-.07.16-.14.24-.21,3.12-3.17,6.24-6.34,9.36-9.51.07-.08.14-.16.22-.26,1.23,1.28,2.43,2.52,3.64,3.78,2.08-1.99,4.15-3.97,6.22-5.96-.59-.58-1.16-1.16-1.79-1.78h4.66v4.55c-.53-.53-1.07-1.08-1.64-1.64-2.53,2.42-5.01,4.8-7.51,7.19-1.2-1.25-2.38-2.48-3.59-3.73-2.87,2.92-5.74,5.83-8.63,8.77-.4-.38-.8-.76-1.19-1.14,0-.02,0-.03,0-.05Z"
      />
      <path className="cls-1" d="M17.2,22.6V7.66h5.35v14.93h-5.35Z" />
      <path className="cls-1" d="M9.71,22.6v-9.95h5.36v9.95h-5.36Z" />
      <path className="cls-1" d="M7.59,22.6H2.23v-7.56h5.36v7.56Z" />
    </svg>
  );
};

export default StonksSvg;
