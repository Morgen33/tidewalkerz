const ITEMS = ['TIDEWALKERZ', '1,100', 'SOLANA', 'WAVE OF CHANGE', 'BLESSED SAM'];

const MarqueeRow = () => (
  <div className="flex shrink-0">
    {ITEMS.map((item) => (
      <span
        key={item}
        className="font-display text-xs sm:text-sm tracking-[0.35em] text-primary/80 px-6 whitespace-nowrap"
      >
        {item}
        <span className="text-primary/40 ml-6">◆</span>
      </span>
    ))}
  </div>
);

const WaveMarquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-primary/20 bg-primary/5 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        <MarqueeRow />
        <MarqueeRow />
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
};

export default WaveMarquee;
