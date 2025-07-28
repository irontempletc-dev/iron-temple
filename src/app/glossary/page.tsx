import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GLOSSARY_TERMS } from '@/lib/data';
import { AppLayout } from '@/components/app-layout';

export default function GlossaryPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 px-8 pb-8 bg-background/60 dark:bg-background/80">
        <div className="flex items-center justify-between space-y-2 pt-8">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Glossary of Terms</h1>
        </div>
        <p className="text-muted-foreground">
            Key terminology and trademarked phrases used in Iron Temple training.
        </p>
        <div className="max-w-4xl mx-auto pt-4">
          <Accordion type="single" collapsible className="w-full">
            {GLOSSARY_TERMS.map((term) => (
              <AccordionItem value={term.id} key={term.id}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {term.term}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {term.definition}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AppLayout>
  );
}
