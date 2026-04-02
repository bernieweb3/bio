import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Send } from "lucide-react";

const contacts = [
  {
    icon: Send,
    label: "Telegram",
    handle: "@iambernieweb3",
    href: "https://t.me/iambernieweb3",
  },
  {
    icon: MessageCircle,
    label: "X / Twitter",
    handle: "@iambernieweb3",
    href: "https://x.com/iambernieweb3",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "bernieweb3",
    href: "https://www.linkedin.com/in/bernieweb3/",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "bernieweb3",
    href: "https://github.com/bernieweb3",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open to collaboration, hackathon teams, and interesting conversations about Web3.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-3 bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
              aria-label={`Contact via ${c.label}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                <c.icon size={20} />
              </div>
              <span className="text-sm font-semibold text-foreground">{c.label}</span>
              <span className="text-xs font-mono text-muted-foreground">{c.handle}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
