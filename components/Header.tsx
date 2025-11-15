'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavItems from './NavItems';
import UserDropdownBtn from './UserDropdownBtn';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <Link href="/" className="flex shrink-0">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* NavItems – visible only on tablet & laptop */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* UserDropdownBtn – visible only on mobile */}
        <div>
          <UserDropdownBtn />
        </div>

      </div>
    </header>
  );
};

export default Header;
