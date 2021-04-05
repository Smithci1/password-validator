let valid = true
let invalid = false


const passwordPattern = {
    charLength: function(password) {
        if (password.length() >= 8){
            return valid
        } else if (password.length() < 8){
            return invalid
        }
    },
    upCase: function(password) {
        if (password.toUpperCase()) {
            return valid
        }else if (password.value.toUpperCase() != password.value){
            return invalid
        }
    },
    lowCase: function(password) {
        if (password.value.toLowerCase()) {
            return valid
        }else if (password.value.toLowerCase() != password.value){
            return invalid
        }
    
},
    num: function(password){
        let numbers = [0,1,2,3,4,5,6,7,8,9]
        for (i = 0; i < numbers.length; i++){
            if(password.indexof(password[i]) >= 0){
                return valid
            }
        }
    },
       
    specialChar: function(password) {
        let sc = ['!','@','#','$','%','^','&','?','~'] 
          for (i = 0; i < sc.length; i++)
        if (password.indexof(sc[i]) >= 0){
            return valid
        }else if  (password.value === !sc){
            return invalid
        } 
    }
}


const validatePassword = (password) => {  
 if (password === passwordPattern.num || 
    password === passwordPattern.specialChar ||
    password === passwordPattern.upCase ||
    password === passwordPattern.lowCase ||
    passwordPattern.charLength){
        return valid
    }else if (password != passwordPattern.num || 
        password != passwordPattern.specialChar ||
        password != passwordPattern.upCase ||
        password != passwordPattern.lowCase ||
        passwordPttern.charLength){
            return invalid
        }
       
    //if (password != passwordPattern.num && 
      //  passwordPattern.specialChar &&
        //passwordPattern.upCase &&
        //passwordPattern.lowCase &&
        //passwordPattern.charLength){
          //  return invalid

            //}

      
            
       
   
    //else if (password === 
    //passwordPattern.specialChar && 
    //passwordPattern.num &&
   // //passwordPattern.upCase &&
     //passwordPattern.lowCase &&
   // passwordPattern.charLength){ 
            //return true

      
}    
module.exports = validatePassword