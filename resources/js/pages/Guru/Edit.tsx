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
import { Pencil } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface EditGuruProps {
    guru: {
        id: number;
        nama_guru: string;
        kelas: {
            id: number;
            nama_kelas: string;
        }[];
    };
    list_kelas: {
        id: number;
        nama_kelas: string;
    }[];
}

export default function Edit({ guru, list_kelas }: EditGuruProps) {
    const { errors } = usePage().props;

    const { data, setData, put, processing } = useForm<{
        nama_guru: string;
        kelas_id: number[];
    }>({
        nama_guru: guru.nama_guru,
        kelas_id: guru.kelas.map((k) => k.id), 
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/guru/${guru.id}`);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Edit Guru</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                        <Label>Nama Guru</Label>
                        <Input
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
                        <Label>Kelas</Label>
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
                                        className="flex items-center gap-2 p-2 rounded hover:bg-muted"
                                    >
                                        <Checkbox
                                            checked={data.kelas_id.includes(
                                                kelas.id
                                            )}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setData("kelas_id", [
                                                        ...data.kelas_id,
                                                        kelas.id,
                                                    ]);
                                                } else {
                                                    setData(
                                                        "kelas_id",
                                                        data.kelas_id.filter(
                                                            (id) =>
                                                                id !== kelas.id
                                                        )
                                                    );
                                                }
                                            }}
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
