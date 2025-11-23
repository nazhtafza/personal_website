import { Button } from "@/components/ui/button";
import { href, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaGithub, FaInstagram, FaBehance, FaLinkedin, FaLink } from "react-icons/fa";

const Home = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/nazhtzain",
      label: "Github",
    },
    {
      icon: <FaInstagram size={24} />,
      href: "https://instagram.com/nazhatzainn",
      label: "Instagram",
    },
    {
      icon: <FaBehance size={24} />,
      href: "https://www.behance.net/nazhatafzazain1",
      label: "Behance",
    },
    {
        icon: <FaLinkedin size={24}/>,
        href:"https://www.linkedin.com/in/nazhat-afza-zain-040050324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnu6CaSsrNElGrASaj_hf0dW7d13mGCBthrtehP9F2e_IQL88wILJD_Zaubzo_aem_yRrSFEbu5prgn2KtB2_sZw",
        label:"Linkedin",
    },
  ];

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">

      <div className="relative z-10 flex flex-col items-center text-center px-4">
    
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi There! <span className="animate-wave inline-block origin-[70%_70%]">👋, I'm</span>
          <span className="text-blue-600 inline-block mt-2 min-h-[1.2em] ml-2">
            <Typewriter
              options={{
                strings: ["ZenSabbath", "Part-time Developer", "Full-time Deeplover"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        <p className="text-l md:text-xl text-muted-foreground max-w-4xl mb-8">
        Student of Universitas Muria Kudus with 1.5 years of UI/UX design experience who loves turning ideas into meaningful digital experiences.
        Now I’m expanding that passion by learning web development, mobile development, and machine learning to build smarter, more intuitive products.
        </p>
        
        <div className="flex gap-4 mb-10">
          <Link to="/portfolio">
            <Button variant="gradient" size="xl" className="shadow-lg shadow-blue-500/20">
              See Portfolio
            </Button>
          </Link>
          <Link to="/skills">
            <Button variant="outline" size="xl" className="backdrop-blur-sm bg-background/30">
              Get To Know Me
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;