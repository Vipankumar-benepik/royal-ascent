interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, accent, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {accent && (
        <p className="text-gold font-display text-sm tracking-widest uppercase mb-3">{accent}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
