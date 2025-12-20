const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-display font-medium text-primary tracking-wider">
              THE VISION
            </span>
          </div>

          {/* Main quote */}
          <blockquote className="mb-12">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6">
              "Figurative concept artworks, each piece symbolizing a 
              <span className="text-gradient-fire"> strong, unified force </span>
              moving with the inevitability and power of an 
              <span className="text-gradient-fire"> unstoppable wave of change.</span>"
            </p>
          </blockquote>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-3 h-3 rotate-45 border border-primary/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-fire-gold/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">Unique Identity</h3>
              <p className="text-sm text-muted-foreground">Each artwork carries its own distinctive power and character</p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-fire-gold/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">Unified Force</h3>
              <p className="text-sm text-muted-foreground">A community bound together by unstoppable momentum</p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-fire-gold/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">Wave of Change</h3>
              <p className="text-sm text-muted-foreground">Embodying transformation and inevitable progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
