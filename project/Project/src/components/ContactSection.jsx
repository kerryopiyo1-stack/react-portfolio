import { SOCIAL_LINKS } from "../data";

/**
 * Contact Section Component
 * 
 * Displays social media links where people can reach out.
 * Each link opens in a new tab when clicked.
 */
function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Connect with us on social media. We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center py-8 px-4 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
              style={{ background: "rgba(255,255,255,0.05)", textDecoration: "none" }}
            >
              <div className={`p-4 rounded-full bg-gradient-to-br ${social.gradient} shadow-lg transition-transform group-hover:scale-110`}>
                <div className="w-7 h-7 text-white flex items-center justify-center font-bold text-lg">
                  {social.name[0]}
                </div>
              </div>
              <p className="mt-4 text-gray-200 font-medium text-sm group-hover:text-white transition-colors">{social.name}</p>
              <p className="text-gray-400 text-xs mt-1">{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection
