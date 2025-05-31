import {defineStore} from 'pinia'

import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        loading: false,
    }),

    actions: {
        async fetchProducts(){
            this.loading = true

            const res = await axios.get('http://localhost:3000/products')
            this.products = res.data
            this.loading = false
        },

        async addProduct(product){
            await axios.post('http://localhost:3000/products', product)
            this.fetchProducts()
        },

        async updateProduct(product){
            await axios.put(`http://localhost:3000/products/${product.id}`, product)
            const index = this.products.findIndex(p => p.id === product.id)
            if(index !== -1) this.products[index] = product
        },

        async deleteProduct(id){
            await axios.delete(`http://localhost:3000/products/${id}`)
            this.products = this.products.filter(p => p.id != id)
        },

        async getProduct(id){
            const res = await axios.get(`http://localhost:3000/products/${id}`)
            return res.data
        }
    }
})