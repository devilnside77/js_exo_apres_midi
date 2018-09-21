function Tools (id, name) {
    this.id = id;
    this.name = name;
}

Tools.prototype.getFullName = function() {
    return `Tool name : ${this.name}`;
};

export default Tools;