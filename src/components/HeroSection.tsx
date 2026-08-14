import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import NFTShowcase from './NFTShowcase';
import InteractiveWaveShader from '@/components/ui/flowing-waves-shader';
import { MagicEdenIcon, TensorIcon } from './BrandIcons';
import { LINKS } from '@/lib/links';
import { gsap, useGSAP } from '@/lib/gsap';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.hero-kicker', { y: 16, autoAlpha: 0, duration: 0.5 })
          .from('.hero-title span', { y: 48, autoAlpha: 0, stagger: 0.12, duration: 0.8 }, '-=0.2')
          .from('.hero-copy', { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.4')
          .from('.hero-stat', { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.5 }, '-=0.35')
          .from('.hero-cta', { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.5 }, '-=0.3')
          .from('.hero-founder', { y: 12, autoAlpha: 0, duration: 0.5 }, '-=0.25')
          .from('.hero-art', { x: 40, autoAlpha: 0, duration: 0.9 }, 0.15);
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative flex items-center justify-center overflow-hidden pt-24 pb-6 lg:pt-28 lg:pb-8"
    >
      <InteractiveWaveShader dimmingDisabled />
      <div className="absolute inset-0 bg-background/45 z-[1]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)/0.7)_100%)]" />

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative z-20 text-center lg:text-left order-2 lg:order-1">
            <div className="hero-kicker inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-display tracking-[0.22em] text-primary">
                1,100 ON SOLANA
              </span>
            </div>

            <h1 className="hero-title font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-5 leading-[0.9] tracking-tight">
              <span className="block text-gradient-ocean glow-text">TIDE</span>
              <span className="block text-foreground">WALKERZ</span>
            </h1>

            <p className="hero-copy text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Figurative artworks embodying a unified force, moving with the
              <span className="text-primary font-semibold"> inevitability and power </span>
              of an unstoppable wave of change.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="hero-stat text-center">
                <div className="font-display font-bold text-3xl text-gradient-ocean">1,100</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Supply</div>
              </div>
              <div className="hero-stat text-center">
                <div className="font-display font-bold text-3xl text-foreground">Unique</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Artworks</div>
              </div>
              <div className="hero-stat text-center">
                <div className="font-display font-bold text-3xl text-foreground">SOL</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Chain</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-3">
              <a href={LINKS.mint} target="_blank" rel="noopener noreferrer" className="hero-cta w-full sm:w-auto">
                <Button variant="mint" size="xl" className="w-full">
                  Mint Your TideWalker
                </Button>
              </a>
              <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="hero-cta w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full">
                  Join Community
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href={LINKS.magicEden} target="_blank" rel="noopener noreferrer" className="hero-cta w-full sm:w-auto">
                <Button variant="social" size="lg" className="w-full">
                  <MagicEdenIcon className="w-4 h-4" />
                  Magic Eden
                </Button>
              </a>
              <a href={LINKS.tensor} target="_blank" rel="noopener noreferrer" className="hero-cta w-full sm:w-auto">
                <Button variant="social" size="lg" className="w-full">
                  <TensorIcon className="w-4 h-4" />
                  Tensor
                </Button>
              </a>
            </div>

            <p className="hero-founder mt-7 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              An NFT Collection on Solana Founded by{' '}
              <a
                href={LINKS.founderTwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                Blessed Sam
              </a>
            </p>
          </div>

          <div className="hero-art relative z-10 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg animate-float">
              <NFTShowcase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
