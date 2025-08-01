import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GettingStartedPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Getting Started</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Welcome to the documentation. Here you will find everything you need to know to use and configure the bot.</p>
            <p>This is where you would explain the initial setup steps for your bot. For example, how to invite it to a server, the initial permissions it needs, and any basic configuration that needs to be done.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
