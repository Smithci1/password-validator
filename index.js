let valid = true

const passwordPattern = {
    charLength: function() {
        if (password.value.length() >= 8){
            return valid
        } 
    },
    Case: function() {
        if ((password.value.toLowerCase()) && (password.value.toUpperCase())) {
            return valid    
        }
    },
    num: function(){
        if (password.value === [0-9]){
            return valid
        }    
    },
    specialChar: function(){
        let sc = []
    }
}

const validatePassword = (password) => {
    let lengthCase = ((passwordPattern.charLength) && (passwordPattern.Case))  
    let numSc = ((passwordPattern.num) && (passwordPattern.specialChar))

    if (lengthCase && numSc) {
        return true
        
    }else false
        
        
        
        
        
        
        
        
        
}
module.exports = validatePassword