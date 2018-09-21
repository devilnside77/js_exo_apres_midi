import Person from '../scripts/Person';

function Soatien (id, nom, prenom, matricule) {
    Person.call(this, id, nom, prenom);
    this.matricule = matricule;
}
Soatien.prototype = Object.create(Person.prototype);

Soatien.prototype.greeting = function() {
    return `Bonjour je suis ${this.getFullName()} et mon matricule est ${this.matricule}`;
};

export default Soatien;