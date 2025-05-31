<template>
    <h2>Ajouter un produit</h2>
    <ProductForm :modelValue="product" submitLabel="Créer" @submit="create" />
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useProductStore} from '@/stores/productStore'
import ProductForm from '@/components/ProductForm.vue'

const store = useProductStore()
const router = useRouter()

const product = ref({name: '', price:0, stock:0})

const create = async (data) => {
    await store.addProduct(data)
    router.push('/')
}

</script>