// google firebase free API ???

// https://firebase.google.com/docs/reference/js/firebase.database.Reference#push

function AddressBook(){
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContact = function(cb) {
    var self = this;
    setTimeout(function(){
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}

/*
construct function ???

ES 6 class
*/