import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, DollarSign, Building, BarChart3 } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const MetricCard = ({ title, value, subtitle, icon, trend, trendValue }: MetricCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-smooth border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="p-2 bg-primary/10 rounded-full">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-muted-foreground">{subtitle}</p>
          {trend && trendValue && (
            <Badge 
              variant={trend === "up" ? "default" : "secondary"}
              className={trend === "up" ? "bg-success text-success-foreground" : ""}
            >
              {trendValue}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <MetricCard
        title="Carbon Credits Offset"
        value="1,247"
        subtitle="This month"
        icon={<Leaf className="h-4 w-4 text-success" />}
        trend="up"
        trendValue="+12%"
      />
      <MetricCard
        title="Revenue Generated"
        value="$2,494"
        subtitle="Carbon offset fees"
        icon={<DollarSign className="h-4 w-4 text-accent" />}
        trend="up"
        trendValue="+8%"
      />
      <MetricCard
        title="Participating Rooms"
        value="89%"
        subtitle="Of total capacity"
        icon={<Building className="h-4 w-4 text-primary" />}
        trend="up"
        trendValue="+3%"
      />
      <MetricCard
        title="Environmental Impact"
        value="2.1 tons"
        subtitle="CO₂ offset this month"
        icon={<BarChart3 className="h-4 w-4 text-success" />}
        trend="up"
        trendValue="+15%"
      />
    </div>
  );
};

export default DashboardMetrics;