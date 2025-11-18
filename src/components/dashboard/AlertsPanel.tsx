import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell, ExternalLink } from "lucide-react";

const alerts = [
  {
    id: 1,
    priority: "high",
    title: "Escalation Risk",
    description: "Increased hostile activity near MINUSMA base",
    time: "15 min ago",
  },
  {
    id: 2,
    priority: "medium",
    title: "Supply Chain Delay",
    description: "Medical supplies delayed to UNMISS sector",
    time: "1 hour ago",
  },
  {
    id: 3,
    priority: "medium",
    title: "Weather Advisory",
    description: "Severe weather conditions expected in MONUSCO area",
    time: "2 hours ago",
  },
];

export const AlertsPanel = () => {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Active Alerts</h3>
        </div>
        <Badge variant="destructive">{alerts.length}</Badge>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-4 border-l-4 border-l-destructive">
            <div className="flex items-start gap-3">
              <AlertTriangle className={`h-5 w-5 flex-shrink-0 ${
                alert.priority === 'high' ? 'text-destructive' : 'text-warning'
              }`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-medium text-sm text-foreground">{alert.title}</h4>
                  <Badge 
                    variant={alert.priority === 'high' ? 'destructive' : 'outline'}
                    className="text-xs"
                  >
                    {alert.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    Details
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4">
        View All Alerts
      </Button>
    </Card>
  );
};
