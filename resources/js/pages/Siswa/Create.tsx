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
import { Plus } from "lucide-react";
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
interface Ortu {
    id: number;
    nama_ortu: string;
}

export default function Create({ text, list_kelas, list_ortu }: { text: string, list_kelas: Kelas[], list_ortu: Ortu[] }) {
    const { errors, flash } = usePage().props;

    const { data, setData, post, processing } = useForm({
        nama_siswa: '',
        kelas_id: '',
        ortu_id: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/siswa');
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus /> Tambah {text}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Tambah {text}</DialogTitle>
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
                            <Label htmlFor="name-1">Daftar Kelas</Label>
                            <Select onValueChange={(value) => setData('kelas_id', value)}  name="kelas_id">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih Kelas" />
                                </SelectTrigger>
                                <SelectContent>
                                    {list_kelas.map((kelas) => (
                                        <SelectItem key={kelas.id} value={kelas.id.toString()}>{kelas.nama_kelas}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors && (<div className="text-sm text-red-600 mt-2">{errors.kelas_id}</div>
                            )}
                            <Label htmlFor="name-1">Daftar Orang Tua</Label>
                            <Select onValueChange={(value) => setData('ortu_id', value)}  name="ortu_id">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih Orang Tua" />
                                </SelectTrigger>
                                <SelectContent>
                                    {list_ortu.map((kelas) => (
                                        <SelectItem key={kelas.id} value={kelas.id.toString()}>{kelas.nama_ortu}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors && (<div className="text-sm text-red-600 mt-2">{errors.ortu_id}</div>
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

