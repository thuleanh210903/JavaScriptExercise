class Vec  {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y)
    }

    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

let vec1 = new Vec(3, 4);
let vec2 = new Vec(1, 2);
let sum = vec1.plus(vec2);
console.log(sum);


//
class Group {
    constructor() {
        this.members = [];
    }

    // Method to add a value to the group if it isn't already a member
    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    // Method to remove a value from the group if it is a member
    delete(value) {
        this.members = this.members.filter(member => member !== value);
    }

    // Method to check if a value is a member of the group
    has(value) {
        return this.members.includes(value);
    }

    // Static method to create a group from an iterable object
    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }
}



