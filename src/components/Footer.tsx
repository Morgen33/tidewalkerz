import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="relative py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-cyan to-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">T</span>
              </div>
              <span className="font-display font-bold tracking-wider text-gradient-ocean">
                TIDEWALKERZ
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TideWalkerz. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/TideWalkerz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="social" size="icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
            </a>
            <a 
              href="https://twitter.com/Blessedsam080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="social" size="sm">
                @Blessedsam080
              </Button>
            </a>
          </div>

          {/* Mint CTA */}
          <a 
            href="https://launchmynft.io/collections/7xmiZJjReKvmzcFZy2EFUhknLmtYyHugz8hSMNDvuvcx/RiXjb9QcqNU3E6uJFKn6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="mint" size="lg">
              Mint on LaunchMyNFT
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;