import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import codeBefore from "@/assets/code-before.png";
import landingAfter from "@/assets/landing-after.png";

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
            <span className="gradient-text">From Code to Conversion</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We transform complex code into stunning, high-converting landing pages that elevate your brand. Hover to compare.
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
              firstImage={codeBefore}
              secondImage={landingAfter}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-center"
              className="h-[300px] w-[280px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[650px]"
              slideMode="hover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              Before: Raw Code
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              After: Polished Design
            </span>
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
