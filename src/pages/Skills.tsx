import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillsData = {
  uiux: ["Design Thinking", "UI Design", "UX Research"],
  frontend: ["React", "TypeScript", "Tailwind CSS", "Dart", "Flutter"],
  machinelearning: ["Python", "Scikit-learn", "Tensorflow"],
  tools: ["Git", "Figma", , "Canva", "VS Code", "Google Colab"]
};

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8">Tech Stack & Skills</h2>

      <div className="space-y-8">
      <div>
          <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
          <Separator className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {skillsData.uiux.map(skill => (
              <Badge key={skill} variant="secondary" className="text-md py-1 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
          <Separator className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {skillsData.frontend.map(skill => (
              <Badge key={skill} variant="secondary" className="text-md py-1 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
          <Separator className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {skillsData.machinelearning.map(skill => (
              <Badge key={skill} variant="outline" className="text-md py-1 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tools & Others</h3>
          <Separator className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {skillsData.tools.map(skill => (
              <Badge key={skill} className="text-md py-1 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
