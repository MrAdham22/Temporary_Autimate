"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

type Achievement = {
  id: number
  title: string
  description: string
  progress: number
  icon: string
  maxProgress: number
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Memory Master",
    description: "Win memory games",
    progress: 3,
    maxProgress: 10,
    icon: "/images/icons/star.png"
  },
  {
    id: 2,
    title: "Learning Explorer",
    description: "Complete learning activities",
    progress: 5,
    maxProgress: 20,
    icon: "/images/icons/book.png"
  },
  {
    id: 3,
    title: "Friend Maker",
    description: "Make new friends",
    progress: 2,
    maxProgress: 5,
    icon: "/images/icons/friends.png"
  }
]

export default function ProfilePage() {
  const [selectedAvatar, setSelectedAvatar] = useState(1)
  const avatars = [1, 2, 3] // Avatar options

  return (
    <div className="min-h-screen bg-custom flex flex-col items-center justify-start p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden backdrop-blur-xl bg-white/60">
          <CardHeader className="relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
            <div className="relative z-10 flex items-center gap-8 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Image
                  src={`/images/avatars/avatar-${selectedAvatar}.png`}
                  alt="Profile Avatar"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white shadow-xl"
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-secondary rounded-full p-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedAvatar((prev) => (prev % 3) + 1)}
                >
                  <Image
                    src="/images/icons/change.png"
                    alt="Change Avatar"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              </motion.div>
              <div>
                <CardTitle className="text-3xl mb-2">Super Star!</CardTitle>
                <p className="text-muted-foreground">Level 5 Explorer</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Achievements */}
        <Card className="mb-8 backdrop-blur-xl bg-white/60">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Image
                src="/images/icons/trophy.png"
                alt="Achievements"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              My Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5"
                >
                  <Image
                    src={achievement.icon}
                    alt={achievement.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={(achievement.progress / achievement.maxProgress) * 100}
                        className="h-2"
                      />
                      <span className="text-sm font-medium">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              className="w-full h-24 text-lg bg-gradient-to-r from-primary to-secondary"
              onClick={() => window.location.href = '/games/memory'}
            >
              <Image
                src="/images/icons/play.png"
                alt="Play Games"
                width={32}
                height={32}
                className="w-8 h-8 mr-2"
              />
              Play Games
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              className="w-full h-24 text-lg bg-gradient-to-r from-secondary to-accent"
              onClick={() => window.location.href = '/learn'}
            >
              <Image
                src="/images/icons/learn.png"
                alt="Start Learning"
                width={32}
                height={32}
                className="w-8 h-8 mr-2"
              />
              Start Learning
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 