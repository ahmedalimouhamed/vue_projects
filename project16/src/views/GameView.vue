<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <h1 class="text-3xl font-bold mb-6">Qui veut gagner des millions</h1>

        <div v-if="currentQuestion" class="w-full max-w-lg bg-gray-800 rounded shadow p-6">
            <div class="mb-4 text-yellow-400 font-semibold">Argent à gagner : {{ currentPrize }}</div>

            <QuestionCard
                :question="currentQuestion.question"
                :answers="currentQuestion.answers"
                :correct-index="currentQuestion.correctAnswer"
                @answer-selected="handleAnswer"
            />
        </div>

        <div v-else class="text-xl text-green-400 mt-6">
            Félicitations ! Vous avez gagné {{ finalPrize }} 
        </div>

    </div>
</template>

<script setup>

import {ref} from 'vue'
import QuestionCard from '../components/QuestionCard.vue'
import {questions} from '../questions'

const currentQuestionIndex = ref(0)
const currentQuestion = ref(null)
const shuffledQuestions = ref([])
const finalPrize = ref(null)
const prizeList = ['100 €', '200 €', '300 €', '500 €', '1 000 €', '2 000 €', '3 000 €', '5 000 €', '10 000 €', '25 000 €', '50 000 €', '100 000 €']

const currentPrize = ref('')

const startGame = () => {
    shuffledQuestions.value = [...questions].sort(() => Math.random() - 0.5)
    nextQuestion()
}

const handleAnswer = (selectedIndex) => {
    if (selectedIndex === currentQuestion.value.correctAnswer) {
        // Gagne le prix ACTUEL avant de passer à la suivante
        finalPrize.value = prizeList[currentQuestionIndex.value];
        nextQuestion();
    } else {
        // Perd et garde le dernier gain gagné (question précédente)
        finalPrize.value = currentQuestionIndex.value > 0 
            ? prizeList[currentQuestionIndex.value - 1] 
            : 'rien';
        currentQuestion.value = null;
    }
}

const nextQuestion = () => {
    if (currentQuestionIndex.value < shuffledQuestions.value.length) {
        currentQuestion.value = shuffledQuestions.value[currentQuestionIndex.value];
        currentPrize.value = prizeList[currentQuestionIndex.value]; // Affiche le prix ACTUEL
        currentQuestionIndex.value++; // Incrémente APRÈS avoir affiché la question
    } else {
        // Toutes les questions sont répondues : gain maximal
        finalPrize.value = prizeList[prizeList.length - 1];
        currentQuestion.value = null;
    }
}

startGame()

</script>