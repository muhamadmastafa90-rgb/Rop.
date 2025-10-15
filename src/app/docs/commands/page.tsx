import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

type CommandProps = {
  name: string;
  desc: string;
};

function Command({ name, desc }: CommandProps) {
  return (
    <div className="space-y-2 p-4 rounded-md bg-muted/50">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}

export default function CommandsPage() {
  // All commands grouped by category
  const commands = {
    Information: [
      { name: 'G help', desc: 'Shows all commands or detailed info about a specific command.' },
      { name: 'G ping', desc: 'Check bot latency.' },
      { name: 'G uptime', desc: 'Show how long the bot has been online.' },
      { name: 'G stats', desc: 'Show bot statistics.' },
      { name: 'G invite', desc: 'Get the bot invite link.' },
    ],
    Music: [
      { name: 'G play', desc: 'Play a song in your voice channel.' },
      { name: 'G pause', desc: 'Pause the currently playing song.' },
      { name: 'G stop', desc: 'Stop playback and clear the queue.' },
      { name: 'G skip', desc: 'Skip to the next song in the queue.' },
      { name: 'G nowplaying', desc: 'Show details of the current song.' },
      { name: 'G loop', desc: 'Loop the current song or queue.' },
      { name: 'G shuffle', desc: 'Shuffle the queue.' },
      { name: 'G replay', desc: 'Replay the current song.' },
      { name: 'G queue', desc: 'Show all songs in the queue.' },
      { name: 'G bump', desc: 'Move a song to the top of the queue.' },
      { name: 'G lyrics', desc: 'Display lyrics of the current song.' },
    ],
    Playlist: [
      { name: 'G add-to-playlist', desc: 'Add a song to a playlist.' },
      { name: 'G create-playlist', desc: 'Create a new playlist.' },
      { name: 'G delete-playlist', desc: 'Delete a playlist.' },
      { name: 'G delete-from-playlist', desc: 'Remove a song from a playlist.' },
      { name: 'G edit-playlist', desc: 'Edit a playlist details or order.' },
      { name: 'G move-tracks', desc: 'Move tracks within a playlist.' },
      { name: 'G load-playlist', desc: 'Load a playlist into the queue.' },
      { name: 'G playlists', desc: 'List all available playlists.' },
    ],
    Filter: [
      { name: 'G bassboost', desc: 'Apply bass boost to music.' },
      { name: 'G pitch', desc: 'Change pitch of the current song.' },
      { name: 'G poo', desc: 'Apply poo filter to music.' },
      { name: 'G rock', desc: 'Apply rock filter to music.' },
      { name: 'G soft', desc: 'Apply soft filter to music.' },
      { name: 'G filter', desc: 'Apply or remove custom filters.' },
    ],
    Moderation: [
      { name: 'G lock', desc: 'Lock a text channel.' },
      { name: 'G unlock', desc: 'Unlock a text channel.' },
      { name: 'G ban', desc: 'Ban a member from the server.' },
      { name: 'G unban', desc: 'Unban a member.' },
      { name: 'G slowmode', desc: 'Set slowmode duration for a channel.' },
    ],
    Configuration: [
      { name: 'G prefix', desc: 'Change the bot command prefix.' },
      { name: 'G autoplay', desc: 'Enable or disable autoplay.' },
      { name: 'G 247', desc: 'Keep the bot in voice channel 24/7.' },
      { name: 'G request', desc: 'Enable or disable song requests.' },
    ],
    Sources: [
      { name: 'YouTube', desc: 'Play songs from YouTube.' },
      { name: 'SoundCloud', desc: 'Play songs from SoundCloud.' },
      { name: 'Spotify', desc: 'Play songs from Spotify.' },
      { name: 'Deezer', desc: 'Play songs from Deezer.' },
      { name: 'Apple Music', desc: 'Play songs from Apple Music.' },
    ],
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Commands</h1>
      {Object.entries(commands).map(([category, cmds]) => (
        <Card key={category} className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal /> {category}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cmds.map((cmd) => (
              <Command key={cmd.name} name={cmd.name} desc={cmd.desc} />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
      }
