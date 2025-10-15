import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

export default function CommandsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Prefix G</h1>

      {/* Information Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Information Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="G help" desc="Displays all available commands or detailed info about a specific command." />
          <Command name="G ping" desc="Checks the bot’s latency and replies with 'Pong!'." />
          <Command name="G uptime" desc="Shows how long the bot has been running." />
          <Command name="G stats" desc="Displays system and bot statistics (servers, ping, memory usage, etc.)." />
          <Command name="G invite" desc="Generates an invite link to add the bot to your own server." />
        </CardContent>
      </Card>

      {/* Music Commands */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Music Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="G play" desc="Play a song from YouTube, SoundCloud, Spotify, Deezer, or Apple Music." />
          <Command name="G pause" desc="Pause the current track." />
          <Command name="G stop" desc="Stop playback and clear the queue." />
          <Command name="G skip" desc="Skip to the next track." />
          <Command name="G join" desc="Make the bot join your voice channel." />
          <Command name="G nowplaying" desc="Show details of the currently playing track." />
          <Command name="G loop" desc="Loop the current track or the entire queue." />
          <Command name="G clear" desc="Clear the entire queue." />
          <Command name="G volume" desc="Change the playback volume (0–100%)." />
          <Command name="G seek" desc="Jump to a specific timestamp in the song." />
          <Command name="G shuffle" desc="Shuffle all songs in the queue randomly." />
          <Command name="G replay" desc="Replay the current song from the beginning." />
          <Command name="G queue" desc="Display all songs currently in the queue." />
          <Command name="G bump" desc="Move a specific track to the top of the queue." />
          <Command name="G lyrics" desc="Display the lyrics of the current song." />
        </CardContent>
      </Card>

      {/* Filter Commands */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Filter Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="G bassboost" desc="Boosts the bass for a more powerful sound." />
          <Command name="G pitch" desc="Changes the pitch of the audio." />
          <Command name="G poo" desc="Applies a funny meme-like sound filter." />
          <Command name="G rock" desc="Applies a rock-style sound filter." />
          <Command name="G soft" desc="Smooth and chill audio filter." />
          <Command name="G filter" desc="List all available filters." />
        </CardContent>
      </Card>

      {/* Moderation Commands */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Moderation Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="G lock" desc="Lock a channel to stop users from sending messages." />
          <Command name="G unlock" desc="Unlock a channel to allow messages again." />
          <Command name="G ban" desc="Ban a member from the server." />
          <Command name="G unban" desc="Unban a previously banned member." />
          <Command name="G slowmode" desc="Set a message cooldown (slowmode) for a channel." />
        </CardContent>
      </Card>

      {/* Settings Commands */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Settings Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="G prefix" desc="Set a custom prefix for your server." />
          <Command name="G autoplay" desc="Enable or disable autoplay for continuous music." />
          <Command name="G 247" desc="Keep the bot connected 24/7 in a voice channel." />
          <Command name="G request" desc="Allow users to request songs via chat." />
        </CardContent>
      </Card>

      {/* Playlist Commands */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Playlist Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="G playlist" desc="View your playlists or select one to play." />
          <Command name="G add-to-playlist" desc="Add a track to one of your playlists." />
          <Command name="G create-playlist" desc="Create a new playlist." />
          <Command name="G delete-playlist" desc="Delete an existing playlist." />
          <Command name="G delete-from-playlist" desc="Remove a song from a playlist." />
          <Command name="G edit-playlist" desc="Rename or update your playlist details." />
          <Command name="G move-tracks" desc="Reorder tracks inside a playlist." />
          <Command name="G load-playlist" desc="Load and queue all songs from a saved playlist." />
          <Command name="G playlists" desc="List all your created playlists." />
        </CardContent>
      </Card>

      {/* Sources */}
      <Card className="mt-6 mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal /> Supported Music Sources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Command name="YouTube" desc="Stream directly from YouTube links or search queries." />
          <Command name="SoundCloud" desc="Play tracks from SoundCloud with high quality." />
          <Command name="Spotify" desc="Play songs, albums, or playlists from Spotify." />
          <Command name="Deezer" desc="Stream songs directly from Deezer links." />
          <Command name="Apple Music" desc="Play tracks and albums from Apple Music." />
        </CardContent>
      </Card>
    </div>
  );
}

// Reusable component for displaying commands
function Command({ name, desc }) {
  return (
    <div className="space-y-2 p-4 rounded-md bg-muted/50">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
      }
