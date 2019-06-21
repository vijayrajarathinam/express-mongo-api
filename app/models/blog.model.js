var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storedataSchema = new Schema({
   blogTitle:String ,
   Category:String,
   oid:Number,
   delete:String,
   img:String,
   Content:String,
   time:Schema.Types.Mixed,
   Comments:[{
   	 comment:String ,
  	 name:String,
   	 blogid:Schema.Types.Mixed,
   	 email:Schema.Types.Mixed,
     website:Schema.Types.Mixed,
   	 time:Schema.Types.Mixed
	}]
},{"collection":"blog","strict":false});
module.exports = mongoose.model('blog', storedataSchema);
