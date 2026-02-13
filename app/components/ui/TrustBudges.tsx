import { JSX } from "react";

export default function TrustBadges(): JSX.Element {
  const badges: { icon: string; text: string }[] = [
    {
      icon: "🏆",
      text: "Award-Winning Designs",
    },
    {
      icon: "⚡",
      text: "Fast Loading Sites",
    },
    {
      icon: "📈",
      text: "Proven Results",
    },
    {
      icon: "🤝",
      text: "127+ Happy Clients",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {badges.map((badge, index: number) => (
        <div
          key={index}
          className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
        >
          <span className="text-lg mr-2">{badge.icon}</span>
          <span className="text-sm font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
