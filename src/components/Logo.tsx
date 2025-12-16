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
                    className={`
                        w-full h-full ${color}
                        mask-[url('${image}')]
                        mask-center mask-no-repeat mask-contain
                        [-webkit-mask:url('${image}')]
                        [-webkit-mask-position:center]
                        [-webkit-mask-repeat:no-repeat]
                        [-webkit-mask-size:contain]
                    `}
                />
            </AspectRatio>
        </div>
    );
}