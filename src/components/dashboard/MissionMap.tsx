import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const missions = [
  { id: 1, name: "UNMISS", location: "South Sudan", status: "active", risk: "medium", x: 52, y: 55 },
  { id: 2, name: "MINUSMA", location: "Mali", status: "active", risk: "high", x: 48, y: 48 },
  { id: 3, name: "MONUSCO", location: "DRC", status: "active", risk: "medium", x: 52, y: 58 },
  { id: 4, name: "UNFICYP", location: "Cyprus", status: "stable", risk: "low", x: 54, y: 40 },
  { id: 5, name: "UNIFIL", location: "Lebanon", status: "active", risk: "medium", x: 55, y: 42 },
];

export const MissionMap = () => {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Global Mission Overview</h3>
        <p className="text-sm text-muted-foreground">Real-time monitoring of peacekeeping operations</p>
      </div>
      
      <div className="relative w-full aspect-[2/1] bg-secondary rounded-lg overflow-hidden">
        {/* Simplified world map background */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <path
              d="M10,25 Q20,20 30,25 T50,25 T70,25 T90,25"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-foreground"
            />
            <path
              d="M15,30 Q25,28 35,30 T55,30 T75,30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-foreground"
            />
          </svg>
        </div>

        {/* Mission markers */}
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="absolute group cursor-pointer"
            style={{ left: `${mission.x}%`, top: `${mission.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative">
              <div className={`h-3 w-3 rounded-full animate-pulse ${
                mission.risk === 'high' ? 'bg-destructive' :
                mission.risk === 'medium' ? 'bg-warning' :
                'bg-success'
              }`} />
              <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                mission.risk === 'high' ? 'bg-destructive' :
                mission.risk === 'medium' ? 'bg-warning' :
                'bg-success'
              }`} />
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Card className="p-3 shadow-lg whitespace-nowrap">
                <div className="space-y-1">
                  <p className="font-semibold text-sm text-foreground">{mission.name}</p>
                  <p className="text-xs text-muted-foreground">{mission.location}</p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {mission.status}
                    </Badge>
                    <Badge 
                      variant={mission.risk === 'high' ? 'destructive' : mission.risk === 'medium' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {mission.risk} risk
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-success" />
          <span className="text-muted-foreground">Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-warning" />
          <span className="text-muted-foreground">Medium Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-destructive" />
          <span className="text-muted-foreground">High Risk</span>
        </div>
      </div>
    </Card>
  );
};
