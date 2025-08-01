import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function ConfigurationPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Configuration</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings /> Bot Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Learn how to configure the bot to suit your server's needs. All configuration is done through slash commands.</p>
            <div className="space-y-2 p-4 rounded-md bg-muted/50">
                <h3 className='font-semibold text-lg'>/config prefix [new_prefix]</h3>
                <p className='text-muted-foreground'>Changes the command prefix for the bot on your server. The default prefix is `.`.</p>
            </div>
            <div className="space-y-2 p-4 rounded-md bg-muted/50">
                <h3 className='font-semibold text-lg'>/config logs [channel]</h3>
                <p className='text-muted-foreground'>Sets the channel where the bot will post moderation logs and other important notifications.</p>
            </div>
             <div className="space-y-2 p-4 rounded-md bg-muted/50">
                <h3 className='font-semibold text-lg'>/config autorole [role]</h3>
                <p className='text-muted-foreground'>Assigns a role to new members automatically when they join the server.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
