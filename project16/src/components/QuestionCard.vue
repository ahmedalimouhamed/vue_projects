<template>
    <div>
        <h2 class="text-xl font-semibold mb-4">{{question}}</h2>

        <ul class="space-y-2">
            <li v-for="(answer, index) in answers" :key="index">
                <button 
                    @click="$emit('answer-selected', index)"
                    class="w-full text-left px-4 py-2 bg-gray-700 hover:bg-blue-600 rounded transition"
                >
                    {{answer}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>

defineProps({
    question: String,
    answers: Array,
    correctIndex: Number
})

</script>