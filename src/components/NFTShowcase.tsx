import heroImage from '@/assets/tidewalkerz-hero.jpg';

const NFTShowcase = () => {
  return (
    <div className="relative group">
      {/* Outer glow ring */}
      <div className="absolute -inset-4 bg-gradient-to-r from-fire-gold via-primary to-fire-orange rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow" />
      
      {/* Inner glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-fire-gold via-primary to-fire-orange rounded-xl opacity-50 blur-sm" />
      
      {/* Main image container */}
      <div className="relative overflow-hidden rounded-xl border-glow">
        <img
          src={heroImage}
          alt="TideWalkerz NFT - Figurative artwork of a powerful warrior with golden energy"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Shimmer overlay */}
        <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border-glow px-6 py-2 rounded-full">
        <span className="text-sm font-display text-gradient-fire font-bold tracking-wider">
          #001 / 1,100
        </span>
      </div>
    </div>
  );
};

export default NFTShowcase;
