import { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const stats = [
  { number: 25, suffix: '+', label: 'Years in Business', sublabel: 'Serving West Africa since 2000' },
  { number: 20000, suffix: '+', label: 'Units Supplied', sublabel: 'Ladders & scaffolding delivered' },
  { number: 8, suffix: '+', label: 'Countries Served', sublabel: 'Nigeria, Ghana, Benin, Togo & more' },
  { number: 500, suffix: '+', label: 'Contractors Supplied', sublabel: 'Trusted by professionals' },
];

function StatCounter({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <AnimatedSection delay={index * 0.15} className="text-center px-4">
      <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-[#FACC15] mb-1">
        {isInView ? (
          <CountUp start={0} end={stat.number} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        {stat.suffix}
      </div>
      <div className="text-white font-semibold text-lg">{stat.label}</div>
      <div className="text-gray-400 text-sm mt-1">{stat.sublabel}</div>
    </AnimatedSection>
  );
}

export default function TrustStats() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            A Track Record Built on Trust
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Over two decades supplying industrial ladders and scaffolding to contractors across West Africa.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
