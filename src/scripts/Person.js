function Person (id, nom, prenom) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
}

Person.prototype.getFullName = function() {
    return `${this.nom} ${this.prenom}`;
};

export default Person;