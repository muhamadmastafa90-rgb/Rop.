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
        <CardContent className="space-y-4">
          <p>Learn how to configure GoJo Beats to suit your server's needs. All configuration is done through slash commands.</p>

          <div className="space-y-2 p-4 rounded-md bg-muted/50">
            <h3 className="font-semibold text-lg">G prefix [new_prefix]</h3>
            <p className="text-muted-foreground">
              Changes the command prefix for the bot on your server. Default is <code>G</code>.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-md bg-muted/50">
            <h3 className="font-semibold text-lg">G autoplay [on|off]</h3>
            <p className="text-muted-foreground">
              Enable or disable autoplay. When enabled, GoJo Beats will automatically play the next song in the queue.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-md bg-muted/50">
            <h3 className="font-semibold text-lg">G 247 [on|off]</h3>
            <p className="text-muted-foreground">
              Keep GoJo Beats in your voice channel 24/7. Useful for always-on music servers.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-md bg-muted/50">
            <h3 className="font-semibold text-lg">G request [song]</h3>
            <p className="text-muted-foreground">
              Allows members to request songs directly via text commands.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
