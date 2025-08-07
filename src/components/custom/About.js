import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Video from "./Video";

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Responsive Design",
    "UI/UX Design",
    "Performance Optimization",
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col  gap-12 items-center">
        <div className="flex">
          {/* replace with the INtroduction url */}
          <Video />
        </div>
        <h2 className="h2">What we Offers</h2>

        <Card className="border-0 shadow-none bg-transparent max-w-6xl text-center">
          <CardContent className="p-0 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I am a passionate web developer embarking on an exciting
              freelancing journey. While this marks my beginning in the
              freelance world, my dedication to creating exceptional digital
              experiences is anything but novice.
            </p>

            <p className="text-muted-foreground">
              I specialize in building modern, responsive websites and web
              applications that not only look stunning but also deliver
              exceptional user experiences. My approach combines technical
              expertise with creative problem-solving to bring your vision to
              life.
            </p>

            <p className="text-muted-foreground">
              As I start this new chapter, I am bringing fresh perspectives,
              cutting-edge skills, and an unwavering commitment to client
              satisfaction. Every project is an opportunity to create something
              remarkable together.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
