import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, AlertTriangle } from "lucide-react";

const PRIORITY_COLORS = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
};

const STATUS_COLORS = {
    Open: "bg-blue-100 text-blue-700",
    Closed: "bg-gray-200 text-gray-700",
};

export default function Ticket({ children, name, status, priority, date }) {
    const dateLabel = status === "Closed" ? `Fechado em ${date}` : `Aberto em ${date}`;

    return (
        <Card className="p-4 flex flex-col gap-3 bg-blue-300">
            <CardHeader className="p-0 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <CardTitle className="text-lg font-semibold text-sky-800">
                        {name}
                    </CardTitle>

                    {status === "Closed" ? (
                        <BadgeCheck size={18} className="text-green-600" />
                    ) : (
                        <AlertTriangle size={18} className="text-yellow-600" />
                    )}
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <Badge className={`${STATUS_COLORS[status]} px-2 py-1 rounded-xl font-medium`}>
                        {status}
                    </Badge>

                    <Badge className={`${PRIORITY_COLORS[priority]} px-2 py-1 rounded-xl font-medium`}>
                        Priority: {priority}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="p-0 text-sm">
                <CardDescription className="flex justify-between">
                    <p className="text-sky-700">{children}</p>

                    <span className="text-xs text-muted-foreground">{dateLabel}</span>
                </CardDescription>
            </CardContent>
        </Card>
    );
}