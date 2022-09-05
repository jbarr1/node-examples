// Simple Most recently used list

class MRU {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);
        console.log('getting item: ', item);

        if (item) {
            // found it. delete it, add back to the end (top) to its most recently used
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    set(key, value) {
        // if we already have this key, delete value and re add
        if (this.cache.has(key)) this.cache.delete(key);
        // if cache is full, delete the first (least recently used)
        else if (this.cache.size === this.max) {
            this.cache.delete(this.firstItem());
        }

        // now just add (it will go at end)
        this.cache.set(key, value);
        console.log(this.cache);
    }

    firstItem() {
        console.log('first items is: ', this.cache.keys().next().value);
        return this.cache.keys().next().value; //return first value
    }
}

const mruCache = new MRU(5);

mruCache.set('name', 'john');
mruCache.set('age', '30');
mruCache.set('name', 'john1'); //overwrite john value
mruCache.set('phone', '12345');
mruCache.set('gender', 'male');
mruCache.set('city', 'london');
mruCache.get('age'); // Get will promote to top mru
mruCache.set('title', 'Mr'); // this will be top, deleting name
