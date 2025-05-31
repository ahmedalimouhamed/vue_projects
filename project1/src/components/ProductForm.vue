<template>
    <form @submit.prevent="submitForm">
        <div>
            <label>Nom</label>
            <input type="text" v-model="form.name" required/>
        </div>
        <div>
            <label>Prix</label>
            <input type="number" v-model.number="form.price" required/>
        </div>
        <div>
            <label>Stock</label>
            <input type="number" v-model.number="form.stock" required/>
        </div>
        <button type="submit">{{ submitLabel }}</button>
    </form>
</template>

<script setup>
    import {reactive, watch} from 'vue'

    const props = defineProps(['modelValue', 'submitLabel'])
    const emit = defineEmits(['submit'])

    const form = reactive({...props.modelValue})

    watch(() => props.modelValue, (val) => {
        Object.assign(form, val)
    })

    function submitForm(){
        emit('submit', {...form})
    }
</script>