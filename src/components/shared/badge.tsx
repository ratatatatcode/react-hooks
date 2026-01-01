export default function Badge({
  icon,
  text,
  bg_color,
  text_color,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  bg_color: string;
  text_color: string;
  link: string;
}) {
  return (
    <a
      className={`flex items-center justify-center gap-2 no-underline ${bg_color} ${text_color} px-3.5`}
      href={link}
    >
      <span>{icon}</span>
      {text}
    </a>
  );
}
