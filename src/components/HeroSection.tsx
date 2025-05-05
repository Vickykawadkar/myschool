"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center text-center gap-8 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Learn with
          <br />
          <span className="text-primary">
            <TypeAnimation
              sequence={[
                "Experts",
                1000,
                "Ease",
                1000,
                "Speed",
                1000,
                "Confidence",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl text-muted-foreground"
        >
          CourseHub is your one-stop destination to find, manage, and succeed
          with high-quality online courses tailored for your growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/courses">
            <Button size="lg">Browse Courses</Button>
          </Link>
          <Link href="/signup">
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
