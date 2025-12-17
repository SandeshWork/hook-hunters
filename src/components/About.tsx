import { Target, Zap, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is crafted to deliver measurable outcomes and exceed expectations.'
  },
  {
    icon: Zap,
    title: 'Innovative',
    description: 'We stay ahead of trends to bring you cutting-edge solutions that stand out.'
  },
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our success. We build lasting partnerships based on trust.'
  },
  {
    icon: TrendingUp,
    title: 'Growth-Oriented',
    description: 'We don\'t just maintain—we scale. Your growth is our primary mission.'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5NjMxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 grain-bg" style={{ backgroundColor: 'var(--primary)', opacity: 0.08 }}></div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 animate-float hidden sm:block">
              <div className="text-3xl sm:text-4xl" style={{ color: 'var(--primary)' }}>15M+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Ad Impressions</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full grain-bg text-sm mb-4" style={{ backgroundColor: 'var(--primary-lightest)', color: 'var(--primary)' }}>
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6" style={{ color: 'var(--primary-darkest)' }}>
                Crafting Success Stories Since 2020
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're a passionate team of marketers, designers, and storytellers dedicated to helping brands reach their full potential. Our holistic approach combines creativity with data-driven strategies to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to established enterprises, we've helped businesses across industries amplify their message and achieve remarkable growth.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-4 sm:p-6 rounded-xl grain-bg transition-all duration-300 hover:shadow-lg group" 
                  style={{ backgroundColor: 'var(--primary-lightest)' }}
                >
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--primary)' }} />
                  <h4 className="text-base sm:text-lg mb-2" style={{ color: 'var(--primary-darkest)' }}>
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
