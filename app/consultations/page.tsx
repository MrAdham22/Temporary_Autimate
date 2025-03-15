"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Clock, Video } from "lucide-react"

export default function ConsultationsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const specialists = [
    {
      id: "dr-smith",
      name: "Dr. Sarah Smith",
      specialty: "Child Psychologist",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Smith specializes in helping children with autism develop social and emotional skills. She has over 15 years of experience working with children on the spectrum.",
      availability: ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"],
      rating: 4.9,
    },
    {
      id: "dr-johnson",
      name: "Dr. Michael Johnson",
      specialty: "Behavioral Therapist",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Johnson focuses on behavioral interventions and strategies to help children with autism navigate daily challenges and develop coping mechanisms.",
      availability: ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM"],
      rating: 4.8,
    },
    {
      id: "dr-patel",
      name: "Dr. Anita Patel",
      specialty: "Developmental Pediatrician",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Patel is a developmental pediatrician who specializes in early intervention strategies and medical management for children with autism.",
      availability: ["9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"],
      rating: 4.7,
    },
  ]

  const handleSpecialistSelect = (id: string) => {
    setSelectedSpecialist(id)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleBookAppointment = () => {
    // In a real app, this would submit the appointment booking
    alert(
      `Appointment booked with ${specialists.find((s) => s.id === selectedSpecialist)?.name} at ${selectedTime} on ${date?.toDateString()}`,
    )
  }

  const selectedSpecialistData = specialists.find((s) => s.id === selectedSpecialist)

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
            <Link href="/parent-portal">
              <Button variant="outline">Parent Portal</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Book a Consultation</h2>
          <p className="text-xl text-muted-foreground">
            Connect with specialists who can provide guidance and support for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Available Specialists</CardTitle>
              <CardDescription>Select a specialist to view their availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {specialists.map((specialist) => (
                  <div
                    key={specialist.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedSpecialist === specialist.id ? "border-primary bg-primary/5" : ""
                    }`}
                    onClick={() => handleSpecialistSelect(specialist.id)}
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={specialist.image} alt={specialist.name} />
                        <AvatarFallback>
                          {specialist.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-lg">{specialist.name}</h4>
                            <p className="text-muted-foreground">{specialist.specialty}</p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span>{specialist.rating}/5</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">{specialist.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Choose a date for your consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                />
              </CardContent>
            </Card>

            {selectedSpecialist && (
              <Card>
                <CardHeader>
                  <CardTitle>Available Times</CardTitle>
                  <CardDescription>Select a time slot for {selectedSpecialistData?.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedSpecialistData?.availability.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => handleTimeSelect(time)}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedSpecialist && selectedTime && (
              <Card>
                <CardHeader>
                  <CardTitle>Consultation Details</CardTitle>
                  <CardDescription>Review and confirm your appointment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedSpecialistData?.image} alt={selectedSpecialistData?.name} />
                      <AvatarFallback>
                        {selectedSpecialistData?.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{selectedSpecialistData?.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedSpecialistData?.specialty}</p>
                    </div>
                  </div>

                  <div className="flex justify-between p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-5 w-5 text-primary" />
                      <span>{date?.toDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      <span>{selectedTime}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg flex items-center">
                    <Video className="mr-2 h-5 w-5 text-primary" />
                    <span>Video Consultation (45 minutes)</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes for the specialist (optional)</Label>
                    <Textarea id="notes" placeholder="Share any specific concerns or questions you'd like to discuss" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleBookAppointment}>
                    Confirm Booking
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

