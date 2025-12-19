export function getStatusBadgeVariant(status: string) {
    switch (status.toLowerCase()) {
        case "em aberto":
            return "border-sky-500 text-sky-500";
        case "respondido":
            return "border-yellow-500 text-yellow-500";
        case "resolvido":
            return "border-green-500 text-green-500";
        default:
            return "border-slate-300 text-slate-700";
    }
}