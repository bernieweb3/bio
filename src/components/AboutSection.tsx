import { motion } from "framer-motion";
import { Lightbulb, Network, Zap } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Solve real problems",
    description: "Not just write code — build solutions that matter for real users and communities.",
  },
  {
    icon: Network,
    title: "Ecosystem integration",
    description: "Connected systems over isolated innovation. Every protocol should strengthen the whole.",
  },
  {
    icon: Zap,
    title: "Depth × Speed",
    description: "Deep architecture thinking, rapid execution. Quality and velocity aren't opposites.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entrepreneur × Engineer × Community Builder — driven by the belief
              that technology should empower, not complicate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground mb-5">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
