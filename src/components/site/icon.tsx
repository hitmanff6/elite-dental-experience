import {
  AlignHorizontalDistributeCenter,
  Anchor,
  Baby,
  Brain,
  CalendarClock,
  Cpu,
  Gem,
  GraduationCap,
  HeartPulse,
  Microscope,
  Radar,
  ScanLine,
  ShieldCheck,
  Siren,
  Sparkles,
  Sun,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Name → component map so content data can stay serialisable. */
const registry: Record<string, LucideIcon> = {
  AlignHorizontalDistributeCenter,
  Anchor,
  Baby,
  Brain,
  CalendarClock,
  Cpu,
  Gem,
  GraduationCap,
  HeartPulse,
  Microscope,
  Radar,
  ScanLine,
  ShieldCheck,
  Siren,
  Sparkles,
  Sun,
  Wallet,
  Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
