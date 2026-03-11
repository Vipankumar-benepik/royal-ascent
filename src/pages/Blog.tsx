import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "choosing-right-elevator",
    title: "How to Choose the Right Elevator for Your Building",
    excerpt: "A comprehensive guide covering traffic analysis, code requirements, and total cost of ownership for architects and developers.",
    date: "2026-02-15",
    category: "Guide",
  },
  {
    slug: "elevator-maintenance-schedule",
    title: "The True Cost of Deferred Elevator Maintenance",
    excerpt: "Why preventive maintenance programs pay for themselves—and what happens when buildings skip them.",
    date: "2026-01-28",
    category: "Maintenance",
  },
  {
    slug: "home-elevator-trends",
    title: "2026 Trends in Residential Elevator Design",
    excerpt: "From minimalist glass shafts to smart home integration, the residential elevator market is evolving rapidly.",
    date: "2026-01-10",
    category: "Industry",
  },
  {
    slug: "vacuum-elevator-technology",
    title: "Understanding Vacuum Elevator Technology",
    excerpt: "How pneumatic elevators work, where they excel, and the engineering trade-offs compared to traditional systems.",
    date: "2025-12-20",
    category: "Technology",
  },
];

const Blog = () => {
  return (
    <div className="pt-20">
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Insights & Resources
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Technical articles, industry analysis, and practical guidance from our engineering team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding section-padding-y">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <article className="border-t border-border pt-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-gold font-display text-xs tracking-widest">{post.category}</span>
                    <span className="text-muted-foreground text-xs">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-display mb-3">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link to={`/blog`} className="text-signal-blue text-sm hover:underline">
                    Read article →
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
