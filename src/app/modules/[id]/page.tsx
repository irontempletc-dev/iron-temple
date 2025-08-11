
import { notFound } from 'next/navigation';
import { TRAINING_MODULES } from '@/lib/data';
import { QUIZZES } from '@/lib/quiz-data';
import { ModuleClientView } from '@/components/module-client-view';
import type { TrainingModule } from '@/lib/types';
import type { Quiz } from '@/lib/quiz-data';

export async function generateStaticParams() {
  return TRAINING_MODULES.map((module) => ({
    id: module.id,
  }));
}

export default function ModulePage({ params }: { params: { id: string } }) {
  const module: TrainingModule | undefined = TRAINING_MODULES.find((m) => m.id === params.id);

  if (!module) {
    notFound();
  }

  const quiz: Quiz | undefined = QUIZZES.find((q) => q.moduleId === module.id);

  return <ModuleClientView module={module} quiz={quiz} />;
}
