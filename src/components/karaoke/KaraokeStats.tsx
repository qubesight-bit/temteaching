import { Trophy, Flame, Target, BookOpen } from 'lucide-react';
import { useGamification } from '@/hooks/useGamification';

export function KaraokeStats() {
  const { state } = useGamification();

  const stats = [
    {
      icon: Trophy,
      label: 'Sesiones Completadas',
      value: state.totalLessons,
      color: 'text-yellow-500',
    },
    {
      icon: Target,
      label: 'Puntuación Promedio',
      value: `${state.accuracy}%`,
      color: 'text-green-500',
    },
    {
      icon: Flame,
      label: 'Días Consecutivos',
      value: state.currentStreak,
      color: 'text-orange-500',
    },
    {
      icon: BookOpen,
      label: 'Palabras Aprendidas',
      value: state.totalWords,
      color: 'text-blue-500',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card rounded-lg border p-4 text-center"
        >
          <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
