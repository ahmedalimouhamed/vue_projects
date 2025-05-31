<template>
    <h2>Modifier le produit</h2>
    <ProductForm v-if="product" :modelValue="product" submitLabel="Mettre à jour" @submit="update"></ProductForm>
</template>

<script setup>

import {ref, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useProductStore} from '@/stores/productStore'
import ProductForm from '@/components/ProductForm.vue'

const store = useProductStore()
const router = useRouter()
const route = useRoute()
const product = ref(null)

onMounted(async () => {
    product.value = await store.getProduct(route.params.id)
})

const update = async (data) => {
    await store.updateProduct({...data, id: parseInt(route.params.id)})
    router.push('/')
}

</script>