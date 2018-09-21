import Person from '../scripts/Person';

function Soatien (id, name, firstname, license, toolid) {
    Person.call(this, id, name, firstname);
    this.license = license;
    this.toolid = toolid;
}
Soatien.prototype = Object.create(Person.prototype);

Soatien.prototype.greeting = function() {
    return `Bonjour je suis ${this.getFullName()} et ma license est ${this.license}`;
};

export default Soatien;