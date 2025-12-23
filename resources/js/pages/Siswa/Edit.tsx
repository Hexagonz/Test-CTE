import { useState } from "react";
import { router, Form, usePage, useForm } from "@inertiajs/react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { PencilIcon, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Kelas {
    id: number;
    nama_kelas: string;
}

interface Siswa {
    id: number;
    nama_siswa: string;
    kelas_id: number;
    kelas: Kelas;
}

export default function Edit({ text, list_kelas, siswa }: { text: string, list_kelas: Kelas[], siswa: Siswa }) {
    const { errors, flash } = usePage().props;

    const { data, setData, put, processing } = useForm({
        nama_siswa: siswa.nama_siswa,
        kelas_id: siswa.kelas_id,
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        put('/siswa/' + siswa.id);
    };

    console.log(siswa);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <PencilIcon />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit {text}</DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-4">
                        <div className="grid gap-3 py-4">
                            <Label htmlFor="name-1">Nama {text}</Label>
                            <Input
                                id="name-1"
                                name="nama_siswa"
                                placeholder="Nama"
                                value={data.nama_siswa}
                                onChange={(e) => setData('nama_siswa', e.target.value)}
                            />
                            {errors && (<div className="text-sm text-red-600 mt-2">{errors.nama_siswa}</div>
                            )}
                            <Label htmlFor="name-2">Daftar Kelas</Label>
                            <Select value={data.kelas_id.toString()} onValueChange={(value) => setData('kelas_id', parseInt(value))} name="kel_id" >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih Kelas"  />
                                </SelectTrigger>
                                <SelectContent>
                                    {list_kelas.map((kelas) => (
                                        <SelectItem key={kelas.id} value={kelas.id.toString()}>{kelas.nama_kelas}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors && (<div className="text-sm text-red-600 mt-2">{errors.kelas_id}</div>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Batal</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>Simpan</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );

}

