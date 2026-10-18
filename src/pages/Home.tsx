import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Landmark, Home as HomeIcon, Building2, Briefcase, Car, Tractor, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mitra Finance | Loans in Coimbatore & Tirupur</title>
        <meta name="description" content="Mitra Finance connects you to 95+ banks and NBFCs for personal loans, home loans, loan against property, and OD/CC facilities across Coimbatore and Tirupur. Fast approvals, transparent process." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Mitra Finance",
              "email": "rdkfs22@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "18*25 K Sub Court Back Side, Avinashi",
                "addressLocality": "Tirupur",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "areaServed": [
                { "@type": "City", "name": "Coimbatore" },
                { "@type": "City", "name": "Tirupur" }
              ],
              "sameAs": ["https://www.instagram.com/rdk_finance_tn"],
              "makesOffer": [
                { "@type": "Offer", "itemOffered": { "@type": "FinancialProduct", "name": "Personal Loan" } },
                { "@type": "Offer", "itemOffered": { "@type": "FinancialProduct", "name": "Home Loan" } },
                { "@type": "Offer", "itemOffered": { "@type": "FinancialProduct", "name": "Loan Against Property" } },
                { "@type": "Offer", "itemOffered": { "@type": "FinancialProduct", "name": "Overdraft / Cash Credit (OD/CC)" } }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Trusted Partner for <span>Every Loan Journey</span></h1>
            <p>
              Connecting you with 95+ banks and NBFCs for fast, transparent loan approvals.
            </p>
            <div className="hero-btn-group">
              <a href="#enquiry" className="btn btn-primary">Book a enquiry now</a>
              <a href="#contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Consultant shaking hands with a client in a modern office" 
          />
        </div>
      </section>

      {/* About Us */}
      <section className="section" id="about">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Who We Are</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gradient-brand)', margin: '1rem auto 2rem' }}></div>
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              Mitra Finance has partnered with over 95 leading banks and NBFCs to bring personal loans, home loans, loan against property, and business overdraft (OD/CC) facilities to individuals and businesses across Coimbatore and Tirupur.
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              We work closely with salaried employees, self-employed professionals, and business owners to find loan products that match their income profile, eligibility, and repayment comfort — with complete transparency on interest rates and processing fees.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section section-light" id="products">
        <div className="container">
          <div className="text-center">
            <h2>Our Loan Products</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gradient-brand)', margin: '1rem auto 3rem' }}></div>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-icon"><Landmark size={32} /></div>
              <h3>Personal Loan</h3>
              <p>For salaried individuals earning above ₹20,000/month with account credit salary. Quick eligibility check and fast disbursal through our banking partners.</p>
            </div>
            <div className="card">
              <div className="card-icon"><HomeIcon size={32} /></div>
              <h3>Home Loan</h3>
              <p>Available for salaried employees, cash salary earners, and self-employed individuals. We help match you with the right lender based on your income type.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Building2 size={32} /></div>
              <h3>Mortgage Loan</h3>
              <p>Unlock the value of your property with a mortgage loan. Suitable for salaried and self-employed applicants, with LTV up to 70% for large funding needs at competitive interest rates.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Briefcase size={32} /></div>
              <h3>OD / CC Facility</h3>
              <p>Business overdraft and cash credit facilities for business owners in Coimbatore and Tirupur looking for flexible working capital access.</p>
            </div>
            <div className="card">
              <div className="card-icon"><ShoppingBag size={32} /></div>
              <h3>Purchase Loan</h3>
              <p>Finance your asset or equipment purchases with ease. We connect you with lenders offering competitive rates for individual and business purchase needs.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Car size={32} /></div>
              <h3>Vehicle Loan</h3>
              <p>Get the best financing deals for new or used two-wheelers and four-wheelers. Fast processing and low EMIs through our trusted banking network.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Tractor size={32} /></div>
              <h3>Agri Loan</h3>
              <p>Tailored agricultural loans for farmers and agri-entrepreneurs. Access crop loans, equipment financing, and land purchase funding through our NBFC partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Why Choose Us</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gradient-brand)', margin: '1rem auto 3rem' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              "Access to 95+ banks and NBFCs under one roof",
              "Transparent interest rates — reducing balance and flat rate options",
              "Support for salaried, self-employed, and cash-salary applicants",
              "Local presence in both Coimbatore and Tirupur",
              "No hidden processing charges"
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={24} className="text-brand" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section" id="enquiry" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--white)' }}>Apply for a Loan Today</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gradient-brand)', margin: '1rem auto 0' }}></div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* Service Areas */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Service Areas</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gradient-brand)', margin: '1rem auto 2rem' }}></div>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              We proudly serve loan seekers across Coimbatore and Tirupur, including Avinashi and surrounding areas. Whether you're near Covai or Tirupur, our team is ready to guide you through the loan process.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/coimbatore" className="btn btn-outline">Loans in Coimbatore</Link>
              <Link to="/tirupur" className="btn btn-outline">Loans in Tirupur</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Floating WhatsApp Button */}
      <a
        id="whatsapp-float-btn"
        href="https://wa.me/918870534301"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          textDecoration: 'none',
          animation: 'whatsappPulse 2s infinite',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.12)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 28px rgba(37,211,102,0.7)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)';
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
          <path d="M16.002 2C8.268 2 2 8.268 2 16.002c0 2.49.65 4.83 1.786 6.858L2 30l7.338-1.762A13.94 13.94 0 0 0 16.002 30C23.734 30 30 23.732 30 16.002 30 8.268 23.734 2 16.002 2zm0 25.385a11.35 11.35 0 0 1-5.79-1.587l-.415-.246-4.354 1.045 1.072-4.24-.27-.435A11.332 11.332 0 0 1 4.617 16c0-6.279 5.108-11.385 11.385-11.385S27.385 9.723 27.385 16.002c0 6.277-5.106 11.383-11.383 11.383zm6.24-8.515c-.342-.172-2.024-1-2.34-1.113-.316-.114-.545-.172-.775.171-.23.342-.887 1.113-1.087 1.343-.2.23-.4.257-.742.086-.342-.172-1.444-.532-2.75-1.697-1.017-.908-1.703-2.028-1.903-2.37-.2-.342-.021-.527.15-.697.155-.153.343-.4.514-.6.172-.2.229-.342.343-.57.114-.229.057-.43-.028-.6-.086-.172-.775-1.87-1.063-2.558-.28-.672-.563-.58-.775-.59l-.657-.012a1.26 1.26 0 0 0-.914.43c-.314.342-1.2 1.172-1.2 2.858s1.228 3.315 1.4 3.543c.171.229 2.418 3.69 5.857 5.176.818.354 1.457.565 1.954.724.82.26 1.568.224 2.158.136.659-.099 2.024-.828 2.31-1.628.285-.8.285-1.486.2-1.628-.086-.144-.315-.229-.657-.4z"/>
        </svg>
        {/* Tooltip */}
        <span style={{
          position: 'absolute',
          right: '70px',
          background: '#1a1a2e',
          color: '#fff',
          fontSize: '0.8rem',
          fontWeight: 600,
          padding: '6px 12px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.2s',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
          className="wa-tooltip"
        >Chat with us</span>
      </a>

      {/* WhatsApp Pulse Keyframes */}
      <style>{`
        @keyframes whatsappPulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        #whatsapp-float-btn:hover .wa-tooltip {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
};

export default Home;
