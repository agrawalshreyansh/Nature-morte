export default function Landing() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633702737935-ca2740a5a537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoZXJpdGFnZSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA4ODUzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Indian Heritage Architecture"
          className="w-full h-full object-cover"
        ></img>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          SAAT SAATH <br /> ARTS FOUNDATION
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
          Fostering International Exchange Through Visual Arts
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
          Since 2010 | New Delhi, India
        </p>
      </div>
    </section>
  );
}
