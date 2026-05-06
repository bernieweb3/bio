import { motion } from "framer-motion";
import { Award, Briefcase, Code, Rocket, Trophy, Users, Sprout, Leaf } from "lucide-react";

const milestones = [
  {
    icon: Trophy,
    title: "Top 8 Track \"Build on Algorand\" - Algorand Vietnam Hackathon 2024",
    subtitle: "First major hackathon milestone",
    date: "Oct - Nov 2024",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Trophy,
    title: "Top 10 Finalist - Web3 & AI Ideathon 2025",
    subtitle: "Hosted by VBI Academy × GFI Ventures × DOST HCMC. Leader of NFT Lending project Alt30",
    date: "March 2025",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Trophy,
    title: "Top 8 Finalist - SEA Ideathon 2025",
    subtitle: "Hosted by SciLabs × VNST × vBTC. NFT Lending project Mosaical (rebranded from Alt30)",
    date: "April 2025",
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Runner-up - TLS-Innovation 2025",
    subtitle: "Leader of Achievo with DevPros team",
    date: "May - Jun 2025",
    accent: "from-yellow-500 to-amber-500",
  },
  {
    icon: Sprout,
    title: "Top 30 - Startup Zone 2025",
    subtitle: "Leader of DeGreenSci project",
    date: "August 2025",
    accent: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    title: "2nd Place Hackathon - Sui Bootcamp HCMC 2025",
    subtitle: "Leader of Orlim - limit order manager on Sui",
    date: "November 2025",
    accent: "from-cyan-500 to-sky-500",
  },
  {
    icon: Leaf,
    title: "Top 4 - Greenbio Global Idea Bridge Lab 2025",
    subtitle: "Technical member of Mekong Doctor project",
    date: "January 2026",
    accent: "from-lime-500 to-green-500",
  },
  {
    icon: Briefcase,
    title: "Software Engineer Intern at CommandOSS",
    subtitle: "Backend developer for a Mysten Labs project",
    date: "Feb - May 2026",
    accent: "from-primary to-accent",
  },
  {
    icon: Trophy,
    title: "Semi-finalist - APEC Innovation Season 2",
    subtitle: "Leader of Thực Lực Số (evolved from Achievo)",
    date: "Feb - Mar 2026",
    accent: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "LotusHack Hackathon 2026",
    subtitle: "Leader of SOTA StatWorks project",
    date: "March 2026",
    accent: "from-pink-500 to-rose-500",
  },
  {
    icon: Rocket,
    title: "New chapter begins",
    subtitle: "Sharpening fundamentals, considering the 2026 high school graduation exam as an independent candidate, building a robot-based sales software with HackOn Team, joining a startup as backend developer, and shipping personal products to level up",
    date: "From May 8, 2026",
    accent: "from-indigo-500 to-blue-500",
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
