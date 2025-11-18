import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { MissionMap } from "@/components/dashboard/MissionMap";
import { SentimentChart } from "@/components/dashboard/SentimentChart";
import { EventTimeline } from "@/components/dashboard/EventTimeline";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { RiskAssessment } from "@/components/dashboard/RiskAssessment";
import { Shield, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">UN Peacekeeping Monitor</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Mission Effectiveness Analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <Activity className="h-3 w-3" />
                Live
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-6 space-y-6">
        {/* KPI Cards */}
        <MetricsOverview />

        {/* Map and Alerts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MissionMap />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </div>

        {/* Analytics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SentimentChart />
          <RiskAssessment />
        </div>

        {/* Event Timeline */}
        <EventTimeline />
      </main>
    </div>
  );
};

export default Index;
