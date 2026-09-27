"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Thoughtful architectural solutions that combine functionality, beauty, and lasting value.",
    image: "/images/architectural-design.png",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Elegant, practical interiors designed around the way you live, work, and experience space.",
    image: "/images/interior-design.png",
  },
  {
    number: "03",
    title: "Construction & Project Management",
    description:
      "Professional project coordination, quality control, and construction delivery from start to finish.",
    image: "/images/construction-site.png",
  },
  {
    number: "04",
    title: "Real Estate Services",
    description:
      "Property solutions that help you find, develop, and manage spaces with confidence.",
    image: "/images/real-estate-property.png",
  },
  {
    number: "05",
    title: "Real Estate Investment",
    description:
      "Strategic property investment opportunities focused on long-term value and growth.",
    image: "/images/real-estate-investment.png",
  },
  {
    number: "06",
    title: "Property Management",
    description:
      "Reliable property care, tenant coordination, and management that protects your asset.",
    image: "/images/property-management.png",
  },
];

const projects = [
  {
    category: "RESIDENTIAL",
    title: "Contemporary Living",
    image: "/images/project-residential.png",
  },
  {
    category: "COMMERCIAL",
    title: "Commercial Development",
    image: "/images/project-commercial.png",
  },
  {
    category: "INTERIOR DESIGN",
    title: "Refined Interior Spaces",
    image: "/images/project-interior.png",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap");

        :root {
          --gold: #c5a46d;
          --gold-light: #dfc28d;
          --dark: #10100f;
          --dark-soft: #171715;
          --text: #f5f3ee;
          --muted: #aaa8a1;
          --line: rgba(255, 255, 255, 0.13);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: var(--dark);
        }

        body {
          margin: 0;
          background: var(--dark);
          color: var(--text);
          font-family: "DM Sans", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .site-header {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .nav-wrap {
          width: min(1240px, calc(100% - 48px));
          height: 94px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .brand img {
          width: 58px;
          height: 58px;
          object-fit: contain;
        }

        .site-header .brand img {
          width: clamp(170px, 22vw, 250px);
          height: auto;
          max-height: 76px;
          object-fit: contain;
        }

        .brand-name {
          font-family: "Manrope", sans-serif;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 1.4px;
          white-space: nowrap;
        }

        .brand-tagline {
          display: block;
          margin-top: 4px;
          color: var(--gold);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-links a {
          color: #e8e6e0;
          font-size: 12px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--gold-light);
        }

        .nav-cta {
          padding: 13px 19px;
          border: 1px solid var(--gold);
          color: var(--gold-light) !important;
          letter-spacing: 0.5px;
        }

        .menu-toggle {
          display: none;
          border: 1px solid var(--line);
          background: transparent;
          color: white;
          padding: 10px 13px;
          cursor: pointer;
        }

        .hero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(10, 10, 9, 0.94) 0%,
              rgba(10, 10, 9, 0.78) 43%,
              rgba(10, 10, 9, 0.25) 100%
            ),
            linear-gradient(0deg, rgba(10, 10, 9, 0.45), transparent 60%),
            url("/images/hero-building.png") center / cover no-repeat;
        }

        .hero-inner {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          padding-top: 100px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold-light);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 34px;
          height: 1px;
          background: var(--gold);
        }

        .hero h1 {
          max-width: 790px;
          margin: 25px 0 22px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(44px, 7vw, 86px);
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.08;
        }

        .hero h1 span {
          color: var(--gold-light);
        }

        .hero-copy {
          max-width: 550px;
          color: #c7c5bf;
          font-size: 16px;
          line-height: 1.9;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 0 23px;
          border: 1px solid var(--gold);
          background: var(--gold);
          color: #171510;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
        }

        .button:hover {
          background: var(--gold-light);
          border-color: var(--gold-light);
          transform: translateY(-2px);
        }

        .button-outline {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.45);
        }

        .button-outline:hover {
          color: #171510;
          border-color: var(--gold-light);
        }

        .hero-bottom {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(12, 12, 11, 0.58);
        }

        .hero-stats {
          width: min(1240px, calc(100% - 48px));
          min-height: 100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
        }

        .stat {
          padding: 10px 30px;
          border-right: 1px solid var(--line);
        }

        .stat:first-child {
          padding-left: 0;
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat strong {
          display: block;
          color: var(--gold-light);
          font-family: "Manrope", sans-serif;
          font-size: 25px;
        }

        .stat span {
          display: block;
          margin-top: 5px;
          color: #c0beb7;
          font-size: 11px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .section {
          padding: 110px 0;
        }

        .container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        .section-heading {
          max-width: 690px;
          margin-bottom: 48px;
        }

        .section-heading h2 {
          margin: 18px 0;
          font-family: "Manrope", sans-serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700;
          letter-spacing: -1.8px;
          line-height: 1.2;
        }

        .section-heading p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .services-section {
          background: #151513;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          background: #1a1a18;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .service-card:hover {
          border-color: var(--gold);
          transform: translateY(-4px);
        }

        .service-image {
          height: 210px;
          overflow: hidden;
          background: #242420;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.04);
        }

        .service-content {
          padding: 26px;
        }

        .service-number {
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 1.5px;
        }

        .service-content h3 {
          margin: 14px 0 11px;
          font-family: "Manrope", sans-serif;
          font-size: 19px;
          line-height: 1.4;
        }

        .service-content p {
          min-height: 72px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .service-link {
          display: inline-block;
          margin-top: 22px;
          color: var(--gold-light);
          font-size: 12px;
          font-weight: 700;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;
        }

        .about-image-wrap {
          position: relative;
          min-height: 500px;
        }

        .about-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .about-image-label {
          position: absolute;
          right: -18px;
          bottom: 24px;
          max-width: 230px;
          padding: 24px;
          background: var(--gold);
          color: #151410;
        }

        .about-image-label strong {
          display: block;
          font-family: "Manrope", sans-serif;
          font-size: 30px;
        }

        .about-image-label span {
          display: block;
          margin-top: 6px;
          font-size: 11px;
          line-height: 1.5;
        }

        .about-copy h2 {
          margin: 18px 0;
          font-family: "Manrope", sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: -1.5px;
          line-height: 1.2;
        }

        .about-copy p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
          margin: 28px 0 32px;
        }

        .about-point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e8e5dc;
          font-size: 12px;
        }

        .about-point::before {
          content: "✓";
          display: grid;
          width: 23px;
          height: 23px;
          flex: 0 0 23px;
          place-items: center;
          border: 1px solid var(--gold);
          color: var(--gold-light);
          font-size: 12px;
        }

        .projects-section {
          background: #151513;
        }

        .projects-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
        }

        .projects-header .section-heading {
          margin-bottom: 40px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .project-card {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background: #262621;
        }

        .project-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover img {
          transform: scale(1.05);
        }

        .project-card::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(
            0deg,
            rgba(8, 8, 7, 0.9),
            rgba(8, 8, 7, 0.05) 75%
          );
        }

        .project-info {
          position: absolute;
          z-index: 1;
          right: 24px;
          bottom: 25px;
          left: 24px;
        }

        .project-info span {
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .project-info h3 {
          margin: 10px 0 0;
          font-family: "Manrope", sans-serif;
          font-size: 23px;
        }

        .contact-section {
          padding: 90px 0;
          background:
            linear-gradient(rgba(14, 14, 12, 0.88), rgba(14, 14, 12, 0.92)),
            url("/images/about-architecture.png") center / cover no-repeat;
        }

        .contact-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .contact-inner h2 {
          max-width: 680px;
          margin: 18px 0 12px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(32px, 4.5vw, 52px);
          letter-spacing: -1.5px;
          line-height: 1.2;
        }

        .contact-inner p {
          color: #c2c0b8;
          font-size: 14px;
          line-height: 1.8;
        }

        .site-footer {
          padding: 55px 0 25px;
          background: #0b0b0a;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 45px;
        }

        .footer-brand p {
          max-width: 350px;
          margin-top: 20px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .footer-column h4 {
          margin: 5px 0 20px;
          color: var(--gold-light);
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .footer-column a,
        .footer-column p {
          display: block;
          margin: 0 0 13px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .footer-column a:hover {
          color: var(--gold-light);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid var(--line);
          color: #77766f;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .nav-links {
            gap: 17px;
          }

          .nav-links a {
            font-size: 11px;
          }

          .brand img {
            width: 48px;
            height: 48px;
          }

          .brand-name {
            font-size: 14px;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-grid {
            gap: 40px;
          }
        }

        @media (max-width: 760px) {
          .nav-wrap {
            width: calc(100% - 32px);
            height: 78px;
          }

          .brand {
            gap: 9px;
          }

          .brand img {
            width: 44px;
            height: 44px;
          }

          .site-header .brand img {
            width: clamp(155px, 42vw, 200px);
            height: auto;
            max-height: 62px;
          }

          .brand-name {
            font-size: 12px;
            letter-spacing: 0.8px;
          }

          .brand-tagline {
            font-size: 7px;
            letter-spacing: 0.8px;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 78px;
            right: 0;
            left: 0;
            display: none;
            align-items: stretch;
            gap: 0;
            padding: 10px 20px 20px;
            border-bottom: 1px solid var(--line);
            background: #11110f;
          }

          .nav-links.open {
            display: flex;
            flex-direction: column;
          }

          .nav-links a {
            padding: 14px 5px;
            border-bottom: 1px solid var(--line);
            font-size: 13px;
          }

          .nav-cta {
            margin-top: 12px;
            text-align: center;
          }

          .hero {
            min-height: 760px;
            background-position: 58% center;
          }

          .hero-inner,
          .container,
          .hero-stats {
            width: calc(100% - 36px);
          }

          .hero h1 {
            font-size: clamp(42px, 11vw, 65px);
            letter-spacing: -2px;
          }

          .hero-copy {
            font-size: 14px;
          }

          .hero-bottom {
            position: relative;
            margin-top: 50px;
          }

          .hero-stats {
            min-height: 0;
            padding: 15px 0;
          }

          .stat {
            padding: 10px;
          }

          .stat strong {
            font-size: 21px;
          }

          .stat span {
            font-size: 9px;
            line-height: 1.5;
          }

          .section {
            padding: 75px 0;
          }

          .services-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .service-image {
            height: 230px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-image-wrap,
          .about-image {
            min-height: 350px;
            height: 350px;
          }

          .about-image-label {
            right: 10px;
          }

          .projects-header,
          .contact-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .projects-header .section-heading {
            margin-bottom: 20px;
          }

          .project-card {
            min-height: 350px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 35px 25px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
          }
        }

        @media (max-width: 420px) {
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-actions .button {
            width: 100%;
          }

          .about-points {
            grid-template-columns: 1fr;
          }

          .footer-main {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: auto;
          }
        }
      `}</style>

      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img src="/images/logo.png" alt="ARCSTYLE PROJECT" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              LET&apos;S TALK ↗
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="eyebrow">Architecture · Construction · Real Estate</div>
          <h1>
            Building Today.
            <br />
            <span>Designing Tomorrow.</span>
          </h1>
          <p className="hero-copy">
            We create spaces that inspire, properties that perform, and
            developments built to stand the test of time. Your vision is our
            blueprint.
          </p>
          <div className="hero-actions">
            <a className="button" href="#services">
              EXPLORE OUR SERVICES <span>↗</span>
            </a>
            <a className="button button-outline" href="#projects">
              VIEW OUR PROJECTS
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-stats">
            <div className="stat">
              <strong>01</strong>
              <span>Vision-led approach</span>
            </div>
            <div className="stat">
              <strong>360°</strong>
              <span>Property solutions</span>
            </div>
            <div className="stat">
              <strong>∞</strong>
              <span>Possibilities built</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">What We Do</div>
            <h2>
              Complete solutions.
              <br />
              <span style={{ color: "var(--gold-light)" }}>
                Thoughtfully delivered.
              </span>
            </h2>
            <p>
              From the first concept to the final detail, we bring design,
              construction, and property expertise together to help turn your
              ideas into reality.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a className="service-link" href="#contact">
                    DISCUSS YOUR PROJECT ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img
              className="about-image"
              src="/images/about-architecture.png"
              alt="Modern architectural development"
            />
            <div className="about-image-label">
              <strong>Built with purpose.</strong>
              <span>Designed for people. Created for the future.</span>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow">About Arcstyle</div>
            <h2>
              We shape spaces.
              <br />
              <span style={{ color: "var(--gold-light)" }}>
                We create value.
              </span>
            </h2>
            <p>
              ARCSTYLE PROJECT is focused on delivering considered
              architectural, construction, and real estate solutions. We bring
              creativity, practical thinking, and attention to detail to every
              stage of a project.
            </p>
            <p>
              Whether you are planning a new development, transforming an
              interior, or exploring property opportunities, our approach
              begins with understanding your goals.
            </p>

            <div className="about-points">
              <div className="about-point">Purposeful design</div>
              <div className="about-point">Quality-focused delivery</div>
              <div className="about-point">Client collaboration</div>
              <div className="about-point">Long-term value</div>
            </div>

            <a className="button" href="#contact">
              WORK WITH US <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="projects-header">
            <div className="section-heading">
              <div className="eyebrow">Selected Work</div>
              <h2>
                Spaces that make
                <br />
                <span style={{ color: "var(--gold-light)" }}>an impression.</span>
              </h2>
              <p>
                Explore a selection of project types that reflect our approach
                to thoughtful design and property development.
              </p>
            </div>
            <a className="button button-outline" href="#contact">
              START A PROJECT ↗
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div>
            <div className="eyebrow">Let&apos;s Build Something</div>
            <h2>
              Have a vision?
              <br />
              Let&apos;s bring it to life.
            </h2>
            <p>
              Tell us about your project, property, or investment plans.
              We&apos;re ready to discuss what comes next.
            </p>
          </div>
          <a
            className="button"
            href="mailto:info@arcstyleproject.com?subject=Project%20Enquiry"
          >
            SEND AN ENQUIRY <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand" href="#home">
                <img src="/images/logo.png" alt="ARCSTYLE PROJECT logo" />
                <span>
                  <span className="brand-name">ARCSTYLE PROJECT</span>
                  <span className="brand-tagline">
                    BUILDING TODAY | DESIGNING TOMORROW
                  </span>
                </span>
              </a>
              <p>
                Architecture, construction, and real estate solutions shaped
                by purpose, precision, and a vision for tomorrow.
              </p>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>
              <a href="#about">About Us</a>
              <a href="#services">Our Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Get in Touch</h4>
              <a href="mailto:info@arcstyleproject.com">
                info@arcstyleproject.com
              </a>
              <p>For project enquiries and collaborations, contact our team.</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ARCSTYLE PROJECT. All rights reserved.</span>
            <span>BUILDING TODAY | DESIGNING TOMORROW</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
