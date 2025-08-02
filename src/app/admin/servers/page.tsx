
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Server } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const servers = [
    { id: 'SRV001', name: 'Main Community', members: 12050, status: 'Online' },
    { id: 'SRV002', name: 'Gaming Hub', members: 8765, status: 'Online' },
    { id: 'SRV003', name: 'Developer Den', members: 4500, status: 'Maintenance' },
    { id: 'SRV004', name: 'Music Lounge', members: 15320, status: 'Online' },
    { id: 'SRV005', name: 'Art Corner', members: 2100, status: 'Offline' },
]

export default function ServersPage() {
  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2"><Server /> Servers</h1>
        <Card>
            <CardHeader>
                <CardTitle>Server Management</CardTitle>
                <CardDescription>An overview of all servers the bot is currently in.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Server Name</TableHead>
                        <TableHead className="hidden md:table-cell">Server ID</TableHead>
                        <TableHead>Members</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>
                            <span className="sr-only">Actions</span>
                        </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {servers.map((server) => (
                            <TableRow key={server.id}>
                                <TableCell className="font-medium">{server.name}</TableCell>
                                <TableCell className="hidden md:table-cell">{server.id}</TableCell>
                                <TableCell>{server.members.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Badge variant={server.status === 'Online' ? 'default' : server.status === 'Maintenance' ? 'secondary' : 'destructive'}
                                        className={cn(server.status === 'Online' ? 'bg-green-600/80' : server.status === 'Maintenance' ? 'bg-orange-500/80' : 'bg-red-600/80', 'text-primary-foreground border-transparent')}
                                    >
                                        {server.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button aria-haspopup="true" size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>View Details</DropdownMenuItem>
                                        <DropdownMenuItem>Manage Settings</DropdownMenuItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
