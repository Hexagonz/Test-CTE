
import AppLayout from '@/layouts/app-layout';
import { siswa } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';
// import Create from './Create';
// import Delete from './Delete';
// import Edit from './Edit';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Manage Siswa',
    href: siswa().url,
  },
];

interface Siswa {
  id: number;
  nama_siswa: string;
  kelas_id: number;
  kelas: Kelas;
}

interface Kelas {
    id: number;
    nama_kelas: string;
}

export default function Index({ siswa, kelas}: { siswa: Siswa[], kelas: Kelas[] }) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Kelas" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className='text-right my-0'>
          <Create text='Siswa' list_kelas={kelas} />
        </div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama Siswa</TableHead>
              <TableHead className="text-right w-[400px] ">Kelas</TableHead>
              <TableHead className="text-right px-20">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
            {siswa.map((siswa) => (
              <TableRow key={siswa.id}>
                <TableCell className="font-medium">{siswa.nama_siswa}</TableCell>
                <TableCell className="font-medium text-right w-[350px] ">{siswa.kelas.nama_kelas}</TableCell>
                <TableCell className="text-right">
                  <div className='flex justify-end px-10 gap-4'>
                    <Edit text='Siswa' list_kelas={kelas} siswa={siswa} />
                    <Delete id={siswa.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  );
}
