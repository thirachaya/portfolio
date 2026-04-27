'use client';

import { usePathname } from 'next/navigation';
import ThreeDCardScene from './ThreeDCard/index';

export default function ThreeDCardWrapper() {
  const pathname = usePathname();

  if (pathname?.startsWith('/projects')) {
    return null;
  }

  return <ThreeDCardScene />;
}
