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
            <p>Welcome to GoJo Beats! Here you will find everything you need to get started with your music bot.

Follow these steps to set up GoJo Beats in your server:
1. Invite GoJo Beats using the invite link.
2. Make sure the bot has the necessary permissions (like Manage Channels, Connect, Speak).
3. Configure the bot's settings, such as prefix, autoplay, and 24/7 mode.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
