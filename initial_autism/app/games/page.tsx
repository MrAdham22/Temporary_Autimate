import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GamesPage() {
  const games = [
    {
      id: "emotions",
      title: "Emotion Explorer",
      description: "Learn to recognize and understand different emotions",
      image: "/placeholder.svg?height=200&width=300",
      ageRange: "4-8 years",
      skills: ["Emotional recognition", "Social understanding"],
    },
    {
      id: "patterns",
      title: "Pattern Play",
      description: "Find and complete patterns to improve cognitive skills",
      image: "/placeholder.svg?height=200&width=300",
      ageRange: "5-10 years",
      skills: ["Pattern recognition", "Logical thinking"],
    },
    {
      id: "sounds",
      title: "Sound Safari",
      description: "Identify everyday sounds and associate them with objects",
      image: "/placeholder.svg?height=200&width=300",
      ageRange: "3-7 years",
      skills: ["Auditory processing", "Object association"],
    },
    {
      id: "routines",
      title: "Routine Rangers",
      description: "Learn about daily routines through interactive stories",
      image: "/placeholder.svg?height=200&width=300",
      ageRange: "4-9 years",
      skills: ["Sequential thinking", "Time management"],
    },
    {
      id: "social",
      title: "Social Stories",
      description: "Interactive stories that teach social situations and responses",
      image: "/placeholder.svg?height=200&width=300",
      ageRange: "5-12 years",
      skills: ["Social skills", "Situational awareness"],
    },
    {
      id: "sensory",
      title: "Sensory Explorer",
      description: "Calming activities for sensory regulation",
      image: "/placeholder.svg?height=200&width=300",
      ageRange: "All ages",
      skills: ["Sensory regulation", "Relaxation techniques"],
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
            <Link href="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
            <Link href="/parent-portal">
              <Button variant="outline">Parent Portal</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Mini-Games</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fun and engaging activities designed to support development while having fun!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
                <CardDescription>Age range: {game.ageRange}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{game.description}</p>
                <div className="flex flex-wrap gap-2">
                  {game.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/games/${game.id}`} className="w-full">
                  <Button className="w-full">Play Game</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

