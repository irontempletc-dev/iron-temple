import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TRAINING_MODULES } from '@/lib/data';
import { AppLayout } from '@/components/app-layout';
import { FileText, Lock, Video } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ModulePage({ params }: { params: { id: string } }) {
  const module = TRAINING_MODULES.find((m) => m.id === params.id);

  if (!module) {
    notFound();
  }

  const PurchasePrompt = () => (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
      <Alert className="max-w-md text-center">
        <Lock className="h-4 w-4" />
        <AlertTitle className="font-headline">Access Locked</AlertTitle>
        <AlertDescription>
          You must purchase this module to view its content.
        </AlertDescription>
        <Button className="mt-4">Purchase for ${module.price}</Button>
      </Alert>
    </div>
  );

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl font-bold tracking-tight font-headline">{module.title}</h1>
          <p className="text-lg text-muted-foreground">{module.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            {module.purchased ? (
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-muted/60">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline">About this Module</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-stone dark:prose-invert max-w-none text-base">
                      <p>{module.longDescription}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="videos" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline">Training Videos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {module.content.videos.map((video) => (
                        <div key={video.title} className="flex items-center gap-4 rounded-md border p-4">
                          <Video className="h-6 w-6 text-accent" />
                          <div className="flex-grow">
                            <h3 className="font-semibold">{video.title}</h3>
                          </div>
                          <Button asChild>
                            <Link href={video.url} target="_blank">Watch</Link>
                          </Button>
                        </div>
                      ))}
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
                <Card className="h-full flex items-center justify-center min-h-[400px]">
                    <PurchasePrompt />
                </Card>
            )}
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
                {!module.purchased && (
                    <CardContent className="p-6 text-center">
                        <h3 className="text-2xl font-bold font-headline mb-2">Unlock Your Potential</h3>
                        <p className="text-muted-foreground mb-4">Purchase this module to gain full access.</p>
                        <Button size="lg" className="w-full">Purchase for ${module.price}</Button>
                    </CardContent>
                )}
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
