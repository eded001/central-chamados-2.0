export function getStatusBadgeVariant(status: string) {
    switch (status.toLowerCase()) {
        case "em aberto":
            return "border-blue-500 text-blue-500";
        case "respondido":
            return "border-yellow-500 text-yellow-500";
        case "resolvido":
            return "border-green-500 text-green-500";
        default:
            return "border-slate-300 text-slate-700";
    }
}