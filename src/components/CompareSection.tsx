import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";

export const CompareSection = () => {
  return (
    <section id="work" className="py-24 relative section-glow">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See the Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We transform problems into elegant solutions. Hover to compare.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="p-4 border rounded-3xl bg-card/50 border-border/50 px-4">
            <Compare
              firstImage="https://assets.aceternity.com/code-problem.png"
              secondImage="https://assets.aceternity.com/code-solution.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[300px] w-[280px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[700px]"
              slideMode="hover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <div className="font-display text-4xl font-bold gradient-text">200+</div>
            <p className="text-muted-foreground text-sm">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold gradient-text">98%</div>
            <p className="text-muted-foreground text-sm">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold gradient-text">5+</div>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
