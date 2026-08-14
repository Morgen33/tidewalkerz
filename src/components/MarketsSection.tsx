import { MagicEdenIcon, TensorIcon } from './BrandIcons';
import { LINKS } from '@/lib/links';

const MarketsSection = () => {
  return (
    <section id="markets" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-display tracking-[0.28em] text-primary mb-3">TRADE THE WAVE</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-3">
            Markets
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The collection is minted out. Grab a TideWalker on secondary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <a
            href={LINKS.magicEden}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group p-8 rounded-2xl flex items-center gap-5 hover:border-primary/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MagicEdenIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-display font-bold text-xl mb-1">Magic Eden</h3>
              <p className="text-sm text-muted-foreground">Buy, sell, and list TideWalkerz on Solana&apos;s flagship marketplace.</p>
            </div>
            <span className="hidden sm:inline-flex items-center justify-center h-9 rounded-md px-3 bg-secondary/80 border-2 border-primary/50 text-foreground font-display uppercase tracking-wider text-sm">
              Trade
            </span>
          </a>

          <a
            href={LINKS.tensor}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group p-8 rounded-2xl flex items-center gap-5 hover:border-primary/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TensorIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-display font-bold text-xl mb-1">Tensor</h3>
              <p className="text-sm text-muted-foreground">Sweep, bid, and trade with pro tools on Tensor.</p>
            </div>
            <span className="hidden sm:inline-flex items-center justify-center h-9 rounded-md px-3 bg-secondary/80 border-2 border-primary/50 text-foreground font-display uppercase tracking-wider text-sm">
              Trade
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
