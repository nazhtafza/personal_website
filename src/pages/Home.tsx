import { useState  } from "react";
import type {MouseEvent as ReactMouseEvent} from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaGithub, FaInstagram, FaBehance, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/nazhat-afza-zain-040050324",
      label: "Linkedin",
    },
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:nazhatzain1@gmail.com",
      label: "Email",
    },
  ];

  // --- STATE UNTUK EFEK 3D TILT ---
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Fungsi menghitung rotasi berdasarkan posisi mouse
  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();

    // Hitung posisi kursor relatif terhadap tengah elemen
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    const multiplier = 20; // Sensitivitas kemiringan
    const rotateX = (y / box.height) * -multiplier; // Rotasi sumbu X (atas/bawah)
    const rotateY = (x / box.width) * multiplier;    // Rotasi sumbu Y (kiri/kanan)

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 }); 
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-10">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi There!{" "}
            <span className="animate-wave inline-block origin-[70%_70%]">
              👋, I'm
            </span>
            <span className="text-blue-600 block mt-2 min-h-[1 em]">
              <Typewriter
                options={{
                  strings: [
                    "ZenSabbath",
                    "Part-time Developer",
                    "Full-time Deeplover",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>

          <p className="text-m md:text-l text-muted-foreground max-w-2xl mb-8 mt-6 leading-relaxed">
            Student of Universitas Muria Kudus with 1.5 years of UI/UX design
            experience who loves turning ideas into meaningful digital
            experiences. Now I’m expanding that passion by learning web
            development, mobile development, and machine learning to build
            smarter, more intuitive products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <Link to="/portfolio">
              <Button
                variant="gradient"
                size="xl"
                className="shadow-lg shadow-blue-500/20"
              >
                See Portfolio
              </Button>
            </Link>
            <Link to="/skills">
              <Button
                variant="outline"
                size="xl"
                className="backdrop-blur-sm bg-background/30">
                Get To Know Me
              </Button>
            </Link>
          </div>

          {/* Social Icons */}
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

        <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <div
            className="relative group max-w-xs md:max-w-md w-full"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1000px", 
            }}>
            <div
              className={`absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-2xl opacity-40 transition-all duration-500 group-hover:opacity-80 group-hover:blur-3xl`}
              style={{
                transform: isHovering
                  ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`
                  : "scale(0.95)",
                transition: isHovering ? "none" : "all 0.5s ease",
              }}/>

            {/* kontainer kanan*/}
            <div
              className="relative rounded-2xl border-4 border-white/10 overflow-hidden shadow-2xl bg-black aspect-4/5 md:aspect-square"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: isHovering ? "none" : "all 0.5s ease-out",
              }}>
              <img
                src="/profile.jpeg"
                alt="Nazhat Afza Zain"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;