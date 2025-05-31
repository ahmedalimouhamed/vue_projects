const listeners = []

export default {
    subscribe(fn){
        listeners.push(fn)
    },

    notify(event, data){
        listeners.forEach(listener => listener(event, data))
    }
}