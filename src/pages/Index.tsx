import Header from "@/components/Header";
import DashboardMetrics from "@/components/DashboardMetrics";
import RoomManagement from "@/components/RoomManagement";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-green-hotel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Sustainable hotel with renewable energy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl font-bold mb-2">Carbon Offset Program</h2>
            <p className="text-lg opacity-90">$2 per night, per room - Making a difference</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardMetrics />
        
        {/* Impact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-success shadow-medium border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8" />
                <div>
                  <h3 className="text-lg font-semibold">Green Certified</h3>
                  <p className="text-sm opacity-90">Environmental leadership program</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Guest Participation</h3>
                  <p className="text-sm text-muted-foreground">92% opt-in rate this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-energy shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Revenue Impact</h3>
                  <p className="text-sm text-white/80">Additional income stream</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <RoomManagement />
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button className="bg-gradient-hero shadow-glow hover:shadow-strong transition-smooth">
            <Leaf className="h-4 w-4 mr-2" />
            Generate Impact Report
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Manage Settings
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
