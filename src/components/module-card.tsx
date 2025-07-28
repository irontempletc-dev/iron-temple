import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { TrainingModule } from '@/lib/types';
import { Lock, Unlock } from 'lucide-react';

interface ModuleCardProps {
  module: TrainingModule;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="p-0 relative">
        <Link href={`/modules/${module.id}`} className="block">
          <Image
            src={module.image}
            alt={module.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={module.imageHint}
          />
        </Link>
        {module.purchased ? (
           <Badge variant="default" className="absolute top-2 right-2 bg-accent text-accent-foreground">
            <Unlock className="mr-1 h-3 w-3" />
            Purchased
            </Badge>
        ) : (
            <Badge variant="secondary" className="absolute top-2 right-2">
            <Lock className="mr-1 h-3 w-3" />
            Locked
            </Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{module.title}</CardTitle>
        <CardDescription>{module.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        {!module.purchased && (
          <div className="text-2xl font-bold text-primary-foreground/80 bg-primary/90 px-3 py-1 rounded-md">
            ${module.price}
          </div>
        )}
        <div className={!module.purchased ? '' : 'w-full'}>
          <Link href={`/modules/${module.id}`} className="w-full">
            <Button className="w-full" variant={module.purchased ? 'default' : 'secondary'}>
              {module.purchased ? 'View Module' : 'Learn More'}
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
