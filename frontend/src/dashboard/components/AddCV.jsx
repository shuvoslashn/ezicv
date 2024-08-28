import { PlusIcon, PlusSquare } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddCV() {
    const [cvTitle, setCvTitle] = useState("");

    const onCreate = () => {
        const uuid = uuidv4();
        console.log(cvTitle, uuid);
        setCvTitle("");
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="w-full rounded-md p-8 border flex items-center justify-center bg-zinc-100 border-dashed min-h-72 cursor-pointer hover:scale-[1.03] hover:bg-zinc-200 transition-all duration-300">
                        <PlusIcon className="text-3xl" />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New CV</DialogTitle>
                        <DialogDescription>
                            <label>Add a title for your curriculum vitae</label>
                            <Input
                                className="my-2"
                                placeholder="Ex. Graphic Designer"
                                onChange={(e) => setCvTitle(e.target.value)}
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <div className="flex gap-2 justify-end">
                            <DialogClose asChild>
                                <Button variant="outline">Close</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button
                                    type="submit"
                                    variant="secondary"
                                    disabled={!cvTitle}
                                    onClick={onCreate}
                                >
                                    Create CV
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
