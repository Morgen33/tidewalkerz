import { Button } from '@/components/ui/button';
import NFTShowcase from './NFTShowcase';
import WaveBackground from './WaveBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <WaveBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-20 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Solana NFT Collection
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-gradient-ocean glow-text">TIDE</span>
              <br />
              <span className="text-foreground">WALKERZ</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              1,100 figurative artworks embodying a unified force, moving with the 
              <span className="text-primary font-semibold"> inevitability and power </span>
              of an unstoppable wave of change.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-gradient-ocean">1,100</div>
                <div className="text-sm text-muted-foreground">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-foreground">Unique</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-foreground">SOL</div>
                <div className="text-sm text-muted-foreground">Blockchain</div>
              </div>
            </div>

            {/* CTAs - Fixed layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://launchmynft.io/collections/7xmiZJjReKvmzcFZy2EFUhknLmtYyHugz8hSMNDvuvcx/RiXjb9QcqNU3E6uJFKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="mint" size="xl" className="w-full">
                  Mint Your TideWalker
                </Button>
              </a>
              <a 
                href="https://twitter.com/TideWalkerz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="hero" size="xl" className="w-full">
                  Join Community
                </Button>
              </a>
            </div>

            {/* Founder credit */}
            <div className="mt-10 pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Created by{' '}
                <a 
                  href="https://twitter.com/Blessedsam080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  @Blessedsam080
                </a>
              </p>
            </div>
          </div>

          {/* Right - NFT Showcase */}
          <div className="relative z-10 order-1 lg:order-2 flex justify-center animate-float">
            <div className="w-full max-w-md lg:max-w-lg">
              <NFTShowcase />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;