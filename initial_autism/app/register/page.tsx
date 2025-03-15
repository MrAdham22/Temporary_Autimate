"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Logo } from "@/components/logo"

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const role = formData.get("role") as string

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to register")
      }

      router.push("/login?registered=true")
    } catch (error) {
      setError(error instanceof Error ? error.message : "Oops! Something went wrong. Let's try again!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-rainbow-mesh flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div 
          className="text-center mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Logo />
        </motion.div>
        <Card className="backdrop-blur-md bg-white/80 shadow-xl border-2 border-primary/20 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Join Our Adventure! 🚀
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Let's create your magical account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {error && (
                <Alert variant="destructive" className="bg-destructive/20 border-none">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">What's Your Name?</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Type your name here"
                  className="h-12 text-lg rounded-xl border-2 border-secondary/30 focus:border-secondary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Type your email here"
                  className="h-12 text-lg rounded-xl border-2 border-secondary/30 focus:border-secondary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-lg">Create a Secret Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Make it special and remember it!"
                  className="h-12 text-lg rounded-xl border-2 border-secondary/30 focus:border-secondary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-lg">Who Are You?</Label>
                <Select name="role" defaultValue="user">
                  <SelectTrigger className="h-12 text-lg rounded-xl border-2 border-secondary/30 focus:border-secondary">
                    <SelectValue placeholder="Choose who you are" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">I'm a Super Kid! 🌟</SelectItem>
                    <SelectItem value="parent">I'm a Super Parent! 👨‍👩‍👧‍👦</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full h-12 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200"
                disabled={loading}
              >
                {loading ? "Creating your magical account..." : "Start the Adventure!"}
              </Button>
              <p className="text-lg text-center text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-bold">
                  Welcome Back!
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
} 