module.exports = { calculateVAT };
module.exports = { validContact };
// ------------------------
/*
function calculateVAT( price ) {
    if ( price < 0 || typeof price !== 'number' ) {
        
        return "Invalid" ; }
    
    const vatRate= 7.5 ;
    const vat = (price*vatRate)/100 ;
    return vat ;

} 
    */

//  2nd problem

function  validContact( contact ) {
    if ( typeof contact !== 'string' ) {
        
        return "Invalid" ; }

        else if (contact !== 11) {
            return false ;
        }
        else if (contact[0] !== "0" && contact[1] !== "1"){
            return false ;
        }
        else if (contact.includes (" ") ){
            return false ;
        }
        else {
            for (let i = 0; i < contact.length; i++) {
                if (contact[i]!== "0" || contact[i]!== "1" || contact[i]!== "2" ||
                    contact[i]!== "3" || contact[i]!== "4" || contact[i]!== "5" ||
                    contact[i]!== "6" || contact[i]!== "7" || contact[i]!== "8" ||
                    contact[i]!== "9") {
                        return false ;
                    }
        }
    }

  return true;
    
}

