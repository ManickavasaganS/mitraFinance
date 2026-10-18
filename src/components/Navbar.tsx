import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('/');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', sectionId: null },
    { name: 'About Us', path: '#about', sectionId: 'about' },
    { name: 'Service', path: '#products', sectionId: 'products' },
  ];

  useEffect(() => {
    // Only run IntersectionObserver on the home page
    if (location.pathname !== '/') {
      setActiveSection(location.pathname);
      return;
    }

    setActiveSection('/');

    const sectionIds = navLinks
      .filter((l) => l.sectionId)
      .map((l) => l.sectionId as string);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          } else {
            // If the section leaves view, revert to '/' only if no other anchor section is active
            setActiveSection((prev) =>
              prev === `#${id}` ? '/' : prev
            );
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo" onClick={scrollToTop}>
          <img src="/logo.png" alt="Mitra Finance logo" />
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {navLinks.map((link) => (
            link.path.startsWith('#') ? (
              <a
                key={link.path}
                href={link.path}
                className={`nav-link ${activeSection === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${activeSection === link.path ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="#enquiry" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Free Consulting
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

