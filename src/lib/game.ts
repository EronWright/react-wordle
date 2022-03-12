import {
    StoredGameState,
} from './localStorage'
import {
    solutionGenerator,
    solutionIndex,
} from './words'

import {GAME_DURATION_MS, MAX_CHALLENGES} from "../constants/settings";

const nextSolution = (): string => {
    const solution = solutionGenerator.next()
    if (solution.done) {
        throw new Error("no more solutions are available")
    }
    return solution.value
}

export const newGame = (): StoredGameState => {
    return {
        solutionIndex: solutionIndex,
        deadline: undefined,
        completed: [],
        solution: nextSolution(),
        nextSolution: nextSolution(),
        guesses: []
    }
}

export const applyGuess = (guess: string) => (state: StoredGameState): StoredGameState => {
    const newState = {
        ...state,
        completed: [...state.completed],
        guesses: [...state.guesses]
    }
    if (!newState.deadline) {
        // start the countdown
        newState.deadline = Date.now() + GAME_DURATION_MS
    }
    if (isWinningWord(newState, guess)) {
        // round over; next word.
        newState.completed.push(newState.solution)
        newState.solution = newState.nextSolution
        newState.nextSolution = nextSolution()
        newState.guesses = []
    } else {
        if (newState.guesses.length < MAX_CHALLENGES) {
            newState.guesses.push(guess)
        }
        if (newState.guesses.length === MAX_CHALLENGES) {
            // game over
            delete newState.deadline
        }
    }
    return newState
}

export const isWinningWord = (state: StoredGameState, word: string) => {
    return state.solution === word
}

export const isGameOver = (state: StoredGameState): boolean => {
    return isGameLost(state) || isPastDeadline(state)
}

export const isPastDeadline = (state: StoredGameState): boolean => {
    return state.deadline ? (Date.now() > state.deadline) : false
}

export const isGameLost = (state: StoredGameState): boolean => {
    return state.guesses.length === MAX_CHALLENGES
}
