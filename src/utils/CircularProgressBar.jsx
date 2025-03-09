const CircularProgressBar = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage } = props;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;
  const statusMessage = `${percentage}%`;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="fill-none stroke-progress-bg"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={`${
          statusMessage >= '70'
            ? 'stroke-progress-primary'
            : 'stroke-progress-secondary'
        } fill-progress-bg transition-all delay-200 ease-in`}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className={`${
          statusMessage >= '70'
            ? 'fill-progress-primary'
            : 'fill-progress-secondary'
        } text-base font-bold`}
      >
        {statusMessage}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
