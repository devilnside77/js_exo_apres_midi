function Tools (id, name, htmlcode) {
    this.id = id;
    this.name = name;
    this.htmlcode = htmlcode;
}

Tools.prototype.getToolImg = function() {
    return `<p name="${this.name}">${this.htmlcode}</p>`;
};

export default Tools;