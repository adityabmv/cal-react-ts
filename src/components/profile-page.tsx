import { Component } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Import ShadCN Badge and utility

class ProfilePage extends Component {


    render() {
        return (
            <div className="p-6 bg-background text-foreground min-h-screen">
                {/* Header Component */}
                <div className="flex items-center gap-4 bg-card text-card-foreground p-2 shadow-sm rounded-lg">
                    {/* Profile Picture */}

                    <Avatar className="h-20 w-20">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Inst.</AvatarFallback>
                    </Avatar>
                    {/* User Details */}
                    
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold">Indian Institute of Technology, Ropar</h1>
                        <p className="text-sm text-muted-foreground">
                            Since 2008 • Public • Ropar, India
                        </p>
                        <Badge variant="default">Active</Badge>
                    </div>
                    {/* Additional Info */}
                    <div className="text-sm text-muted-foreground space-y-1">
                        <p>📅 Joined Mar 2022</p>
                        <p>👀 Attended 7 days ago</p>
                    </div>
                    {/* Contact Info */}
                    <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                        <p>📧 charlottebell@gmail.com</p>
                        <p>📞 +1 0987654321</p>
                    </div>
                </div>

                {/* Programs Component */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Programs</h2>
                    <div className="flex gap-4 mt-4">
                        {/* Active Program */}
                        <div className="bg-card text-card-foreground p-4 shadow-sm rounded-lg flex-1">
                            <div className="flex items-center gap-2">
                                <Badge variant="default">Active</Badge>
                            </div>
                            <h3 className="text-md font-semibold mt-2">
                                Little Tigers Karate
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Upcoming: Monday, 4:00 PM - 5:00 PM
                            </p>
                        </div>
                        {/* Canceled Program */}
                        <div className="bg-card text-card-foreground p-4 shadow-sm rounded-lg flex-1">
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary">Canceled</Badge>
                            </div>
                            <h3 className="text-md font-semibold mt-2">Swimming Dolphin</h3>
                            <p className="text-sm text-muted-foreground">
                                Upcoming: Monday, 4:00 PM - 5:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabs Component */}
                <div className="mt-6">
                    <div className="flex gap-6 border-b border-border">
                        {["Activity", "Payments", "Attendance History", "Documents", "Family (4)"].map(
                            (tab, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "pb-2 text-sm",
                                        index === 0
                                            ? "text-primary border-b-2 border-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {tab}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
