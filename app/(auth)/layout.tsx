import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Link href="/" className="flex shrink-0">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        {children}
    </div>
  )
}

export default layout