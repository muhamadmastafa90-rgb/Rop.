
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
  import { MoreHorizontal, Users } from 'lucide-react';
  import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
  import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
  
  const users = [
      { id: 'USR001', name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin', joined: '2023-01-15' },
      { id: 'USR002', name: 'Maria Garcia', email: 'maria@example.com', role: 'User', joined: '2023-02-20' },
      { id: 'USR003', name: 'James Smith', email: 'james@example.com', role: 'User', joined: '2023-03-10' },
      { id: 'USR004', name: 'Patricia Brown', email: 'patricia@example.com', role: 'Moderator', joined: '2023-04-05' },
      { id: 'USR005', name: 'Michael Miller', email: 'michael@example.com', role: 'User', joined: '2023-05-21' },
  ]
  
  export default function UsersPage() {
    return (
      <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2"><Users /> Users</h1>
          <Card>
              <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>An overview of all users interacting with the bot.</CardDescription>
              </CardHeader>
              <CardContent>
                   <Table>
                      <TableHeader>
                          <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead className="hidden md:table-cell">User ID</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Joined Date</TableHead>
                          <TableHead>
                              <span className="sr-only">Actions</span>
                          </TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {users.map((user) => (
                              <TableRow key={user.id}>
                                  <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={`https://placehold.co/40x40.png?text=${user.name.charAt(0)}`} alt={user.name} data-ai-hint="user avatar" />
                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold">{user.name}</div>
                                            <div className="text-sm text-muted-foreground">{user.email}</div>
                                        </div>
                                    </div>
                                  </TableCell>
                                  <TableCell className="hidden md:table-cell">{user.id}</TableCell>
                                  <TableCell>
                                      <Badge variant={user.role === 'Admin' ? 'destructive' : user.role === 'Moderator' ? 'secondary' : 'outline'}>
                                          {user.role}
                                      </Badge>
                                  </TableCell>
                                  <TableCell>{user.joined}</TableCell>
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
                                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                                          <DropdownMenuItem className="text-destructive">Delete User</DropdownMenuItem>
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
  