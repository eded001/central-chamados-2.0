import { PiBracketsCurlyDuotone, PiGithubLogoDuotone } from "react-icons/pi";
import Link from "@/components/Link";

export default function About() {
    return (
        <p>
            <Link url="https://eded001.github.io/portfolio/">
                <PiBracketsCurlyDuotone
                    className="inline mb-1 mr-2 text-sky-700 hover:text-sky-800 transition-colors"
                    size={24}
                />
            </Link>
            <Link url="https://github.com/semcult-belem/central-chamados">
                <PiGithubLogoDuotone
                    className="inline mb-1 mr-2 text-sky-700 hover:text-sky-800 transition-colors"
                    size={24}
                />
            </Link>
        </p>
    );
}