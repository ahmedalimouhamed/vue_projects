<template>
    <h2>Liste des produits</h2>
    <router-link to="/create">Ajouter un produit</router-link>
    <ul v-if="!store.loading">
        <li v-for="p in store.products" :key="p.id">
            {{ p.name }} - {{ p.price }} € - Stock : {{ p.stock }}
            <router-link :to="`edit/${p.id}`">✒️</router-link>
            <button @click="store.deleteProduct(p.id)">❌</button>
        </li>
    </ul>
</template>

<script setup>
    import {onMounted} from 'vue'
    import {useProductStore} from '@/stores/productStore'

    const store = useProductStore()

    onMounted(() => {
        store.fetchProducts()
    })
</script>