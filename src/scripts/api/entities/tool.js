function Tools(id, name, htmlcode) {
  this.id = id;
  this.name = name;
  this.htmlcode = htmlcode;
}

Tools.prototype.getToolImg = function getToolImg() {
  return `<p name="${this.name}">${this.htmlcode}</p>`;
};

export default Tools;
