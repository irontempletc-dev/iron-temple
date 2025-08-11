
'use client';

import { useSearchParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/app-layout';

type CertificateData = {
  userName: string;
  courseTitle: string;
  completionDate: Date;
  certificateId: string;
};

type CertificateViewProps = {
  courseTitle: string;
  moduleId: string;
};

function formatDate(dateLike: string | Date | null, locale = "en-US") {
    if (!dateLike) return "—";
    const d = typeof dateLike === "string" ? new Date(dateLike) : dateLike;
    if (Number.isNaN(d.valueOf())) return "—";
    return new Intl.DateTimeFormat(locale, {
        timeZone: "America/New_York",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(d);
}

export function CertificateView({ courseTitle, moduleId }: CertificateViewProps) {
  const [certData, setCertData] = useState<CertificateData | null>(null);
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
    if (!courseTitle || courseTitle === 'Course Not Found') {
      return;
    }

    const name = searchParams.get('name');

    setCertData({
      userName: name || 'Valued Student',
      courseTitle: courseTitle,
      completionDate: new Date(),
      certificateId: `ITT-${moduleId.slice(0,4).toUpperCase()}-${new Date().getTime()}`
    });
  }, [courseTitle, moduleId, searchParams]);

  if (!isClient) {
    return null; // Or a loading skeleton
  }

  if (!certData) {
    notFound();
    return null; // Ensure nothing is rendered while redirecting
  }

  const completion = formatDate(certData.completionDate);

  return (
    <AppLayout>
        <main className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
        <section 
            className="w-[900px] border-8 border-primary/80 p-12 rounded-lg shadow-2xl bg-white/90 relative overflow-hidden"
            style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center text-gray-800">
                <header className="mb-10 flex flex-col items-center">
                    <Image src="/ittclogo.png" alt="Iron Temple Training Center Logo" width={80} height={80} className="mb-4" />
                    <h1 className="text-4xl font-bold tracking-wider text-black">Certificate of Completion</h1>
                    <p className="mt-2 text-lg text-gray-700">Iron Temple Training Center</p>
                </header>

                <div className="space-y-3">
                    <p className="text-lg text-gray-600">This certifies that</p>
                    <p className="text-4xl font-headline font-bold text-primary">{certData.userName}</p>
                    <p className="text-lg text-gray-600">has successfully completed</p>
                    <p className="text-2xl font-semibold text-black">{certData.courseTitle}</p>
                </div>

                <div className="mt-16 flex justify-end">
                    <div className="text-center">
                        <p className="text-xl font-medium">{completion}</p>
                        <div className="border-t-2 w-64 mx-auto mt-1 border-gray-400"></div>
                        <p className="text-sm text-gray-600 mt-2">Completion Date</p>
                    </div>
                </div>

                <footer className="mt-12 text-xs text-gray-500 flex justify-between">
                    <span>Certificate ID: {certData.certificateId}</span>
                    <span>www.irontemple.com</span>
                </footer>
            </div>
        </section>
        </main>
    </AppLayout>
  );
}
