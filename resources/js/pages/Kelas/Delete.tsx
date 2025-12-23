import { useState } from "react";
import { router, Form } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface Error {
    nama_kelas: string;
}

export default function Delete({ id }: { errors?: Error, id: number }) {

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        router.delete(`/kelas/${id}`, {
            preserveState: true,
            preserveScroll: true,
        });

    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive"><Trash /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Anda Yakin?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Data Yang Anda Hapus Tidak Akan Bisa Dikembalikan Lagi.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-500' onClick={(e) => handleSubmit(e, id)}>Hapus</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}
