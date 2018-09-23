function Person (id, name, firstname) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
}

Person.prototype.getFullName = function() {
    return `${this.name} ${this.firstname}`;
};

export default Person;