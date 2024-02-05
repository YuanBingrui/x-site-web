import {Breadcrumbs, EditForm} from '@/components';
import {fetchInvoiceById, fetchCustomers} from '@/lib/data';
import {notFound} from 'next/navigation';

export default async function Page({params}: {params: {id: string}}) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([fetchInvoiceById(id), fetchCustomers()]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: 'Invoices', href: '/dashboard/invoices'},
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} customers={customers} />
    </main>
  );
}
