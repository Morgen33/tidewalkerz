import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/links';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/70 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean-cyan to-primary flex items-center justify-center glow-ocean">
            <span className="font-display font-bold text-primary-foreground text-lg">T</span>
          </div>
          <span className="font-display font-bold text-lg tracking-[0.28em] text-gradient-ocean hidden sm:block">
            TIDEWALKERZ
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          <a href="#markets" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">
            Markets
          </a>
          <a href="#about" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">
            Vision
          </a>
          <a href="#music" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">
            Music
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
          >
            Discord
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href={LINKS.tensor} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button variant="hero" size="sm">
              Tensor
            </Button>
          </a>
          <a href={LINKS.magicEden} target="_blank" rel="noopener noreferrer">
            <Button variant="mint" size="sm">
              Magic Eden
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
