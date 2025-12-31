import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, Megaphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Stunning visual identities that make your brand unforgettable.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    description: "Data-driven strategies to boost your online visibility and growth.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Campaigns that connect with your audience and drive results.",
  },
  {
    icon: Globe,
    title: "Social Media",
    description: "Engaging content strategies that build communities.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline your operations with intelligent automation solutions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What We Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive solutions to elevate your digital presence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card p-6 group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
