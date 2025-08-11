import { AppLayout } from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Clinical Staff Response Training (CSRT)',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'clinical staff',
    description: 'A comprehensive training program for clinical staff designed to reduce workplace violence, strengthen crisis intervention skills to prevent incidents, equip staff with the tools to safely disengage during a physical crisis, significantly lower the risk of injury for both clients and staff, and build lasting confidence in your team.'
  },
  {
    title: 'Response Control Techniques (RCT)',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'control techniques',
    description: 'An intensive course on proprietary physical control tactics, emphasizing leverage, positioning, and minimal force.'
  }
]

export default function InPersonCoursesPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl font-bold tracking-tight font-headline">In-Person Training</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Enroll in our hands-on training sessions led by expert instructors.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
                <Card key={course.title} className="flex flex-col overflow-hidden">
                    <CardHeader className="p-0">
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            data-ai-hint={course.imageHint}
                        />
                    </CardHeader>
                    <div className="p-6 flex-grow flex flex-col">
                        <CardTitle className="font-headline text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="flex-grow">{course.description}</CardDescription>
                    </div>
                    <CardFooter className="p-6 pt-0">
                        <Button className="w-full" asChild>
                          <Link href={`/courses/register?course=${encodeURIComponent(course.title)}`}>Register Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </AppLayout>
  );
}
