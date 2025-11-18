import { Button } from "@/components/ui/button";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Exit() {
    return (
        <Button variant="secondary">
            <p className="font-bold">Sair</p>
            <FaArrowRightToBracket />
        </Button>
    );
}