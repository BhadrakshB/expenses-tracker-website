import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { 
    icon: '📴', 
    title: 'Offline-First', 
    description: 'Track expenses anywhere, anytime. No internet needed.',
    size: 'large',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    icon: '📱', 
    title: 'Bank SMS Tracking', 
    description: 'Auto-detect transactions from your bank SMS messages.',
    size: 'medium',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  { 
    icon: '🤖', 
    title: 'AI Insights', 
    description: 'Smart spending analysis powered by AI.',
    size: 'medium',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  { 
    icon: '💱', 
    title: 'Multi-Currency', 
    description: '150+ currencies with real-time conversion.',
    size: 'small',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  { 
    icon: '👨‍👩‍👧‍👦', 
    title: 'Family Sharing', 
    description: 'Share budgets with family members.',
    size: 'small',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  { 
    icon: '☁️', 
    title: 'Cloud Sync', 
    description: 'Sync data across all devices securely.',
    size: 'small',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  { 
    icon: '⏰', 
    title: 'Bill Reminders', 
    description: 'Never miss a payment.',
    size: 'medium',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  { 
    icon: '📊', 
    title: 'Export Reports', 
    description: 'CSV & PDF exports for analysis.',
    size: 'medium',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

function BentoCard({ feature, index }) {
  const sizeClasses = {
    large: 'bento-large',
    medium: 'bento-medium',
    small: 'bento-small'
  };

  return (
    <motion.div
      className={`bento-card ${sizeClasses[feature.size]}`}
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        '--card-gradient': feature.gradient
      }}
    >
      <div className="bento-gradient" />
      <div className="bento-content">
        <span className="bento-icon">{feature.icon}</span>
        <h3 className="bento-title">{feature.title}</h3>
        <p className="bento-description">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <motion.div 
        ref={ref}
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {features.map((feature, index) => (
          <BentoCard key={feature.title} feature={feature} index={index} />
        ))}
      </motion.div>
      
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(180px, auto);
          gap: 1.25rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .bento-card {
          position: relative;
          background: white;
          border-radius: 24px;
          padding: 1.75rem;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.3s ease;
        }
        
        .bento-large {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        .bento-medium {
          grid-column: span 2;
          grid-row: span 1;
        }
        
        .bento-small {
          grid-column: span 1;
          grid-row: span 1;
        }
        
        .bento-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
        }
        
        .bento-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .bento-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .bento-large .bento-icon {
          font-size: 3.5rem;
        }
        
        .bento-title {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 0.5rem 0;
        }
        
        .bento-large .bento-title {
          font-size: 1.75rem;
        }
        
        .bento-description {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
          max-width: 280px;
        }
        
        .bento-large .bento-description {
          font-size: 1.0625rem;
          max-width: 360px;
        }
        
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .bento-large {
            grid-column: span 2;
            grid-row: span 1;
          }
          
          .bento-medium,
          .bento-small {
            grid-column: span 1;
          }
        }
        
        @media (max-width: 500px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .bento-large,
          .bento-medium,
          .bento-small {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </>
  );
}
