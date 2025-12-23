import { useState } from "react";
import { router, Form, usePage, useForm } from "@inertiajs/react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { PencilIcon, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";



export default function Create({ text }: {  text: string }) {
    const { errors, flash } = usePage().props;

    const { data,setData, post, processing } = useForm({
        nama_kelas: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

       post('/kelas');
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
                                name="nama_kelas"
                                placeholder="Nama"
                                value={data.nama_kelas}
                                onChange={(e) => setData('nama_kelas', e.target.value)}
                            />
                            {errors && (<div className="text-sm text-red-600 mt-2">{errors.nama_kelas}</div>
                            )}
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Batal</Button>
                        </DialogClose>
                        <Button type="submit"  disabled={processing}>Simpan</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );

}
