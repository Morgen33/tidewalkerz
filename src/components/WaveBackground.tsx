const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep ocean gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ocean-deep to-background" />
      
      {/* Animated waves container */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh]">
        {/* Wave 1 - Slowest, back layer */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-20">
          <svg
            className="w-full h-full animate-wave-slow"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="hsl(var(--ocean-wave))"
              d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Wave 2 - Medium speed */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-30">
          <svg
            className="w-full h-full animate-wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ animationDelay: '-2s' }}
          >
            <path
              fill="hsl(var(--primary) / 0.3)"
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,202.7C672,224,768,256,864,261.3C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Wave 3 - Fastest, front layer */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-40">
          <svg
            className="w-full h-full animate-wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ animationDelay: '-4s' }}
          >
            <path
              fill="hsl(var(--fire-orange) / 0.2)"
              d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,224C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Glowing wave crest */}
        <div className="absolute bottom-[30%] left-0 w-[200%] h-full opacity-50">
          <svg
            className="w-full h-full animate-wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ animationDelay: '-3s' }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--fire-gold))" stopOpacity="0.6" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--fire-orange))" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Radial glow from center bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-radial from-primary/20 via-transparent to-transparent" 
           style={{ background: 'radial-gradient(ellipse at center bottom, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }} />
      
      {/* Particle effects - floating embers */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaveBackground;
