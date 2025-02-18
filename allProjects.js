module.exports = { calculateVAT };
module.exports = { validContact };
// ------------------------

function calculateVAT( price ) {
    if ( price < 0 || typeof price !== 'number' ) 
        
        return "Invalid" ;
    
    const vatRate= 7.5 ;
    const vat = (price*vatRate)/100 ;
    return vat ;

}

//  2nd problem

function  validContact( contact ) {
    if ( typeof price !== 'string' ) 
        
        return "Invalid" ;

    
}

