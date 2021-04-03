let valid = true
let invalid = false


const passwordPattern = {
    charLength: function() {
        if (password.value.length() >= 8){
            return valid
        } else if (password.value.length() < 9){
            return invalid
        }
    },
    upCase: function() {
        if (password.value.toUpperCase()) {
            return valid
        }else if (!password.value.toUpperCase()){
            return invalid
        }
    },
    lowCase: function() {
        if (password.value.toLowerCase()) {
            return valid
        }else if (!password.value.toLowerCase()){
            return invalid
        }
    
},
    num: function(){
        if (password.value === [0-9]){
            return valid
        } else if (password.value != [0-9]){
            return invalid
        }
    },
    specialChar: function(){
        let sc = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (password.value === sc){
            return valid
        }else if  (password.value != sc){
            return invalid
        }
    }
}
const validatePassword = (password) => {  
      
 if (password === passwordPattern.specialChar && 
    password === passwordPattern.num &&
    password === passwordPattern.upCase &&
    password === passwordPattern.lowCase &&
    password === passwordPattern.charLength){
        return valid

    }else return invalid
            
}
module.exports = validatePassword