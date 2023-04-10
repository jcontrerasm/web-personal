import React from 'react'
import Link from 'next/link'

export const Navbar = () => (
  <nav>
    <Link href="/producto">
      <span>producto</span>
    </Link>
    <Link href="/producto/[id]" as="/producto/123">
      <span>producto custom</span>
    </Link>
  </nav>
);
