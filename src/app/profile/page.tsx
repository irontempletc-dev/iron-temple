'use client';

import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { AppLayout } from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const nameParts = user.displayName?.split(' ') || ['', ''];
      setFirstName(nameParts[0] || '');
      setLastName(nameParts.slice(1).join(' ') || '');
      setPhoneNumber(user.phoneNumber || '');
      // Company is not a standard Firebase Auth field, so it won't be pre-populated.
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleUpdateProfile = async () => {
    const displayName = `${firstName} ${lastName}`.trim();
    if (displayName) {
      const success = await updateProfile({ displayName });
      if (success) {
        toast({
          title: 'Success!',
          description: 'Your profile has been updated.',
        });
      }
    }
  };

  useEffect(() => {
    if (updateError) {
      toast({
        title: 'Error updating profile',
        description: updateError.message,
        variant: 'destructive',
      });
    }
  }, [updateError, toast]);

  if (loading) {
    return <AppLayout><div>Loading...</div></AppLayout>;
  }

  if (!user) {
    return null; 
  }

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Profile</h1>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details. This will be used on certificates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user.email || ''} disabled />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
               <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter your company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdateProfile} disabled={updating}>
              {updating ? 'Updating...' : 'Update Profile'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
