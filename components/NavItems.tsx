'use client';

import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';

const NavItems = () => {
  return (
    <ul className="flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <li
          key={item.href}
          className="
            text-white font-medium
            transition-all duration-200
            hover:text-yellow-400
            hover:translate-y-[-1px]
            group-hover:opacity-100
            opacity-0 sm:opacity-100
            translate-y-1 sm:translate-y-0
            transition-opacity transition-transform
          "
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;