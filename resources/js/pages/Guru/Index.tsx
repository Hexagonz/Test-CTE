import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { guru } from '@/routes';
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
import Delete from './Delete';
import Create from './Create';
import Edit from './Edit';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Manage Guru',
    href: guru().url,
  },
];

interface Guru {
  id: number;
  nama_guru: string;
  kelas: Kelas[];
}

interface Kelas {
    id: number;
    nama_kelas: string; 
    
}

export default function Index({ guru, kelas }: { guru: Guru[], kelas: Kelas[] }) {
    console.log(guru)
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="guru" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className='text-right my-0'>
          <Create text='guru'  list_kelas={kelas}  />
        </div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama guru</TableHead>
              <TableHead className="w-[400px] text-right">Kelas</TableHead>
              <TableHead className="text-right px-20">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guru.map((guru) => (
              <TableRow key={guru.id}>
                <TableCell className="font-medium">{guru.nama_guru}</TableCell>
                <TableHead className="w-[400px] text-right">{guru.kelas.map(a => a.nama_kelas).join(",")}</TableHead>
                <TableCell className="text-right">
                  <div className='flex justify-end px-10 gap-4'>
                    <Edit list_kelas={kelas} guru={guru} />
                    <Delete id={guru.id} />
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
