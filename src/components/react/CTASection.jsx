import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <motion.section
        ref={ref}
        className="cta-section-b"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="cta-container-b">
          <motion.div className="cta-badge-b" variants={itemVariants}>
            🚀 Start Today
          </motion.div>
          
          <motion.h2 className="cta-title-b" variants={itemVariants}>
            Ready to take control
            <br />
            <span className="cta-gradient">of your finances?</span>
          </motion.h2>
          
          <motion.p className="cta-subtitle-b" variants={itemVariants}>
            Join thousands of users who track every expense. 
            No signup required. No credit card needed.
          </motion.p>
          
          <motion.div className="cta-buttons-b" variants={itemVariants}>
            <motion.a
              href="https://apps.apple.com/app/expenses-tracker"
              className="cta-btn-primary"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.posthog?.capture('cta_button_clicked', { variant: 'B', button: 'footer_app_store' })}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon-b">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="store-text-b">
                <span className="store-label">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </motion.a>
            
            <motion.a
              href="https://play.google.com/store/apps/details?id=app.expensestracker"
              className="cta-btn-primary"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.posthog?.capture('cta_button_clicked', { variant: 'B', button: 'footer_play_store' })}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon-b">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="store-text-b">
                <span className="store-label">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </motion.a>
          </motion.div>
          
          <motion.div className="cta-features-b" variants={itemVariants}>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              Free forever plan
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              Works offline
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              No signup required
            </div>
          </motion.div>
        </div>
        
        {/* Decorative gradients */}
        <div className="cta-gradient-orb cta-orb-1" />
        <div className="cta-gradient-orb cta-orb-2" />
      </motion.section>
      
      <style>{`
        .cta-section-b {
          position: relative;
          padding: 8rem 1.5rem;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          overflow: hidden;
          text-align: center;
        }
        
        .cta-container-b {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-badge-b {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 1.5rem;
        }
        
        .cta-title-b {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          color: #1a1a2e;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }
        
        .cta-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .cta-subtitle-b {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.125rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0 0 2.5rem 0;
        }
        
        .cta-buttons-b {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        
        .cta-btn-primary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.5rem;
          background: #1a1a2e;
          color: white;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 10px 30px -5px rgba(26, 26, 46, 0.3);
        }
        
        .store-icon-b {
          width: 28px;
          height: 28px;
        }
        
        .store-text-b {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        
        .store-label {
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.7;
        }
        
        .store-name {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 700;
          font-size: 1rem;
        }
        
        .cta-features-b {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          color: #64748b;
        }
        
        .check-icon {
          color: #22c55e;
          font-weight: 700;
        }
        
        .cta-gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .cta-orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -100px;
          right: -100px;
        }
        
        .cta-orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -50px;
          left: -50px;
        }
        
        @media (max-width: 600px) {
          .cta-features-b {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
