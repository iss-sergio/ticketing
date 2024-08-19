import React from 'react';
import { Menu } from 'antd';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MenuComponent = ({close}) => {
  const pathname = usePathname();

  const onClick = (e) => {
    close();
  };

  const items = [
        {
          key: '/admin/dashboard',
          icon: <i className='bx bxs-dashboard me-2' />,
          label: <Link href="/admin/dashboard">Dashboard</Link>,
        },
        {
          key: ['/admin/booking', '/admin/booking/add'],
          icon: <i className='bx bx-calendar me-2' />,
          label: <Link href="/admin/booking">Bookings</Link>,
        },
        {
          key: '/admin/coach',
          icon: <i className='bx bx-male-female me-2' />,
          label: <Link href="/admin/coach">Coaches</Link>,
        },
          {
            key: '/admin/service',
            icon: <i className='bx bx-dumbbell me-2' />,
            label: <Link href="/admin/service">Classes</Link>,
          },
          {
            key: '/admin/equipment',
            icon: <i className='bx bx-box me-2' />,
            label: <Link href="/admin/equipment">Equipment</Link>,
          },
          {
            key: '/admin/customer',
            icon: <i className='bx bx-user-circle me-2' />,
            label: <Link href="/admin/customer">Customers</Link>,
          },
          {
            key: '/admin/pricing',
            icon: <i className='bx bx-purchase-tag me-2' />,
            label: <Link href="/admin/pricing">Pricing & Vouchers</Link>,
          },
          {
            key: '/admin/billing',
            icon: <i className='bx bx-receipt me-2' />,
            label: <Link href="/admin/billing">Payment Transactions</Link>,
          },
          {
            key: '/admin/user',
            icon: <i className='bx bx-group me-2' />,
            label: <Link href="/admin/user">User Management</Link>,
          },
          {
            key: '/admin/banner',
            icon: <i className='bx bx-image me-2' />,
            label: <Link href="/admin/banner">Promotions & Banners</Link>,
          },
          {
            key: '/admin/notification',
            icon: <i className='bx bx-bell me-2' />,
            label: <Link href="/admin/notification">Notifications</Link>,
          },
          {
            key: '/admin/policy',
            icon: <i className='bx bx-book-open me-2' />,
            label: <Link href="/admin/policy">Terms & Conditions</Link>,
          },
          {
            key: '/admin/report',
            icon: <i className='bx bx-bar-chart me-2' />,
            label: <Link href="/admin/report">Reports</Link>,
          },
          {
            key: '/admin/messages',
            icon: <i className='bx bx-bar-chart me-2' />,
            label: <Link href="/admin/messages">Messages</Link>,
          },
          {
            key: '/admin/logs',
            icon: <i className='bx bx-file me-2' />,
            label: <Link href="/admin/logs">Audit Logs</Link>,
          },
  ];

  return (
    <Menu
      selectedKeys={[pathname]}
      mode="inline"
      items={items}
      onClick={onClick}
    />
  );
};

export default MenuComponent;
