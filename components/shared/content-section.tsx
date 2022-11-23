type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const ContentSection = ({ id, title, children }: Props) => {
  return (
    <section id={id} className="flex flex-col items-center gap-4 space-y-8 scroll-mt-24">
      <div className="flex flex-col items-center gap-4">
        <slot name="eyebrow" />
        <h2 className="text-6xl font-extrabold tracking-tight text-center gradient-text">{title}</h2>
      </div>
      <p className="max-w-xl text-2xl font-extrabold text-center">{children}</p>
      <slot />
    </section>
  );
};

export default ContentSection;
