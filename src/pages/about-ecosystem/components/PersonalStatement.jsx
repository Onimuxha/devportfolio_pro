import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalStatement = () => {
  return (
    <div className="glass-effect rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon name="User" size={24} className="text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">About Me</h2>
      </div>

      <div className="space-y-6">
        <p className="text-text-secondary leading-relaxed text-lg">
          I'm a passionate full-stack developer who believes that great software is born from the intersection of 
          technical excellence and human-centered design. With over 5 years of experience crafting digital solutions, 
          I've learned that the most impactful code doesn't just work—it tells a story, solves real problems, and 
          creates meaningful experiences for users.
        </p>

        <p className="text-text-secondary leading-relaxed">
          My journey began with a curiosity about how things work under the hood, which led me to explore everything 
          from frontend frameworks to backend architectures, cloud infrastructure to database optimization. Today, 
          I specialize in React ecosystems and Node.js applications, but I'm always eager to dive into emerging technologies that can push the boundaries of what's possible.
        </p>

        <div className="bg-surface/50 rounded-xl p-6 border-l-4 border-primary">
          <div className="flex items-start gap-3">
            <Icon name="Quote" size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium italic mb-2">
                "Code is poetry written in logic. Every function, every component, every line should serve a purpose 
                and contribute to a larger narrative of problem-solving and innovation."
              </p>
              <p className="text-text-secondary text-sm">— My development philosophy</p>
            </div>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed">
          When I'm not coding, you'll find me exploring the latest in AI and machine learning, contributing to 
          open-source projects, or mentoring junior developers. I believe in the power of community and knowledge 
          sharing—some of my most valuable learning experiences have come from collaborating with talented 
          individuals who challenge me to think differently.
        </p>
      </div>
    </div>
  );
};

export default PersonalStatement;