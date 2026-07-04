import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card-${project.accent}`}>
      <div className="project-card-media">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        ) : (
          <div className="ukraine-visual" aria-hidden="true">
            <span className="ukraine-sun" />
            <span className="ukraine-field" />
          </div>
        )}
      </div>
      <div className="project-card-content">
        <p className="card-kicker">Our work</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Link href={project.href} className="text-link">
          Learn more <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}
