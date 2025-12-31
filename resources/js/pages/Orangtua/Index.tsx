
import AppLayout from '@/layouts/app-layout';
import { orangtua } from '@/routes';
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
    title: 'Manage Orangtua',
    href: orangtua().url,
  },
];

interface Ortu {
  id: number;
  nama_ortu: string;
  kelas_id: number;
  kelas: Kelas;
}

interface Kelas {
    id: number;
    nama_kelas: string;
}

export default function Index({ ortu }: { ortu: Ortu[]}) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Orang Tua" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className='text-right my-0'>
          <Create text='Orang Tua'/>
        </div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama Orang Tua</TableHead>
              <TableHead className="text-right px-20">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
            {ortu.map((ortu) => (
              <TableRow key={ortu.id}>
                <TableCell className="font-medium">{ortu.nama_ortu}</TableCell>
                <TableCell className="text-right">
                  <div className='flex justify-end px-10 gap-4'>
                    <Edit text='ortu'  ortu={ortu} />
                    <Delete id={ortu.id} />
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
