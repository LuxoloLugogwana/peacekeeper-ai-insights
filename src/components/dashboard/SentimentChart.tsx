import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { date: "Jan", positive: 65, neutral: 25, negative: 10 },
  { date: "Feb", positive: 68, neutral: 23, negative: 9 },
  { date: "Mar", positive: 62, neutral: 28, negative: 10 },
  { date: "Apr", positive: 70, neutral: 22, negative: 8 },
  { date: "May", positive: 73, neutral: 20, negative: 7 },
  { date: "Jun", positive: 75, neutral: 18, negative: 7 },
];

export const SentimentChart = () => {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Public Sentiment Analysis</h3>
        <p className="text-sm text-muted-foreground">OSINT-derived sentiment trends across all missions</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis 
            dataKey="date" 
            className="text-xs"
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis 
            className="text-xs"
            stroke="hsl(var(--muted-foreground))"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="positive" 
            stroke="hsl(var(--success))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--success))" }}
          />
          <Line 
            type="monotone" 
            dataKey="neutral" 
            stroke="hsl(var(--chart-1))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))" }}
          />
          <Line 
            type="monotone" 
            dataKey="negative" 
            stroke="hsl(var(--destructive))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--destructive))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
