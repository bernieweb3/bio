import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "GomGom",
    chain: "Lisk",
    description: "Lisk's loyalty program and lending protocol based on loyalty history of users",
    tech: ["Lisk SDK", "React"],
    github: "https://github.com/bernieweb3/gomgom",
    mvp: "https://gomgom.vercel.app/",
    status: "MVP",
  },
  {
    name: "BanhMiCast",
    chain: "ETH Sepolia + Chainlink Runtime Environment",
    description: "Decentralized prediction market platform with LMSR Patch Compute and improved encrypt-decrytp mechanism",
    tech: ["Solidity", "CRE", "Next.js", "Wagmi"],
    github: "https://github.com/bernieweb3/banhmicast",
    mvp: "https://banhmicast.sotaworks.co/",
    status: "MVP",
  },
  {
    name: "Sui Total CLI",
    chain: "Sui",
    description: "Developer tooling for Sui blockchain: deploy, query, and manage resources via CLI",
    tech: ["Move", "Rust", "CLI", "TypeScript"],
    github: "https://github.com/bernieweb3/sui-total-cli",
    mvp: null,
    status: "Tool",
  },
  {
    name: "StatsCopilot",
    chain: "Web2",
    description: "AI-powered analytics copilot for data-driven decision making",
    tech: ["Hono", "React", "Python", "ML"],
    github: "https://github.com/bernieweb3/sota-statworks",
    mvp: "https://stat.sotaworks.co/",
    status: "MVP",
  },
  {
    name: "HackOn Agent",
    chain: "AI Agent Infra",
    description: "Decentralized AI agent network leveraging idle compute for privacy-focused, distributed AI without centralized cloud",
    tech: ["llama.cpp", "Electron", "React", "sql.js", "libp2p", "Fastify", "Supabase"],
    github: "https://github.com/hackonteam/hackonagent",
    mvp: null,
    status: "OSS",
  },
  {
    name: "FloodShield",
    chain: "Solana",
    description: "On-chain disaster response coordination protocol for climate resilience",
    tech: ["Anchor", "Solana", "React", "TypeScript"],
    github: "https://github.com/bernieweb3/floodshield",
    mvp: "https://floodshield.sotaworks.co/",
    status: "MVP",
  },
];

const chainColors: Record<string, string> = {
  Lisk: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "ETH Sepolia + Chainlink Runtime Environment": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Sui: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  Web2: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  Solana: "bg-violet-500/10 text-violet-600 border-violet-500/20",
  "AI Agent Infra": "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building across chains — from DeFi aggregation to disaster response
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full border ${chainColors[project.chain] || ""}`}
                >
                  {project.chain}
                </span>
                <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-secondary rounded">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  aria-label={`${project.name} GitHub repository`}
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.mvp && (
                  <a
                    href={project.mvp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                    aria-label={`${project.name} live demo`}
                  >
                    <ExternalLink size={16} />
                    Live MVP
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
