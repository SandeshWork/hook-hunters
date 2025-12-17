import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative rounded-3xl overflow-hidden grain-bg" style={{ backgroundColor: 'var(--primary)' }}>
          <div className="relative py-12 sm:py-20 px-6 sm:px-12 lg:px-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-20 animate-float hidden sm:block" style={{ backgroundColor: 'white' }}></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-20 animate-float-reverse hidden sm:block" style={{ backgroundColor: 'white', animationDelay: '1s' }}></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <div className="flex justify-center">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-pulse" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                Ready to Transform Your Brand?
              </h2>
              
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Let's discuss how we can help you achieve your marketing goals and drive real results for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3.5 rounded-lg bg-white text-[var(--primary)] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center group"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-3.5 rounded-lg border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-[var(--primary)] hover:scale-105"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
