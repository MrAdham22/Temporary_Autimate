"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

type Card = {
  id: number
  image: string
  isFlipped: boolean
  isMatched: boolean
}

const cardImages = [
  "/images/characters/happy-star.png",
  "/images/characters/friendly-cloud.png",
  "/images/characters/welcome-buddy.png",
]

export default function MemoryGamePage() {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matches, setMatches] = useState<number>(0)
  const [isWon, setIsWon] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    // Create pairs of cards
    const cardPairs = [...cardImages, ...cardImages].map((image, index) => ({
      id: index,
      image,
      isFlipped: false,
      isMatched: false,
    }))

    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    setFlippedCards([])
    setMatches(0)
    setIsWon(false)
  }

  const handleCardClick = (cardId: number) => {
    // Ignore if card is already flipped or matched
    if (
      cards[cardId].isFlipped ||
      cards[cardId].isMatched ||
      flippedCards.length === 2
    ) {
      return
    }

    // Flip the card
    const newCards = [...cards]
    newCards[cardId].isFlipped = true
    setCards(newCards)

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    // Check for match if two cards are flipped
    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards
      if (cards[firstCard].image === cards[secondCard].image) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[firstCard].isMatched = true
          matchedCards[secondCard].isMatched = true
          setCards(matchedCards)
          setFlippedCards([])
          setMatches(matches + 1)

          // Check for win
          if (matches + 1 === cardImages.length) {
            setIsWon(true)
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            })
          }
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          const unflippedCards = [...cards]
          unflippedCards[firstCard].isFlipped = false
          unflippedCards[secondCard].isFlipped = false
          setCards(unflippedCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div className="min-h-screen bg-custom flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-primary mb-2">Memory Match!</h1>
        <p className="text-xl text-secondary">Match the pairs to win!</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="aspect-square"
          >
            <Card
              className={`w-full h-full cursor-pointer transition-all duration-300 transform ${
                card.isFlipped || card.isMatched
                  ? "rotate-y-180"
                  : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="relative w-full h-full">
                {/* Card Front */}
                <div
                  className={`absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border-2 border-primary/30 ${
                    card.isFlipped || card.isMatched ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src="/images/icons/question.png"
                    alt="Card back"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                {/* Card Back */}
                <div
                  className={`absolute w-full h-full flex items-center justify-center bg-white/80 rounded-xl border-2 border-secondary/30 ${
                    card.isFlipped || card.isMatched ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt="Card front"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {isWon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            🎉 You Won! 🎉
          </h2>
          <Button
            onClick={initializeGame}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl text-xl hover:opacity-90 transition-all"
          >
            Play Again!
          </Button>
        </motion.div>
      )}

      {!isWon && (
        <Button
          onClick={initializeGame}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl text-lg hover:opacity-90 transition-all"
        >
          Restart Game
        </Button>
      )}
    </div>
  )
} 