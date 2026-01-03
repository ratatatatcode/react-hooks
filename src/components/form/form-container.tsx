import Logo from '@/../public/icon/android-chrome-192x192.png';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

export default function FormContainer({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="h-auto w-full rounded-2xl border p-6 text-left shadow-md md:w-[400px]">
      {/* w-[380px] - if you don't want to make use of w-full and breakpoint prefix (sm/md/lg) */}

      <div className="flex w-full justify-between">
        <Link href="/" className="w-5">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Image src={Logo} alt="Logo" height={75} width={75} />
        <div className="w-5"></div>
        {/* Dummy, to center the logo (for justify-between) */}
      </div>

      <h1 className="font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{desc}</p>
      <hr className="my-2 border" />

      {children}
    </div>
  );
}
