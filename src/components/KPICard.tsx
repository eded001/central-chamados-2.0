import React from "react";

export default function KPICard({
    title,
    value,
    icon: Icon,
    iconColor
}: {
    title: string;
    value: number;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
}) {
    return (
        <div className="rounded-lg border">
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-600">{title}</h3>
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                </div>
                <div className="text-2xl font-bold">{value}</div>
            </div>
        </div>
    );
}