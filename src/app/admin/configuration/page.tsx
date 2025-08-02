
"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Settings } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2"><Settings /> Configuration</h1>
        
        <Card>
            <CardHeader>
                <CardTitle>Bot Settings</CardTitle>
                <CardDescription>Manage your bot's core settings and behavior.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="bot-name">Bot Name</Label>
                        <Input id="bot-name" defaultValue="Discord Bot Central" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="command-prefix">Command Prefix</Label>
                        <Input id="command-prefix" defaultValue="/" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="welcome-message">Welcome Message</Label>
                    <Textarea id="welcome-message" placeholder="A custom message to welcome new users." defaultValue="Welcome to the server, {{user}}! Enjoy your stay." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="log-channel">Log Channel</Label>
                        <Select defaultValue="moderation-logs">
                        <SelectTrigger id="log-channel">
                            <SelectValue placeholder="Select a channel" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="general">#general</SelectItem>
                            <SelectItem value="moderation-logs">#moderation-logs</SelectItem>
                            <SelectItem value="bot-commands">#bot-commands</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="default-role">Default Role on Join</Label>
                        <Select defaultValue="member">
                        <SelectTrigger id="default-role">
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="member">Member</SelectItem>
                            <SelectItem value="newbie">Newbie</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Module Toggles</h3>
                    <div className="flex items-center justify-between p-3 rounded-lg border bg-card-foreground/5">
                        <div>
                            <Label htmlFor="moderation-module" className="font-semibold">Moderation Module</Label>
                            <p className="text-xs text-muted-foreground">Enable or disable kick, ban, and mute commands.</p>
                        </div>
                        <Switch id="moderation-module" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border bg-card-foreground/5">
                        <div>
                            <Label htmlFor="music-module" className="font-semibold">Music Module</Label>
                            <p className="text-xs text-muted-foreground">Allow users to play music in voice channels.</p>
                        </div>
                        <Switch id="music-module" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border bg-card-foreground/5">
                        <div>
                            <Label htmlFor="economy-module" className="font-semibold">Economy Module</Label>
                            <p className="text-xs text-muted-foreground">Enable a server-wide economy with points and a store.</p>
                        </div>
                        <Switch id="economy-module" defaultChecked />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
