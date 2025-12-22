import { useState } from "react";
import { Plus, ChevronsUpDown, Check } from "lucide-react";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type CreateTicketDialogProps = {
    onCreate: (data: {
        title: string;
        problem: string;
        priority: string;
        description?: string;
    }) => void;
};

export function CreateTicketDialog({ onCreate }: CreateTicketDialogProps) {
    const [open, setOpen] = useState(false);
    const [comboOpen, setComboOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [problem, setProblem] = useState("");
    const [priority, setPriority] = useState("Média");
    const [description, setDescription] = useState("");

    const problems = ["Software", "Hardware", "Rede", "Outro"];

    function handleSubmit() {
        onCreate({
            title,
            problem,
            priority,
            description: description || undefined,
        });

        setOpen(false);
        setTitle("");
        setProblem("");
        setPriority("Média");
        setDescription("");
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4 text-sky-200" />
                    Novo Chamado
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="sm:max-w-lg">
                <AlertDialogHeader>
                    <AlertDialogTitle>Novo Chamado</AlertDialogTitle>
                    <AlertDialogDescription>
                        Preencha as informações abaixo para criar um chamado.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="space-y-4 mt-4">
                    <div className="space-y-1">
                        <Label htmlFor="title">Título</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Digite o título do chamado"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="description">
                            Descrição <span className="text-muted-foreground">(opcional)</span>
                        </Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detalhes adicionais"
                            className="resize-none"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label>Problema</Label>
                        <Popover open={comboOpen} onOpenChange={setComboOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" className="w-full justify-between">
                                    {problem || "Selecione o problema"}
                                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Pesquisar..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>Nenhum problema encontrado.</CommandEmpty>
                                        <CommandGroup>
                                            {problems.map((p) => (
                                                <CommandItem
                                                    key={p}
                                                    onSelect={() => {
                                                        setProblem(p);
                                                        setComboOpen(false);
                                                    }}
                                                >
                                                    {p}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            problem === p ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-1">
                        <Label>Prioridade</Label>
                        <RadioGroup value={priority} onValueChange={setPriority} className="flex gap-4">
                            {["Baixa", "Média", "Alta"].map((p) => (
                                <div key={p} className="flex items-center space-x-2">
                                    <RadioGroupItem value={p} id={`priority-${p}`} />
                                    <Label htmlFor={`priority-${p}`}>{p}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                        Criar Chamado
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}