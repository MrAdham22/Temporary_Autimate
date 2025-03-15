"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, FileText, MessageSquare, Users } from "lucide-react"

export default function ParentPortalPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const specialists = [
    {
      id: "dr-smith",
      name: "Dr. Sarah Smith",
      specialty: "Child Psychologist",
      image: "/placeholder.svg?height=100&width=100",
      availability: ["Monday", "Wednesday", "Friday"],
      rating: 4.9,
    },
    {
      id: "dr-johnson",
      name: "Dr. Michael Johnson",
      specialty: "Behavioral Therapist",
      image: "/placeholder.svg?height=100&width=100",
      availability: ["Tuesday", "Thursday"],
      rating: 4.8,
    },
    {
      id: "dr-patel",
      name: "Dr. Anita Patel",
      specialty: "Developmental Pediatrician",
      image: "/placeholder.svg?height=100&width=100",
      availability: ["Monday", "Thursday", "Friday"],
      rating: 4.7,
    },
  ]

  const upcomingAppointments = [
    {
      id: "apt-1",
      specialist: "Dr. Sarah Smith",
      date: "March 18, 2025",
      time: "10:00 AM",
      type: "Video Call",
    },
    {
      id: "apt-2",
      specialist: "Dr. Michael Johnson",
      date: "March 25, 2025",
      time: "2:30 PM",
      type: "Video Call",
    },
  ]

  const resources = [
    {
      id: "res-1",
      title: "Understanding Sensory Processing",
      type: "Article",
      author: "Dr. Sarah Smith",
      date: "February 15, 2025",
    },
    {
      id: "res-2",
      title: "Supporting Communication Development",
      type: "Video",
      author: "Dr. Michael Johnson",
      date: "March 1, 2025",
    },
    {
      id: "res-3",
      title: "Strategies for Managing Meltdowns",
      type: "PDF Guide",
      author: "Dr. Anita Patel",
      date: "March 10, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">SpectrumBuddy</h1>
          </Link>
          <nav className="space-x-4">
            <Link href="/games">
              <Button variant="ghost">Child Section</Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline">Profile</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Parent Portal</h2>
          <p className="text-xl text-muted-foreground">
            Connect with specialists, access resources, and track your child's progress.
          </p>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="specialists">Find Specialists</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled sessions with specialists</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-start p-4 border rounded-lg">
                          <div className="mr-4 mt-1">
                            <CalendarDays className="h-10 w-10 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{appointment.specialist}</h4>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <CalendarDays className="mr-1 h-4 w-4" />
                              <span>{appointment.date}</span>
                              <Clock className="ml-3 mr-1 h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <Badge variant="outline">{appointment.type}</Badge>
                              <div className="space-x-2">
                                <Button size="sm" variant="outline">
                                  Reschedule
                                </Button>
                                <Button size="sm">Join Call</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No upcoming appointments</p>
                      <Button className="mt-4">Schedule a Session</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule New Session</CardTitle>
                  <CardDescription>Select a date to check availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Check Availability</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="specialists" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialists.map((specialist) => (
                <Card key={specialist.id}>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={specialist.image} alt={specialist.name} />
                      <AvatarFallback>
                        {specialist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{specialist.name}</CardTitle>
                      <CardDescription>{specialist.specialty}</CardDescription>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm">{specialist.rating}/5</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Available on:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {specialist.availability.map((day) => (
                        <Badge key={day} variant="outline">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View Profile</Button>
                    <Button>Book Session</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            <div className="grid grid-cols-1 gap-4">
              {resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>
                          By {resource.author} • {resource.date}
                        </CardDescription>
                      </div>
                      <Badge>{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      View Resource
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Discuss
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Community Forums</CardTitle>
                <CardDescription>Connect with other parents and share experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Doe</p>
                        <p className="text-xs text-muted-foreground">Posted 2 days ago</p>
                      </div>
                    </div>
                    <p className="text-sm">Tips for helping with sensory overload in public places...</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MessageSquare className="h-3 w-3" />
                      <span>12 replies</span>
                      <Users className="h-3 w-3 ml-2" />
                      <span>8 participants</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>RM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Robert Miller</p>
                        <p className="text-xs text-muted-foreground">Posted 5 days ago</p>
                      </div>
                    </div>
                    <p className="text-sm">School accommodation strategies that worked for us...</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MessageSquare className="h-3 w-3" />
                      <span>24 replies</span>
                      <Users className="h-3 w-3 ml-2" />
                      <span>15 participants</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Visit Community Forums</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

