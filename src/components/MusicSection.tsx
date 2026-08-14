import { SpotifyIcon, TidalIcon } from './BrandIcons';
import { LINKS } from '@/lib/links';

const MusicSection = () => {
  return (
    <section id="music" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-display tracking-[0.28em] text-primary mb-3">THE SOUND</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-3">
            Music by Blessed Sam
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The founder is also an artist. Stream the wave on Spotify and Tidal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group p-8 rounded-2xl hover:border-[#1DB954]/50 transition-colors"
          >
            <SpotifyIcon className="w-10 h-10 text-[#1DB954] mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-xl mb-2">Spotify</h3>
            <p className="text-sm text-muted-foreground mb-6">Listen to Blessed Sam on Spotify.</p>
            <span className="inline-flex items-center justify-center h-9 rounded-md px-3 bg-secondary/80 border-2 border-primary/50 text-foreground font-display uppercase tracking-wider text-sm">
              Open Spotify
            </span>
          </a>

          <a
            href={LINKS.tidal}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group p-8 rounded-2xl hover:border-foreground/40 transition-colors"
          >
            <TidalIcon className="w-10 h-10 text-foreground mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-xl mb-2">Tidal</h3>
            <p className="text-sm text-muted-foreground mb-6">Hi-fi listening at tidal.com/@blessedsam.</p>
            <span className="inline-flex items-center justify-center h-9 rounded-md px-3 bg-secondary/80 border-2 border-primary/50 text-foreground font-display uppercase tracking-wider text-sm">
              Open Tidal
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
