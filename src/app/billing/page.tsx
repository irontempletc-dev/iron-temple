
'use client';

import { AppLayout } from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BillingPage() {

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Billing</h1>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Update your credit card information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input id="card-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="**** **** **** 1234" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Payment Method</Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
