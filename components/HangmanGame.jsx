'use client'
import { useState, useEffect } from 'react'

export default function HangmanGame() {
  const [word, setWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameStatus, setGameStatus] = useState('playing')
  const maxWrongGuesses = 6

  const words = [
    'REACT', 'JAVASCRIPT', 'PORTFOLIO', 'COMPUTADOR', 'DESENVOLVIMENTO',
    'PYTHON', 'ALGORITMO', 'DESIGN', 'TECNOLOGIA', 'ARTE',
    'CANETA', 'PINCEL', 'CADERNO', 'DESENHO', 'RASCUHO',
    'CINEMA', 'TEATRO', 'MUSICA', 'ESCOLA', 'FACULDADE',
    'GITHUB', 'AQUARELA', 'INTERNET', 'SOFTWARE', 'HARDWARE',
    'AMOR', 'FAMILIA', 'NATUREZA', 'OCEANO', 'GALERIA','PEIXE', 
    'SEREIA', 'LAPISEIRA', 'TINTA', 'PAPEL', 'ESBOCO', 'ILUSTRACAO'
  ]

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)])
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus('playing')
  }

  const handleGuess = (letter) => {
    if (gameStatus !== 'playing' || guessedLetters.includes(letter)) return
    const newGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newGuessedLetters)

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1
      setWrongGuesses(newWrongGuesses)
      if (newWrongGuesses >= maxWrongGuesses) setGameStatus('lost')
    } else {
      if (word.split('').every(char => newGuessedLetters.includes(char))) {
        setGameStatus('won')
      }
    }
  }

  const renderWord = () => (
    <div className="d-flex justify-content-center gap-2 mb-4">
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className="fs-1 fw-bold d-flex align-items-center justify-content-center border-bottom border-4 border-pink"
          style={{ width: '40px', height: '60px' }}
        >
          {guessedLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  )

  const renderHangman = () => (
    <svg
    height="250"
    width="200"
    stroke="white"
    strokeWidth="3"
    fill="transparent"
    viewBox="0 0 200 250"
    >
    {/* Base */}
      <line x1="10" y1="230" x2="130" y2="230" />
      <line x1="70" y1="230" x2="70" y2="20" />
      <line x1="70" y1="20" x2="150" y2="20" />
      <line x1="150" y1="20" x2="150" y2="50" />
      {/* Boneco */}
      {wrongGuesses > 0 && <circle cx="150" cy="70" r="20" fill="transparent" />}   {/* Cabeça */}
      {wrongGuesses > 1 && <line x1="150" y1="90" x2="150" y2="150" />}              {/* Corpo */}
      {wrongGuesses > 2 && <line x1="150" y1="110" x2="120" y2="140" />}             {/* Braço Esq */}
      {wrongGuesses > 3 && <line x1="150" y1="110" x2="180" y2="140" />}             {/* Braço Dir */}
      {wrongGuesses > 4 && <line x1="150" y1="150" x2="120" y2="180" />}             {/* Perna Esq */}
      {wrongGuesses > 5 && <line x1="150" y1="150" x2="180" y2="180" />}             {/* Perna Dir */}
    </svg>
  )

  const renderKeyboard = () => (
    <div className="d-flex flex-wrap justify-content-center gap-2 mx-auto" style={{ maxWidth: '500px' }}>
      {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || gameStatus !== 'playing'}
          className={`btn fw-bold ${guessedLetters.includes(letter) ? (word.includes(letter) ? 'btn-success' : 'btn-danger') : 'btn-pink'}`}
          style={{ width: '40px' }}
        >
          {letter}
        </button>
      ))}
    </div>
  )

  return (
    <div className="page-container min-vh-100 bg-purple-medium text-white d-flex flex-column align-items-center justify-content-center px-4 pb-4">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-4 text-pink">Jogo da Forca</h2>
        <div className="d-flex justify-content-center mb-4" style={{ height: '250px' }}>
          {renderHangman()}
        </div>
        {renderWord()}
        {gameStatus !== 'playing' ? (
          <div>
            <p className={`fs-3 fw-bold ${gameStatus === 'won' ? 'text-success' : 'text-danger'}`}>
              {gameStatus === 'won'
                ? 'Parabéns, você venceu!'
                : `Você perdeu! A palavra era: ${word}`}
            </p>
            <button onClick={startNewGame} className="btn btn-pink btn-lg rounded-pill px-5 mt-3">
              Jogar Novamente
            </button>
          </div>
        ) : (
          <div>
            <p className="fs-5 mb-3">Tentativas restantes: {maxWrongGuesses - wrongGuesses}</p>
            {renderKeyboard()}
          </div>
        )}
      </div>
    </div>
  )
}
