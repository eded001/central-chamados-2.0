interface LogoProps {
    color?: string;
    size?: number;
}

export default function Logo({ color = "bg-zinc-800", size = 50 }: LogoProps) {
    const image = "https://raw.githubusercontent.com/semcult-belem/central-chamados/refs/heads/main/frontend/public/assets/images/logo-prefeitura.png";

    return (
        <div
            className={`
            w-${size} h-${size} ${color}
            mask-[url('${image}')]
            mask-center mask-no-repeat mask-contain
            -webkit-mask-[url('${image}')]
            -webkit-mask-center -webkit-mask-no-repeat -webkit-mask-contain
        `}
        />
    );
}