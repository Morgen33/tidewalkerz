import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fire-gold to-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-lg">T</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-gradient-fire hidden sm:block">
            TIDEWALKERZ
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collection" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Collection
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            About
          </a>
          <a 
            href="https://twitter.com/TideWalkerz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Twitter
          </a>
        </nav>

        {/* CTA */}
        <a 
          href="https://launchmynft.io/collections/7xmiZJjReKvmzcFZy2EFUhknLmtYyHugz8hSMNDvuvcx/RiXjb9QcqNU3E6uJFKn6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="mint" size="sm">
            Mint Now
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
