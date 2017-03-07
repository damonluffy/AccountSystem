/**
 * Created by wyf on 2017/1/13.
 */
let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let storageSchema = new Schema({
	createInstance: Date,
	noteNumber: String,
	supplierId: String,
	supplierName: String,
	totalAmount: Number,
	paymentAmount: Number,
	mem: String,
	products: Array
});

/**
 *here can add same methods or statics
 */
storageSchema.statics.findByStorageId=function(storageId, cb){
    return this.find({_id:storageId}, cb);
};

module.exports = mongoose.model('Storage', storageSchema);