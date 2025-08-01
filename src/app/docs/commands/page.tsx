import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

export default function CommandsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Commands</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Command List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Here you will find a list of all available commands and how to use them.</p>
            <div className="space-y-2 p-4 rounded-md bg-muted/50">
                <h3 className='font-semibold text-lg'>/ping</h3>
                <p className='text-muted-foreground'>Checks the bot's latency and replies with "Pong!". A great way to see if the bot is online and responsive.</p>
            </div>
            <div className="space-y-2 p-4 rounded-md bg-muted/50">
                <h3 className='font-semibold text-lg'>/help</h3>
                <p className='text-muted-foreground'>Shows a list of all available commands or detailed information about a specific command.</p>
            </div>
             <div className="space-y-2 p-4 rounded-md bg-muted/50">
                <h3 className='font-semibold text-lg'>/moderation [kick|ban|mute]</h3>
                <p className='text-muted-foreground'>A suite of commands to moderate your server. You can kick, ban, or mute members with proper permissions.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
