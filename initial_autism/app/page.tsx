import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">SpectrumBuddy</h1>
          <nav className="space-x-4">
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Supporting children with autism and their families</h2>
            <p className="text-xl text-muted-foreground">
              An interactive platform with engaging activities for children and professional support for parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Children playing educational games"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Mini-Games</CardTitle>
              <CardDescription>Fun activities designed for developmental support</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Mini-games screenshot"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p>Engaging games that help children develop social, cognitive, and motor skills in a fun environment.</p>
            </CardContent>
            <CardFooter>
              <Link href="/games" className="w-full">
                <Button className="w-full">Explore Games</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Daily Routines</CardTitle>
              <CardDescription>Visual schedules and routine builders</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Daily routine planner"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p>Help children understand and follow daily routines with visual schedules and interactive reminders.</p>
            </CardContent>
            <CardFooter>
              <Link href="/routines" className="w-full">
                <Button className="w-full">Create Routines</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Specialist Consultations</CardTitle>
              <CardDescription>Connect with autism specialists</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Doctor consultation"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p>Schedule virtual appointments with specialists who can provide guidance and support for parents.</p>
            </CardContent>
            <CardFooter>
              <Link href="/consultations" className="w-full">
                <Button className="w-full">Book a Session</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground mt-24 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SpectrumBuddy</h3>
              <p>
                Supporting children with autism and their families through interactive learning and professional
                guidance.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">For Children</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/games" className="hover:underline">
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="/routines" className="hover:underline">
                    Routines
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:underline">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">For Parents</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/consultations" className="hover:underline">
                    Specialist Sessions
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:underline">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:underline">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>support@spectrumbuddy.com</li>
                <li>1-800-SPECTRUM</li>
                <li>
                  <div className="flex space-x-4 mt-4">
                    <Link href="#" className="hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                    <Link href="#" className="hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                    <Link href="#" className="hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p>© {new Date().getFullYear()} SpectrumBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

