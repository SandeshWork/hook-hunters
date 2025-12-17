import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjU4ODc0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Creative team collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTg3ODEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Business team meeting",
    },
    {
      url: "https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTkwNjE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Digital marketing workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjU4ODIyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Creative design studio",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % carouselImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <div
              className="inline-block px-4 py-1.5 rounded-full grain-bg text-sm"
              style={{
                backgroundColor: "var(--primary-lightest)",
                color: "var(--primary)",
              }}
            >
              Your Growth Partner
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              style={{ color: "var(--primary-darkest)" }}
            >
              Elevate Your Brand to New Heights
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We transform businesses through strategic
              marketing, creative design, and compelling
              storytelling. Let's build something remarkable
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3.5 rounded-lg grain-bg text-white transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-3.5 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                }}
              >
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center sm:text-left">
                <div
                  className="text-2xl sm:text-3xl"
                  style={{ color: "var(--primary)" }}
                >
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Projects Done
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="text-2xl sm:text-3xl"
                  style={{ color: "var(--primary)" }}
                >
                  200+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="text-2xl sm:text-3xl"
                  style={{ color: "var(--primary)" }}
                >
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Carousel Images */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 grain-bg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(69, 129, 142, 0.6) 0%, rgba(7, 13, 14, 0.8) 100%)",
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Carousel Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Element */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl grain-bg animate-float-reverse shadow-xl hidden sm:block"
              style={{
                backgroundColor: "var(--primary)",
                animationDelay: "1s",
              }}
            >
              <div className="flex flex-col items-center justify-center h-full text-white">
                <div className="text-3xl sm:text-4xl">5+</div>
                <div className="text-xs sm:text-sm mt-1">
                  Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}