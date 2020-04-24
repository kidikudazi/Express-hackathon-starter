/**
|-------------------------------------
| A callback class for all constant
| function callbacks
|-------------------------------------
*/
module.exports ={
	async fetchSingle(modelName, val){

		return await modelName.findAll({
			where:{
				id:val
			}
		})
	},

	async validatePhone(modelName, val){

		return await modelName.findAll({
			where:{
				phone:val
			}
		})
	},

	async validateEmail(modelName, val){

		return await modelName.findAll({
			where:{
				email:val
			}
		})
	},

	async multiple(modelName, obj){
		return await modelName.findAll({
			where:obj
		})
	},

	async transform(name){
		var fullname = name;
		var splitName = fullname.split(' ');
		var newName = "";

		for (var i = 0; i < splitName.length; i++) {
			newName += ' '+splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1);
			if(i == 0){

				newName = newName.trim();
			}
		}

		return  newName;
	},

	async currentDate(){
		var d = new Date();
     
	    var date = d.getDate();
	    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
	    var year = d.getFullYear();
	     
	    var dateStr = date + "-" + month + "-" + year;
	    return dateStr;
	},

	async randomStr(numLength){
	   var result  = '';
	   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < numLength; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	},

	async randomOtp(numLength){
		var result  = '';
		var numbers = '0123456789';
		var numbersLength = numbers.length;
		for ( var i = 0; i < numLength; i++ ) {
		  result += numbers.charAt(Math.floor(Math.random() * numbersLength));
		}
		return result;
	},

	async diff_weeks(setDate, currentDate){

	  var diff =(setDate.getTime() - currentDate.getTime()) / 1000;
	  diff /= (60 * 60 * 24 * 7);
	  return Math.abs(Math.round(diff));
	  
	}
}