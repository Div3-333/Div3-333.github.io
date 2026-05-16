import { Activity, CheckCircle2, GraduationCap, Shield } from 'lucide-react';

const metricIcons = {
  activity: Activity,
  check: CheckCircle2,
  graduation: GraduationCap,
  shield: Shield,
};

export function MetricTile({ metric }) {
  const Icon = metricIcons[metric.icon];

  return (
    <div className="metric-tile">
      <div className="metric-icon" aria-hidden="true">
        <Icon size={18} />
      </div>
      <p className="metric-value">{metric.value}</p>
      <p className="metric-label">{metric.label}</p>
      <p className="metric-detail">{metric.detail}</p>
    </div>
  );
}
