"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Oops! Your email or password is incorrect. Try again!")
        return
      }

      router.push("/")
      router.refresh()
    } catch (error) {
      setError("Something went wrong. Let's try that again!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-custom flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 opacity-70"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/images/characters/happy-star.png"
          alt="Decorative star"
          width={128}
          height={128}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 opacity-70"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Image
          src="/images/characters/friendly-cloud.png"
          alt="Decorative cloud"
          width={160}
          height={160}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <motion.div 
          className="text-center mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Logo />
        </motion.div>
        <Card className="backdrop-blur-xl bg-white/60 shadow-xl border-2 border-primary/20 overflow-hidden">
          {/* Gradient overlays */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
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
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
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
          
          {/* Welcome buddy character */}
          <div className="relative">
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/characters/welcome-buddy.png"
                alt="Welcome buddy"
                width={128}
                height={128}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
          </div>

          <CardHeader className="pt-20">
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Welcome Back, Friend! 👋
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Let's continue our adventure!
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {error && (
                <Alert variant="destructive" className="bg-destructive/20 border-none">
                  <AlertDescription>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/icons/oops.png"
                        alt="Error"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                      {error}
                    </div>
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg flex items-center gap-2">
                  <Image
                    src="/images/icons/email.png"
                    alt="Email"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  Your Email
                </Label>
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
                <Label htmlFor="password" className="text-lg flex items-center gap-2">
                  <Image
                    src="/images/icons/password.png"
                    alt="Password"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  Secret Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Type your secret password"
                  className="h-12 text-lg rounded-xl border-2 border-secondary/30 focus:border-secondary"
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full h-12 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200"
                disabled={loading}
              >
                <span className="flex items-center gap-2">
                  {loading ? (
                    <>
                      <Image
                        src="/images/icons/loading.png"
                        alt="Loading"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain animate-spin"
                      />
                      Opening the door...
                    </>
                  ) : (
                    <>
                      <Image
                        src="/images/icons/lets-go.png"
                        alt="Let's go"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                      Let's Go!
                    </>
                  )}
                </span>
              </Button>
              <p className="text-lg text-center text-muted-foreground">
                New here?{" "}
                <Link 
                  href="/register" 
                  className="text-primary hover:text-primary/80 font-bold flex items-center gap-1 justify-center"
                >
                  <Image
                    src="/images/icons/join.png"
                    alt="Join"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  Join the Fun!
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
} 