import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Info, TrendingUp } from "lucide-react";

const events = [
  {
    id: 1,
    type: "incident",
    title: "Ceasefire violation detected",
    location: "MINUSMA - Mali",
    time: "2 hours ago",
    severity: "high",
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: "success",
    title: "Humanitarian corridor established",
    location: "UNMISS - South Sudan",
    time: "5 hours ago",
    severity: "positive",
    icon: CheckCircle,
  },
  {
    id: 3,
    type: "info",
    title: "Patrol route completed without incident",
    location: "MONUSCO - DRC",
    time: "8 hours ago",
    severity: "neutral",
    icon: Info,
  },
  {
    id: 4,
    type: "trend",
    title: "Displacement trends decreasing",
    location: "UNFICYP - Cyprus",
    time: "12 hours ago",
    severity: "positive",
    icon: TrendingUp,
  },
];

export const EventTimeline = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Event Detection Timeline</h3>
        <p className="text-sm text-muted-foreground">AI-powered conflict and humanitarian event monitoring</p>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={event.id} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className={`p-2 rounded-full ${
                  event.severity === 'high' ? 'bg-destructive/10' :
                  event.severity === 'positive' ? 'bg-success/10' :
                  'bg-primary/10'
                }`}>
                  <Icon className={`h-4 w-4 ${
                    event.severity === 'high' ? 'text-destructive' :
                    event.severity === 'positive' ? 'text-success' :
                    'text-primary'
                  }`} />
                </div>
                {index < events.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              
              {/* Event content */}
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">{event.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{event.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {event.time}
                  </span>
                </div>
                <Badge 
                  variant={event.severity === 'high' ? 'destructive' : 'outline'}
                  className="mt-2"
                >
                  {event.severity === 'high' ? 'Critical' : 
                   event.severity === 'positive' ? 'Positive' : 'Info'}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
