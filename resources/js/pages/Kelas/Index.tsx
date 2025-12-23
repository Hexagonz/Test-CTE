import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { kelas } from '@/routes';
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
import Delete from './Delete';
import Edit from './Edit';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Manage Kelas',
    href: kelas().url,
  },
];

interface Kelas {
  id: number;
  nama_kelas: string;
}
export default function Index({ kelas }: { kelas: Kelas[] }) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Kelas" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className='text-right my-0'>
          <Create text='kelas' />
        </div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama Kelas</TableHead>
              <TableHead className="text-right px-20">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
            {kelas.map((kelas) => (
              <TableRow key={kelas.id}>
                <TableCell className="font-medium">{kelas.nama_kelas}</TableCell>
                <TableCell className="text-right">
                  <div className='flex justify-end px-10 gap-4'>
                    <Edit text='kelas' kelas={kelas} />
                    <Delete id={kelas.id} />
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


// export function AddKelas({ text }: { text: string }) {
//   return (
//     <Dialog>
//       <form method='post' action='/kelas/post'>
//         <DialogTrigger asChild>
//           <Button variant="outline"><Plus />Tambah {text}</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Tambah {text}</DialogTitle>
//           </DialogHeader>
//           <div className="grid gap-4">
//             <div className="grid gap-3">
//               <Label htmlFor="name-1">Nama {text}</Label>
//               <Input id="name-1" name="name" placeholder='Nama' />
//             </div>
//           </div>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button variant="outline">Batal</Button>
//             </DialogClose>
//             <Button type="submit">Simpan</Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   )
// }


