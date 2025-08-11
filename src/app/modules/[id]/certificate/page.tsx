
import { TRAINING_MODULES } from '@/lib/data';
import { CertificateView } from '@/components/certificate-view';

type PageProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  return TRAINING_MODULES.map((module) => ({
    id: module.id,
  }));
}

export default function CertificatePage({ params }: PageProps) {
  const module = TRAINING_MODULES.find((m) => m.id === params.id);
  const courseTitle = module?.title || 'Course Not Found';

  return <CertificateView courseTitle={courseTitle} moduleId={params.id} />;
}
