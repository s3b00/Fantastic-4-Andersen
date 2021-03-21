class Stack {
    size = 0
    elements = {}

    constructor(max=10) {
        max = parseInt(max) // проверка на целое число
        if (isNaN(max) || !isFinite(max) || typeof max != 'number') throw new Error('Неподдерживаемый размер стека')
        this.max = max
    }

    push(elem) {
        if (this.size < this.max) {
            this.size++
            this.elements[this.size] = elem
        } else throw new Error('Получается уже переполнение стека, дада!')
    }

    pop() {
        if (this.size) {
            let temp = this.elements[this.size]
            
            delete this.elements[this.size]
            this.size--

            return temp
        } else throw new Error('А стек то пуст, они-чан!')
    }

    peek() {
        if (this.size) {
            return this.elements[this.size]
        } else return null
    }

    isEmpty() {
        return this.size == 0
    }

    toArray() { 
        return Array.from(Object.values(this.elements))
    }

    static fromIterable(iterable) {
        if (!Array.isArray(iterable)) throw new Error('Неитерируемая сущность!')
        
        let resultStack = new Stack(iterable.length)

        for (let item of iterable) { 
            resultStack.push(item)
        }

        return resultStack
    }
}