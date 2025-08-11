'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppLayout } from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';

export default function RegisterCoursePage() {
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get('course') || 'In-Person Training';
  
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`I would like to register for the following course: ${courseTitle}`);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const mailtoHREF = `mailto:training@irontempletc.com?subject=Course Registration: ${encodeURIComponent(courseTitle)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Register for In-Person Training</CardTitle>
            <CardDescription>
              Complete the form below to express your interest in the course: <span className="font-semibold">{courseTitle}</span>. 
              We'll contact you to confirm details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 555-5555" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
             <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={5} />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <a href={mailtoHREF}>Send Registration</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
