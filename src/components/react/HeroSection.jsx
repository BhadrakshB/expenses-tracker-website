import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20
    }
  }
};

const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export default function HeroSection() {
  return (
    <>
      <motion.section 
        className="hero-b"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-b-container">
          <motion.div className="hero-b-content" variants={itemVariants}>
            <motion.span 
              className="hero-b-badge"
              whileHover={{ scale: 1.05 }}
            >
              ✨ Track Every Cent
            </motion.span>
            
            <motion.h1 className="hero-b-title" variants={itemVariants}>
              Your finances,
              <br />
              <span className="hero-b-gradient-text">beautifully simple.</span>
            </motion.h1>
            
            <motion.p className="hero-b-subtitle" variants={itemVariants}>
              The expense tracker that works offline, syncs everywhere, 
              and helps you understand your spending with AI-powered insights.
            </motion.p>
            
            <motion.div className="hero-b-buttons" variants={itemVariants}>
              <motion.a
                href="https://apps.apple.com/app/expenses-tracker"
                className="hero-b-cta-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.posthog?.capture('cta_button_clicked', { variant: 'B', button: 'hero_primary' })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download Free
              </motion.a>
              
              <motion.a
                href="/pricing"
                className="hero-b-cta-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.posthog?.capture('pricing_page_visited', { variant: 'B', source: 'hero' })}
              >
                See Pricing →
              </motion.a>
            </motion.div>
            
            <motion.div className="hero-b-stores" variants={itemVariants}>
              <span className="hero-b-stores-label">Also available on</span>
              <a 
                href="https://play.google.com/store/apps/details?id=app.expensestracker"
                className="hero-b-store-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.posthog?.capture('app_store_visited', { variant: 'B', store: 'google_play' })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-b-visual"
            variants={itemVariants}
          >
            <motion.div 
              className="hero-b-phone"
              variants={floatVariants}
              animate="animate"
            >
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="app-header-b">
                  <span>💰 Expenses</span>
                  <span className="app-balance-b">₹24,500</span>
                </div>
                <div className="app-chart">
                  <div className="chart-bar" style={{ height: '60%' }} />
                  <div className="chart-bar" style={{ height: '80%' }} />
                  <div className="chart-bar" style={{ height: '45%' }} />
                  <div className="chart-bar" style={{ height: '90%' }} />
                  <div className="chart-bar active" style={{ height: '70%' }} />
                </div>
                <div className="app-expense-b">
                  <span>🍕</span>
                  <div className="expense-info">
                    <strong>Food & Dining</strong>
                    <span>Today</span>
                  </div>
                  <span className="expense-amount-b">-₹450</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      <style>{`
        .hero-b {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding: 6rem 1.5rem;
        }
        
        .hero-b-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-b-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 1.5rem;
        }
        
        .hero-b-title {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #1a1a2e;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
        }
        
        .hero-b-gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-b-subtitle {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.125rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0 0 2rem 0;
          max-width: 480px;
        }
        
        .hero-b-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .hero-b-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 10px 30px -5px rgba(102, 126, 234, 0.4);
        }
        
        .hero-b-cta-primary .btn-icon {
          width: 20px;
          height: 20px;
        }
        
        .hero-b-cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 1rem 1.75rem;
          background: white;
          color: #1a1a2e;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          border: 2px solid #e2e8f0;
        }
        
        .hero-b-stores {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .hero-b-stores-label {
          font-size: 0.875rem;
          color: #94a3b8;
        }
        
        .hero-b-store-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
          text-decoration: none;
        }
        
        .hero-b-store-link:hover {
          color: #667eea;
        }
        
        .store-icon {
          width: 18px;
          height: 18px;
        }
        
        .hero-b-visual {
          display: flex;
          justify-content: center;
        }
        
        .hero-b-phone {
          width: 280px;
          background: linear-gradient(180deg, #1a1a2e 0%, #2d2d44 100%);
          border-radius: 40px;
          padding: 12px;
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.3);
        }
        
        .phone-notch {
          width: 100px;
          height: 28px;
          background: #1a1a2e;
          border-radius: 20px;
          margin: 0 auto 12px;
        }
        
        .phone-screen {
          background: white;
          border-radius: 28px;
          padding: 1.25rem;
          min-height: 400px;
        }
        
        .app-header-b {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .app-balance-b {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #667eea;
        }
        
        .app-chart {
          display: flex;
          align-items: flex-end;
          gap: 0.75rem;
          height: 140px;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 16px;
          margin-bottom: 1rem;
        }
        
        .chart-bar {
          flex: 1;
          background: linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%);
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .chart-bar.active {
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
        }
        
        .app-expense-b {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
        }
        
        .expense-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .expense-info strong {
          font-size: 0.875rem;
          color: #1a1a2e;
        }
        
        .expense-info span {
          font-size: 0.75rem;
          color: #94a3b8;
        }
        
        .expense-amount-b {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 600;
          color: #ef4444;
        }
        
        @media (max-width: 900px) {
          .hero-b-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-b-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-b-buttons {
            justify-content: center;
          }
          
          .hero-b-stores {
            justify-content: center;
          }
          
          .hero-b-visual {
            order: -1;
          }
          
          .hero-b-phone {
            width: 240px;
          }
        }
      `}</style>
    </>
  );
}
