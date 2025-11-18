import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow } from "date-fns";

export const AlertsPanel = () => {
  const { data: alerts = [], isLoading } = useQuery({
    queryKey: ['alerts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('alerts')
        .select('*, missions(acronym)')
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <Card className="p-6 h-full">
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-muted rounded w-1/3"></div>
          <div className="h-20 bg-muted rounded"></div>
          <div className="h-20 bg-muted rounded"></div>
        </div>
      </Card>
    );
  }
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
        {alerts.length === 0 ? (
          <Card className="p-4">
            <p className="text-sm text-muted-foreground text-center">No active alerts</p>
          </Card>
        ) : (
          alerts.map((alert) => (
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
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(alert.created_at), { addSuffix: true })}
                    </span>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      Details
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      <Button variant="outline" className="w-full mt-4">
        View All Alerts
      </Button>
    </Card>
  );
};
