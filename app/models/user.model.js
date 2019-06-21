var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   username:String,
   password:String,
   name:{first:String,last:String},
   email:String,
   verified:Boolean,
   dob:{date: Number, month: Number, year: Number},
   gender:String,
   mobile:String,
   level:Number,
   address:String,
   peraddress:{
      address:String,
      landmark:String,
      city:String,
      state:String,
      pincode:String
   },
   shipaddress:{
      address:String,
      landmark:String,
      city:String,
      state:String,
      pincode:String
   },
   points: Number,
   time:{
      login:Schema.Types.Mixed,
      logout:Schema.Types.Mixed,
      signup:Schema.Types.Mixed,
      verify:Schema.Types.Mixed,
      passChange:Schema.Types.Mixed
   },
   email_hash:String,
   about:String,
   skillset:{ type : Array , "default" : [] },
   dp:Schema.Types.Mixed,
   role:String,
   completes:Schema.Types.Mixed,
   completed_tasks: Schema.Types.Mixed,
   subjects: Array
},{"collection":"logins"});
module.exports = mongoose.model('login', userSchema);   
