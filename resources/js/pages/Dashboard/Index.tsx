import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Index({ kelas } : { kelas: Array<{ id: number; nama_kelas: string; siswa: Array<{ id: number; nama_siswa: string }>; guru: Array<{ id: number; nama_guru: string }>; }> }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div className="space-y-8 p-6">
            <Card>
                <CardHeader>
                    <CardTitle>
                        5. List Siswa Berdasarkan Kelas
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Kelas</TableHead>
                                <TableHead>Daftar Siswa</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {kelas.map(k => (
                                <TableRow key={`siswa-${k.id}`}>
                                    <TableCell className="font-medium">
                                        {k.nama_kelas}
                                    </TableCell>
                                    <TableCell>
                                        {k.siswa.length
                                            ? k.siswa.map(s => s.nama_siswa).join(", ")
                                            : "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>


            <Card>
                <CardHeader>
                    <CardTitle>
                        6. List Guru Berdasarkan Kelas
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Kelas</TableHead>
                                <TableHead>Daftar Guru</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {kelas.map(k => (
                                <TableRow key={`guru-${k.id}`}>
                                    <TableCell className="font-medium">
                                        {k.nama_kelas}
                                    </TableCell>
                                    <TableCell>
                                        {k.guru.length
                                            ? k.guru.map(g => g.nama_guru).join(", ")
                                            : "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        7. List Siswa, Kelas, dan Guru
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Kelas</TableHead>
                                <TableHead>Siswa</TableHead>
                                <TableHead>Guru</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {kelas.map(k => (
                                <TableRow key={`all-${k.id}`}>
                                    <TableCell className="font-medium">
                                        {k.nama_kelas}
                                    </TableCell>
                                    <TableCell>
                                        {k.siswa.length
                                            ? k.siswa.map(s => s.nama_siswa).join(", ")
                                            : "-"}
                                    </TableCell>
                                    <TableCell>
                                        {k.guru.length
                                            ? k.guru.map(g => g.nama_guru).join(", ")
                                            : "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        </div>
    </AppLayout>
        
    )
}
