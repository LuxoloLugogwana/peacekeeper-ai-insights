import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Shield, Users, AlertTriangle, CheckCircle } from "lucide-react";

const metrics = [
  {
    title: "Active Missions",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Shield,
    color: "text-primary",
  },
  {
    title: "Personnel Deployed",
    value: "87,234",
    change: "+3.2%",
    trend: "up",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Civilian Safety Index",
    value: "76.8%",
    change: "+5.1%",
    trend: "up",
    icon: CheckCircle,
    color: "text-success",
  },
  {
    title: "Active Alerts",
    value: "8",
    change: "-2",
    trend: "down",
    icon: AlertTriangle,
    color: "text-warning",
  },
];

export const MetricsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={metric.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className="flex items-center gap-1">
                  <TrendIcon className={`h-4 w-4 ${metric.trend === "up" ? "text-success" : "text-destructive"}`} />
                  <span className={`text-sm font-medium ${metric.trend === "up" ? "text-success" : "text-destructive"}`}>
                    {metric.change}
                  </span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-secondary`}>
                <Icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
