import { useForm, usePage } from "@inertiajs/react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface GuruKelas {
    text: string;
    list_kelas: {
        id: number;
        nama_kelas: string;
    }[];
}

export default function Create({ text, list_kelas }: GuruKelas) {
    const { errors } = usePage().props;

    const { data, setData, post, processing } = useForm<{
        nama_guru: string;
        kelas_id: number[];
    }>({
        nama_guru: "",
        kelas_id: [],
    });

    const toggleKelas = (id: number) => {
        setData(
            "kelas_id",
            data.kelas_id.includes(id)
                ? data.kelas_id.filter((k) => k !== id)
                : [...data.kelas_id, id]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/guru");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="mr-1 h-4 w-4" /> Tambah {text}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Tambah {text}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                        <Label>Nama {text}</Label>
                        <Input
                            name="nama_guru"
                            placeholder="Nama"
                            value={data.nama_guru}
                            onChange={(e) =>
                                setData("nama_guru", e.target.value)
                            }
                        />
                        {errors?.nama_guru && (
                            <p className="text-sm text-red-600">
                                {errors.nama_guru}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label>Pilih Kelas</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    {data.kelas_id.length > 0
                                        ? `${data.kelas_id.length} kelas dipilih`
                                        : "Pilih Kelas"}
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-full p-2  relative right-35">
                                {list_kelas.map((kelas) => (
                                    <div
                                        key={kelas.id}
                                        className="flex  gap-2 p-2 rounded hover:bg-muted"
                                    >
                                        <Checkbox
                                            checked={data.kelas_id.includes(
                                                kelas.id
                                            )}
                                            onCheckedChange={() =>
                                                toggleKelas(kelas.id)
                                            }
                                        />
                                        <span className="text-sm">
                                            {kelas.nama_kelas}
                                        </span>
                                    </div>
                                ))}
                            </PopoverContent>
                        </Popover>

                        {errors?.kelas_id && (
                            <p className="text-sm text-red-600">
                                {errors.kelas_id}
                            </p>
                        )}
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Batal</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            Simpan
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
