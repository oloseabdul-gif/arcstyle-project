import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ClipboardList,
  HardHat,
  House,
  Paintbrush,
  BriefcaseBusiness,
  ChartNoAxesCombined,
} from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    description:
      "Functional, beautiful spaces designed around your vision, lifestyle, and practical needs.",
    image: "/images/architectural-design.png",
    icon: House,
  },
  {
    title: "Interior Design",
    description:
      "Thoughtful interiors that bring comfort, character, and purpose to every space.",
    image: "/images/interior-design.png",
    icon: Paintbrush,
  },
  {
    title: "Project Management & Construction",
    description:
      "Quality construction, careful planning, and reliable coordination from start to finish.",
    image: "/images/construction-site.png",
    icon: HardHat,
  },
  {
    title: "Real Estate Services",
    description:
      "Practical guidance for property decisions, opportunities, and ownership.",
    image: "/images/real-estate-property.png",
    icon: Building2,
  },
  {
    title: "Real Estate Investment",
    description:
      "Property investment support shaped around your goals and long-term plans.",
    image: "/images/real-estate-investment.png",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Real Estate Management",
    description:
      "Organized property management focused on care, value, and dependable service.",
    image: "/images/property-management.png",
    icon: ClipboardList,
  },
  {
    title: "Contract Management",
    description:
      "Clear contract coordination, documentation, and project administration.",
    image: "/images/contract-management.png",
    icon: BriefcaseBusiness,
  },
];

const projects = [
  {
    category: "Residential",
    title: "Residential Architecture",
    image: "/images/project-residential.png",
  },
  {
    category: "Commercial",
    title: "Commercial Development",
    image: "/images/project-commercial.png",
  },
  {
    category: "Interior Design",
    title: "Contemporary Interior Spaces",
    image: "/images/project-interior.png",
  },
];

const values = [
  "Thoughtful design",
  "Quality workmanship",
  "Clear communication",
  "Reliable coordination",
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#home" aria-label="ARCSTYLE PROJECT home">
            <Image
              src="/images/logo.png"
              alt="ARCSTYLE PROJECT"
              width={500}
              height={300}
              className="brand-logo"
              priority
            />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Discuss a Project <ArrowUpRight size={16} />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span aria-hidden="true">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </span>
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <Image
            src="/images/hero-building.png"
            alt="Modern architectural building"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <p className="eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              ARCHITECTURE · CONSTRUCTION · REAL ESTATE
            </p>

            <h1>
              Building Today.
              <br />
              <span>Designing Tomorrow.</span>
            </h1>

            <p className="hero-description">
              We create purposeful spaces and deliver coordinated property
              solutions through thoughtful design, construction, and real
              estate services.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href="#services">
                Explore Our Services <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#about">
                Discover ARCSTYLE
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>DESIGN WITH PURPOSE</span>
            <span>
              <b />
              BUILD WITH CONFIDENCE
            </span>
          </div>
        </section>

        <section className="quick-services" aria-label="Our expertise">
          <div className="container quick-service-grid">
            <div className="quick-service">
              <Building2 className="gold-icon" size={25} strokeWidth={1.6} />
              <h3>Architecture</h3>
              <p>Spaces shaped around your vision.</p>
            </div>

            <div className="quick-service">
              <HardHat className="gold-icon" size={25} strokeWidth={1.6} />
              <h3>Construction</h3>
              <p>Quality, planning, and coordination.</p>
            </div>

            <div className="quick-service">
              <Paintbrush className="gold-icon" size={25} strokeWidth={1.6} />
              <h3>Interior Design</h3>
              <p>Comfort and character in every detail.</p>
            </div>

            <div className="quick-service">
              <House className="gold-icon" size={25} strokeWidth={1.6} />
              <h3>Real Estate</h3>
              <p>Support for your property goals.</p>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  WHAT WE DO
                </p>
                <h2>Our Services</h2>
              </div>
              <p className="heading-description">
                From the first idea to the final handover, ARCSTYLE provides
                coordinated solutions for your building and property needs.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <a
                    className="service-card"
                    href="#contact"
                    key={service.title}
                  >
                    <div className="card-image-wrap">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 430px) 100vw, (max-width: 760px) 50vw, 33vw"
                      />
                    </div>

                    <div className="service-card-content">
                      <div className="service-card-icon">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <span className="card-link">
                        Learn More <ArrowRight size={15} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  SELECTED WORK
                </p>
                <h2>Spaces & Projects</h2>
              </div>
              <p className="heading-description">
                A glimpse of the building types and spaces that inspire our
                approach to design and delivery.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <a
                  className="project-card"
                  href="#contact"
                  key={project.title}
                >
                  <div className="project-image-wrap">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 430px) 100vw, (max-width: 760px) 50vw, 33vw"
                    />
                    <span className="project-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <div className="project-label">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="about-image">
                <Image
                  src="/images/about-architecture.png"
                  alt="Architectural design and planning"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>

              <div className="about-message">
                <div className="about-mark">A</div>
                <div>
                  <h3>ARCSTYLE PROJECT</h3>
                  <p>Building today. Designing tomorrow.</p>
                </div>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                ABOUT ARCSTYLE
              </p>

              <h2>
                We shape spaces
                <br />
                <span>with purpose.</span>
              </h2>

              <p>
                ARCSTYLE PROJECT brings architecture, construction, interior
                design, and real estate services together to help turn ideas
                into practical spaces and property solutions.
              </p>

              <p>
                Our approach is built around understanding each project,
                planning carefully, and coordinating the details that matter
                from concept through delivery.
              </p>

              <div className="value-grid">
                {values.map((value) => (
                  <div className="value-item" key={value}>
                    <Check className="gold-icon" size={17} />
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <a className="button button-dark" href="#contact">
                Work With Us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="stats-section" aria-label="Our approach">
          <div className="container stats-grid">
            <div>
              <strong>01</strong>
              <span>Understand the vision</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Plan with purpose</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Coordinate the details</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Deliver with care</span>
            </div>
          </div>
        </section>

        <section className="contact-banner" id="contact">
          <div className="container contact-banner-inner">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                LET’S BUILD SOMETHING MEANINGFUL
              </p>
              <h2>Have a project in mind?</h2>
              <p>
                Tell us about your vision and the kind of space or property
                solution you are looking for.
              </p>
            </div>

            <a className="button button-dark" href="#services">
              Explore Our Services <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a
            className="footer-brand"
            href="#home"
            aria-label="ARCSTYLE PROJECT home"
          >
            <Image
              src="/images/logo.png"
              alt="ARCSTYLE PROJECT"
              width={500}
              height={300}
              className="footer-logo"
            />
          </a>

          <div className="footer-description">
            <p>
              Architecture, construction, and real estate solutions shaped
              around your vision.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} ARCSTYLE PROJECT. All rights reserved.
          </p>
          <p>
            <span>BUILDING TODAY</span> | DESIGNING TOMORROW
          </p>
        </div>
      </footer>
    </>
  );
}
