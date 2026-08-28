import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/identity/About';
import { Education } from '@/components/identity/Education';
import { SkillConstellation } from '@/components/skills/SkillConstellation';
import { Journey } from '@/components/journey/Journey';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { AILab } from '@/components/labs/AILab';
import { QuantLab } from '@/components/labs/QuantLab';
import { ArchitectureLab } from '@/components/labs/ArchitectureLab';
import { Bookshelf } from '@/components/writing/Bookshelf';
import { GitHubSection } from '@/components/github/GitHubSection';
import { Contact } from '@/components/contact/Contact';
import { ThreeBackground3D } from '@/components/three/ThreeBackground3D';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <ThreeBackground3D />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <SkillConstellation />
      <Journey />
      <ProjectGrid />
      <AILab />
      <QuantLab />
      <ArchitectureLab />
      <Bookshelf />
      <GitHubSection />
      <Contact />
    </main>
  );
}
