var connection = require ("../../config/connection")

function PeopleRepository(){
    this._collectionName = "people";
    
};

PeopleRepository.prototype.save = function(people,callback){
    connection.insert(people, this._collectionName,callback);
}

PeopleRepository.prototype.save = function(people,callback){
    connection.insert(people, this._collectionName,callback);
}

PeopleRepository.prototype.findAll = function(callback){
    connection.findAll(this._collectionName,callback);
}
PeopleRepository.prototype.findById = function(id,callback){
    connection.findById(this._collectionName,callback)
}
PeopleRepository.prototype.updateOneById = function(id, callback){
    connection.updateOneById(id, this._collectionName, callback);
}
PeopleRepository.prototype.deleteOneById = function(id, callback){
    connection.deleteOneById(id, this._collectionName, callback);
}

muodule.exports = function(){
    return PeopleRepository;
}