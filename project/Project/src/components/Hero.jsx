/**
 * Hero Section Component
 * 
 * This is the big welcome section at the top of the page.
 * It displays the main heading and a brief introduction.
 */
function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
        Welcome to Our<br />Creative Portfolio
      </h1>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Explore our collection of innovative projects — from brand identities and digital experiences to motion graphics and beyond.
      </p>
    </section>
  );
}

export default Hero