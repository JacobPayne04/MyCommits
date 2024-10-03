/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity){
        this.cache = new Map()
        this.capacity = capacity
    } 
    get(key){
        if (!this.cache.has(key)) return -1
        const val = this.cache.get(key)
         this.cache.delete(key)
         this.cache.set(key,val)
         return val
    }



    put(key, value){
            this.cache.delete(key)
             this.cache.set(key, value)
        if ( this.cache.size > this.capacity) {
            const firstItem = this.cache.keys().next().value
            this.cache.delete(firstItem);
        }
         
    }


};

