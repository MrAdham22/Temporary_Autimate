"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, VolumeIcon as VolumeUp } from "lucide-react"
import { motion } from "framer-motion"

export default function EmotionsGame() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const emotions = [
    { name: "Happy", image: "/placeholder.svg?height=200&width=200" },
    { name: "Sad", image: "/placeholder.svg?height=200&width=200" },
    { name: "Angry", image: "/placeholder.svg?height=200&width=200" },
    { name: "Surprised", image: "/placeholder.svg?height=200&width=200" },
    { name: "Scared", image: "/placeholder.svg?height=200&width=200" },
    { name: "Excited", image: "/placeholder.svg?height=200&width=200" },
  ]

  const levels = [
    {
      question: "How does this person feel?",
      correctAnswer: "Happy",
      options: ["Happy", "Sad", "Angry", "Surprised"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      question: "Find the sad face",
      correctAnswer: "Sad",
      options: ["Happy", "Sad", "Angry", "Surprised"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      question: "Which face shows surprise?",
      correctAnswer: "Surprised",
      options: ["Happy", "Sad", "Angry", "Surprised"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      question: "Match the emotion: Angry",
      correctAnswer: "Angry",
      options: ["Happy", "Sad", "Angry", "Scared"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      question: "How would you feel if you lost your toy?",
      correctAnswer: "Sad",
      options: ["Happy", "Sad", "Excited", "Surprised"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const currentLevelData = levels[currentLevel - 1]

  const handleAnswer = (answer: string) => {
    const correct = answer === currentLevelData.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    if (correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setShowFeedback(false)
      if (currentLevel < levels.length) {
        setCurrentLevel(currentLevel + 1)
      } else {
        setGameComplete(true)
      }
    }, 1500)
  }

  const resetGame = () => {
    setCurrentLevel(1)
    setScore(0)
    setShowFeedback(false)
    setGameComplete(false)
  }

  const playSound = () => {
    // In a real app, this would play the audio for the emotion or question
    console.log("Playing sound for: ", currentLevelData.question)
  }

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
        <header className="container mx-auto py-6">
          <div className="flex items-center">
            <Link href="/games">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to games</span>
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Emotion Explorer</h1>
          </div>
        </header>

        <main className="container mx-auto flex-1 py-12 flex items-center justify-center">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <CardTitle className="text-3xl">Game Complete!</CardTitle>
              <CardDescription>Great job exploring emotions!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="mx-auto w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">
                  {score}/{levels.length}
                </span>
              </div>
              <p className="text-xl">
                {score === levels.length
                  ? "Perfect score! You're an emotions expert!"
                  : score >= Math.floor(levels.length / 2)
                    ? "Good job! You're learning about emotions."
                    : "Keep practicing to learn more about emotions!"}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button onClick={resetGame}>Play Again</Button>
              <Link href="/games">
                <Button variant="outline">Back to Games</Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
      <header className="container mx-auto py-6">
        <div className="flex items-center">
          <Link href="/games">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to games</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-primary">Emotion Explorer</h1>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                Level {currentLevel}/{levels.length}
              </span>
              <Progress value={(currentLevel / levels.length) * 100} className="w-32" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Score: {score}</span>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{currentLevelData.question}</span>
                <Button variant="ghost" size="icon" onClick={playSound}>
                  <VolumeUp className="h-5 w-5" />
                  <span className="sr-only">Read aloud</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-8">
              <img
                src={currentLevelData.image || "/placeholder.svg"}
                alt="Emotion"
                className="rounded-lg max-h-64 object-contain"
              />
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {currentLevelData.options.map((option) => (
              <Button
                key={option}
                variant="outline"
                size="lg"
                className="h-20 text-lg"
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
              >
                {option}
              </Button>
            ))}
          </div>

          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-4 rounded-lg text-center ${
                isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              <p className="text-xl font-bold">
                {isCorrect ? "Correct! Great job!" : "Not quite right. Let's try another!"}
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}

