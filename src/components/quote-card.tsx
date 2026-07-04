type QuoteCardProps = {
  quote: string;
  attribution: string;
  featured?: boolean;
};

export function QuoteCard({
  quote,
  attribution,
  featured = false,
}: QuoteCardProps) {
  return (
    <figure className={featured ? "quote-card quote-card-featured" : "quote-card"}>
      <blockquote>“{quote}”</blockquote>
      <figcaption>{attribution}</figcaption>
    </figure>
  );
}
