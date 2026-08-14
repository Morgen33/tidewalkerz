import { Button } from '@/components/ui/button';
import { DiscordIcon, MagicEdenIcon, SpotifyIcon, TensorIcon, TidalIcon, XIcon } from './BrandIcons';
import { LINKS } from '@/lib/links';

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-primary/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-cyan to-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">T</span>
              </div>
              <span className="font-display font-bold tracking-wider text-gradient-ocean">
                TIDEWALKERZ
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An NFT collection on Solana founded by Blessed Sam.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.24em] text-primary mb-4">MARKETS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={LINKS.magicEden} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Magic Eden
                </a>
              </li>
              <li>
                <a href={LINKS.tensor} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Tensor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.24em] text-primary mb-4">MUSIC</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={LINKS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href={LINKS.tidal} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Tidal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.24em] text-primary mb-4">COMMUNITY</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @TideWalkerz
                </a>
              </li>
              <li>
                <a href={LINKS.founderTwitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Blessed Sam
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border/30">
          <p className="text-sm text-muted-foreground">© 2026 TideWalkerz. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="social" size="icon" aria-label="TideWalkerz on X">
                <XIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer">
              <Button variant="social" size="icon" aria-label="Join Discord">
                <DiscordIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href={LINKS.magicEden} target="_blank" rel="noopener noreferrer">
              <Button variant="social" size="icon" aria-label="Magic Eden">
                <MagicEdenIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href={LINKS.tensor} target="_blank" rel="noopener noreferrer">
              <Button variant="social" size="icon" aria-label="Tensor">
                <TensorIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href={LINKS.spotify} target="_blank" rel="noopener noreferrer">
              <Button variant="social" size="icon" aria-label="Spotify">
                <SpotifyIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href={LINKS.tidal} target="_blank" rel="noopener noreferrer">
              <Button variant="social" size="icon" aria-label="Tidal">
                <TidalIcon className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <a href={LINKS.magicEden} target="_blank" rel="noopener noreferrer">
            <Button variant="mint" size="lg">
              Trade on Magic Eden
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
