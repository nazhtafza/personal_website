import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowUpRight, Eye, Calendar, Folder } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface Project {
  id: number;
  category: string;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "Website Desa Ngemplak",
    year: "Desember 2024 - Januari 2025",
    description: "Platform manajemen toko online dengan fitur analitik real-time, manajemen inventaris, dan mode gelap. Dibangun dengan fokus pada performa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Figma", "Figjam", "Maze", "Notion"],
    demoUrl: "https://desangemplak.com/",
    repoUrl: "#",
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "Saewooden Website",
    year: "Januari 2025 - Maret 2025",
    description: "Platform manajemen toko online dengan fitur analitik real-time, manajemen inventaris, dan mode gelap. Dibangun dengan fokus pada performa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Figma", "Figjam", "Maze", "Notion"],
    demoUrl: "https://www.saedarpagroup.com/",
    repoUrl: "#",
  },
  {
    id: 3,
    category: "Wordpress Development",
    title: "Zethink Creative",
    year: "Januari 2025 - Maret 2025",
    description: "Platform manajemen toko online dengan fitur analitik real-time, manajemen inventaris, dan mode gelap. Dibangun dengan fokus pada performa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Figma", "Figjam", "Elementor", "Canva"],
    demoUrl: "https://zethinkcreative.ciptaedukasinesia.com/",
    repoUrl: "#",
  },
  {
    id: 4,
    category: "Website Development",
    title: "Selfie Photobox - Fun Project",
    year: "November 2025",
    description: "Platform manajemen toko online dengan fitur analitik real-time, manajemen inventaris, dan mode gelap. Dibangun dengan fokus pada performa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Vite", "React", "Typescript"],
    demoUrl: "https://cekrek-k6uk.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 5,
    category: "Website Development",
    title: "Inventaris Bengkel SMK Lemuria",
    year: "November 2025",
    description: "Platform manajemen toko online dengan fitur analitik real-time, manajemen inventaris, dan mode gelap. Dibangun dengan fokus pada performa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["PHP", "Laravel", "MySQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 6,
    category: "Website Development",
    title: "ZeroWasteCycle App",
    year: "November 2025",
    description: "Platform manajemen toko online dengan fitur analitik real-time, manajemen inventaris, dan mode gelap. Dibangun dengan fokus pada performa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Vite", "React", "Typescript", "Supabase"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-background">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Project
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A personal project showcasing my skills in UI/UX design and ongoing
          development in website and mobile development technologies
        </p>
      </div>

      {/* Grid Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="group flex flex-col h-full overflow-hidden border-muted/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
            style={{ animationDelay: `${index * 100}ms` }}>
            {/* Image Thumbnail */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  onClick={() => setSelectedProject(project)}>
                  View Details
                </Button>
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal px-2 py-0.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <CardDescription className="text-sm leading-relaxed line-clamp-3">
                {project.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="flex gap-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2"
                onClick={() => setSelectedProject(project)}>
                <Eye className="w-4 h-4" /> View Project
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="w-full gap-2"
                asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <Globe className="w-4 h-4" /> Demo{" "}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* sidebar */}
      <Sheet
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}>
        <SheetContent
          side="right"
          
          className="overflow-y-auto h-[calc(1o0vh-1rem)] p-4 sm:h-[calc(100vh-1.5rem)] rounded-xl border border-border shadow-2xl bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          {selectedProject && (
            <div className="flex flex-col gap-6 mt-4">
             
              <div className="rounded-xl overflow-hidden shadow-sm border aspect-video bg-muted">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-fill"/>
              </div>

              <SheetHeader className="text-left space-y-4">
                <div className="flex flex-col gap-2">
                  <Badge
                    variant="outline"
                    className="w-fit flex items-center gap-1.5 px-3 py-1">
                    <Folder className="w-3.5 h-3.5" />
                    {selectedProject.category}
                  </Badge>

                  <SheetTitle className="text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-400 leading-tight">
                    {selectedProject.title}
                  </SheetTitle>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedProject.year}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-2.5 py-0.5 text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </SheetHeader>

              <div className="my-2 border-b" />

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                  About Project
                </h3>
                <SheetDescription className="text-base text-foreground/90 leading-relaxed text-justify">
                  {selectedProject.description}
                </SheetDescription>
              </div>

              <div className="flex flex-col gap-3 mt-6 pt-2">
                <Button size="lg" className="w-full gap-2 shadow-md" asChild>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer">
                    <Globe className="w-4 h-4" /> Open Live Demo
                  </a>
                </Button>

                {selectedProject.repoUrl !== "#" && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full gap-2"
                    asChild>
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noreferrer">
                      <Github className="w-4 h-4" /> View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Portfolio;