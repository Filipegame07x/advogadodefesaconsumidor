const LaserDivider = () => {
  return (
    <div style={{
      width: '100%',
      height: '1px',
      position: 'relative',
      background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      boxShadow: '0 0 10px var(--accent), 0 0 20px var(--accent)',
      opacity: 0.6,
      margin: '2rem 0',
      zIndex: 10
    }} />
  );
};

export default LaserDivider;
