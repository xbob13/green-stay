import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, MapPin, DollarSign, Leaf } from "lucide-react";

interface Room {
  id: string;
  number: string;
  type: string;
  status: "occupied" | "available" | "maintenance";
  carbonOffsetEnabled: boolean;
  guestName?: string;
  checkIn?: string;
  checkOut?: string;
  offsetFee: number;
}

const mockRooms: Room[] = [
  {
    id: "1",
    number: "101",
    type: "Standard",
    status: "occupied",
    carbonOffsetEnabled: true,
    guestName: "John Smith",
    checkIn: "Dec 20",
    checkOut: "Dec 23",
    offsetFee: 6.00
  },
  {
    id: "2",
    number: "102",
    type: "Deluxe",
    status: "occupied",
    carbonOffsetEnabled: true,
    guestName: "Sarah Johnson",
    checkIn: "Dec 19",
    checkOut: "Dec 22",
    offsetFee: 4.00
  },
  {
    id: "3",
    number: "201",
    type: "Suite",
    status: "available",
    carbonOffsetEnabled: true,
    offsetFee: 0
  },
  {
    id: "4",
    number: "202",
    type: "Standard",
    status: "occupied",
    carbonOffsetEnabled: false,
    guestName: "Mike Wilson",
    checkIn: "Dec 21",
    checkOut: "Dec 24",
    offsetFee: 0
  }
];

const getStatusColor = (status: Room["status"]) => {
  switch (status) {
    case "occupied":
      return "bg-success text-success-foreground";
    case "available":
      return "bg-secondary text-secondary-foreground";
    case "maintenance":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-smooth border-0">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bed className="h-4 w-4 text-primary" />
            <CardTitle className="text-lg">Room {room.number}</CardTitle>
          </div>
          <Badge className={getStatusColor(room.status)}>
            {room.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{room.type}</p>
      </CardHeader>
      <CardContent>
        {room.status === "occupied" && (
          <div className="space-y-2 mb-4">
            <p className="text-sm font-medium">{room.guestName}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              {room.checkIn} - {room.checkOut}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {room.carbonOffsetEnabled ? (
              <div className="flex items-center space-x-1">
                <Leaf className="h-4 w-4 text-success" />
                <span className="text-sm text-success font-medium">Carbon Offset Active</span>
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">No Carbon Offset</span>
            )}
          </div>
          
          {room.offsetFee > 0 && (
            <div className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3 text-accent" />
              <span className="text-sm font-medium">${room.offsetFee.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <Button 
          variant={room.carbonOffsetEnabled ? "secondary" : "default"} 
          size="sm" 
          className="w-full mt-3"
        >
          {room.carbonOffsetEnabled ? "Disable Offset" : "Enable Offset"}
        </Button>
      </CardContent>
    </Card>
  );
};

const RoomManagement = () => {
  return (
    <Card className="shadow-medium border-0">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Room Management</CardTitle>
        <p className="text-muted-foreground">Manage carbon offset charges for each room</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomManagement;