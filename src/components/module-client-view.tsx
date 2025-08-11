
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppLayout } from '@/components/app-layout';
import { FileText, Lock, Award, ClipboardCheck } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useState, useEffect } from 'react';
import type { TrainingModule } from '@/lib/types';
import { Quiz } from '@/lib/quiz-data';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';

export function ModuleClientView({ module, quiz }: { module: TrainingModule; quiz: Quiz | undefined }) {
  const [isClient, setIsClient] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [certificateName, setCertificateName] = useState('');
  const [user] = useAuthState(auth);

  useEffect(() => {
    setIsClient(true);
    if (quiz) {
        const savedSubmitted = localStorage.getItem(`quiz-${module.id}-submitted`);
        if (savedSubmitted && JSON.parse(savedSubmitted)) {
            const savedAnswers = localStorage.getItem(`quiz-${module.id}-answers`);
            if (savedAnswers) {
                const answers = JSON.parse(savedAnswers);
                const score = answers.reduce((acc: number, selectedAnswer: number | null, index: number) => {
                    if (selectedAnswer === quiz.questions[index].correctAnswerIndex) {
                        return acc + 1;
                    }
                    return acc;
                }, 0);
                const scorePercentage = (score / quiz.questions.length) * 100;
                if (scorePercentage >= 80) {
                    setQuizPassed(true);
                }
            }
        }
    }
  }, [module.id, quiz]);

  useEffect(() => {
    if (user) {
      setCertificateName(user.displayName || user.email || '');
    }
  }, [user]);

  if (!isClient) {
      return null;
  }

  const PurchasePrompt = () => (
    <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
            <Card className="h-full flex items-center justify-center min-h-[400px]">
                <Alert className="max-w-md text-center">
                    <Lock className="h-4 w-4" />
                    <AlertTitle className="font-headline">Access Locked</AlertTitle>
                    <AlertDescription>
                    You must purchase this module to view its content.
                    </AlertDescription>
                    <Button className="mt-4">Purchase for ${module.price}</Button>
                </Alert>
            </Card>
        </div>
        <div className="md:col-span-1 space-y-6">
          <Card className="overflow-hidden">
              <Image
                  src={module.image}
                  alt={module.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={module.imageHint}
              />
              <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold font-headline mb-2">Unlock Your Potential</h3>
                  <p className="text-muted-foreground mb-4">Purchase this module to gain full access.</p>
                  <Button size="lg" className="w-full">Purchase for ${module.price}</Button>
              </CardContent>
          </Card>
        </div>
    </div>
  );

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl font-bold tracking-tight font-headline">{module.title}</h1>
          <p className="text-lg text-muted-foreground">{module.description}</p>
        </div>

        {module.purchased ? (
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-muted/60">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="post-test" disabled={!quiz}>Post Test</TabsTrigger>
              <TabsTrigger value="certificate">Certificate</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline">About this Module</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-stone dark:prose-invert max-w-none text-base">
                      <div dangerouslySetInnerHTML={{ __html: module.longDescription }} />
                    </CardContent>
                  </Card>
                </div>
                <div className="md:col-span-1 space-y-6">
                  <Card className="overflow-hidden">
                    <Image
                        src={module.image}
                        alt={module.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        data-ai-hint={module.imageHint}
                    />
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="videos" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline">Training Videos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {module.content.videos.map((video) => (
                      <div key={video.title}>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-lg">{video.title}</h3>
                        </div>
                         <div className="aspect-video rounded-lg overflow-hidden border">
                           <iframe
                            src={`/${video.url}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="post-test" className="mt-6">
              <Card>
                  <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                      <ClipboardCheck /> Post-Test
                  </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    {quiz ? (
                        <>
                            <p>Ready to test your knowledge?</p>
                            <Button asChild>
                                <Link href={`/modules/${module.id}/quiz`}>Start Test</Link>
                            </Button>
                        </>
                    ) : (
                        <p>No quiz is available for this module yet.</p>
                    )}
                  </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="certificate" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Award /> Certificate of Completion
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  {quizPassed ? (
                    <div className="max-w-md mx-auto space-y-4">
                      <p>Congratulations! You have passed the test and earned your certificate.</p>
                       <Button asChild disabled={!certificateName}>
                        <Link href={`/modules/${module.id}/certificate?name=${encodeURIComponent(certificateName)}`} target="_blank">View Certificate</Link>
                      </Button>
                    </div>
                  ) : (
                    <p>You must pass the post-test with a score of 80% or higher to receive your certificate.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="mt-6">
                <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Instructional Booklets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {module.content.documents.map((doc) => (
                    <div key={doc.title} className="flex items-center gap-4 rounded-md border p-4">
                        <FileText className="h-6 w-6 text-accent" />
                        <div className="flex-grow">
                            <h3 className="font-semibold">{doc.title}</h3>
                        </div>
                        <Button asChild>
                            <Link href={doc.url} target="_blank">Download</Link>
                        </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <PurchasePrompt />
        )}
      </div>
    </AppLayout>
  );
}
