
import { notFound } from 'next/navigation';
import { QUIZZES } from '@/lib/quiz-data';
import { TRAINING_MODULES } from '@/lib/data';
import { QuizView } from '@/components/quiz-view';
import { AppLayout } from '@/components/app-layout';

export async function generateStaticParams() {
  return QUIZZES.map((quiz) => ({
    id: quiz.moduleId,
  }));
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const quiz = QUIZZES.find((q) => q.moduleId === id);

  if (!quiz) {
    notFound();
  }

  return (
    <AppLayout>
      <QuizView quiz={quiz} />
    </AppLayout>
  );
}
