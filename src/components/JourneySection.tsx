import { motion } from "framer-motion";
import { Award, Briefcase, Code, Trophy } from "lucide-react";

const milestones = [
  {
    icon: Trophy,
    title: "APEC Innovation Season 2",
    subtitle: "Semi-finalist with Thực Lực Số",
    date: "March 2026",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Briefcase,
    title: "CommandOSS Internship",
    subtitle: "Full-time Hybrid",
    date: "Febuary - May 2026",
    accent: "from-primary to-accent",
  },
  {
    icon: Code,
    title: "Joined in LotusHack Hackathon 2026",
    subtitle: "Mar 20–22, 2026",
    date: "March 2026",
    accent: "from-pink-500 to-rose-500",
  },
  {
    icon: Award,
    title: "Aiming for CommandOSS Hacker House 2026",
    subtitle: "Building on-chain developer tooling",
    date: "May 2026",
    accent: "from-cyan-500 to-blue-500",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Journey & Recognition
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones on the path of building in Web3
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-primary-foreground shadow-lg`}>
                  <m.icon size={20} />
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 bg-card rounded-2xl border border-border p-5 shadow-card ${
                  i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right md:max-w-[calc(50%-3rem)]" : "md:ml-auto md:pl-8 md:max-w-[calc(50%-3rem)]"
                }`}
              >
                <span className="text-xs font-mono text-muted-foreground">{m.date}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
