import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LogoProps {
    color?: string;
    size?: number;
}

export default function Logo({ color = "bg-zinc-800", size = 50 }: LogoProps) {
    const image = "https://raw.githubusercontent.com/semcult-belem/central-chamados/refs/heads/main/frontend/public/assets/images/logo-prefeitura.png";

    return (
        <div style={{ width: size }}>
            <AspectRatio ratio={1}>
                <div
                    className={`w-full h-full ${color}`}
                    style={{
                        maskImage: `url(${image})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskImage: `url(${image})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                    }}
                />
            </AspectRatio>
        </div>
    );
}