import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Me", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
              <span className="text-xl font-bold text-white">
                Josefina<span className="text-purple-400">.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Strategic HR consulting for startups, tech companies, and modern
              professionals across LATAM and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:josefina@example.com"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <Mail size={16} />
                josefina@example.com
              </a>
              <a
                href="https://www.linkedin.com/in/josefina-saenz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn Profile
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Josefina Saenz. All rights
            reserved.
          </p>
          <p className="text-xs">
            Designed with purpose. Built for results.
          </p>
        </div>
      </div>
    </footer>
  );
}
