import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const riskFactors = [
  { name: "Conflict Intensity", value: 68, trend: "increasing" },
  { name: "Civilian Safety", value: 76, trend: "stable" },
  { name: "Resource Availability", value: 82, trend: "improving" },
  { name: "Political Stability", value: 58, trend: "decreasing" },
  { name: "Humanitarian Access", value: 71, trend: "stable" },
];

export const RiskAssessment = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Predictive Risk Assessment</h3>
        <p className="text-sm text-muted-foreground">AI-driven risk factors across all missions</p>
      </div>
      
      <div className="space-y-6">
        {riskFactors.map((factor) => (
          <div key={factor.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{factor.name}</span>
              <span className="text-sm text-muted-foreground">{factor.value}%</span>
            </div>
            <Progress 
              value={factor.value} 
              className="h-2"
            />
            <div className="flex items-center gap-2">
              <span className={`text-xs ${
                factor.trend === 'improving' ? 'text-success' :
                factor.trend === 'decreasing' ? 'text-destructive' :
                'text-muted-foreground'
              }`}>
                {factor.trend === 'improving' ? '↑' : factor.trend === 'decreasing' ? '↓' : '→'} {factor.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
