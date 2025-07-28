import { AppLayout } from '@/components/app-layout';
import { ModuleCard } from '@/components/module-card';
import { TRAINING_MODULES } from '@/lib/data';
import type { TrainingModule } from '@/lib/types';

export default function Home() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 px-8 pb-8 bg-background/60 dark:bg-background/80">
        <div className="flex items-center justify-between space-y-2 pt-8">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Training Modules</h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TRAINING_MODULES.map((module: TrainingModule) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
