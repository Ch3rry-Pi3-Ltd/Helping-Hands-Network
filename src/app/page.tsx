import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ArrowRightIcon, HandsIcon, HeartIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { QuoteCard } from "@/components/quote-card";
import { SectionHeading } from "@/components/section-heading";
import { projects, testimonials } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Healing the after-effects of war</p>
            <h1>
              Gentle support.
              <br />
              <em>Lasting hope.</em>
            </h1>
            <p className="hero-intro">
              Healing Hands Network is a UK charity of volunteer complementary
              therapists supporting people affected by war, overseas and at
              home.
            </p>
            <div className="button-row">
              <ButtonLink href="/support-us">Support our work</ButtonLink>
              <ButtonLink href="/our-work" variant="secondary">
                See what we do
              </ButtonLink>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-wrap">
              <Image
                src="/images/therapy-session.jpg"
                alt="A Healing Hands Network volunteer providing a complementary therapy session"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="hero-note">
              <HeartIcon />
              <p>
                <strong>Care without judgement</strong>
                Supporting people regardless of race, colour or creed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="About the charity">
        <div className="site-container trust-grid">
          <div>
            <strong>Since 1996</strong>
            <span>Working alongside people affected by war</span>
          </div>
          <div>
            <strong>Volunteer-led</strong>
            <span>Qualified therapists giving their time and skills</span>
          </div>
          <div>
            <strong>Three areas</strong>
            <span>Bosnia, Ukraine and UK veterans</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Where we work"
            title="Care that reaches across borders"
            intro="From Sarajevo to communities across the UK and Ukraine, our work is shaped by what people affected by conflict need most."
            align="center"
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container story-grid">
          <div className="story-media">
            <Image
              src="/images/hands-therapy.jpg"
              alt="A close view of hands during a complementary therapy treatment"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <div className="story-year">
              <strong>1996</strong>
              <span>Where our story began</span>
            </div>
          </div>
          <div className="story-copy">
            <SectionHeading
              eyebrow="Our story"
              title="It began with a simple question: how can we help?"
            />
            <p>
              After watching the Balkan conflict and the siege of Sarajevo,
              three women travelled to Bosnia and Herzegovina with the skills
              they had: their healing hands.
            </p>
            <p>
              They offered Reiki, healing and complementary therapies freely
              wherever they were needed. Other therapists wanted to help too,
              and Healing Hands Network was born.
            </p>
            <Link href="/about" className="text-link">
              Read our story <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="site-container quote-layout">
          <div>
            <p className="eyebrow">In their words</p>
            <h2>Small moments can make a profound difference.</h2>
          </div>
          <QuoteCard {...testimonials[0]} featured />
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Play your part"
            title="There is more than one way to help"
            intro="Whether you are a therapist or simply believe in the work, you can help Healing Hands Network continue to offer care."
            align="center"
          />
          <div className="action-grid">
            <Link href="/volunteer" className="action-card">
              <span className="action-icon">
                <HandsIcon />
              </span>
              <h3>Give your time</h3>
              <p>Learn about therapist and supporting membership.</p>
              <span className="text-link">
                Volunteer with us <ArrowRightIcon />
              </span>
            </Link>
            <Link href="/support-us" className="action-card action-card-teal">
              <span className="action-icon">
                <HeartIcon />
              </span>
              <h3>Give your support</h3>
              <p>Donate, fundraise or discuss practical sponsorship.</p>
              <span className="text-link">
                Explore ways to help <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Help healing continue"
        title="Together, we can offer a little more peace."
        text="Your support helps volunteers reach people living with the lasting effects of war."
      >
        <ButtonLink href="/support-us" variant="light">
          Support Healing Hands
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Talk to us
        </ButtonLink>
      </CtaBand>
    </>
  );
}
