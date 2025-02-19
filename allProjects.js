
function calculateVAT( price ) {
    if ( price < 0 || typeof price !== 'number' ) {
        
        return "Invalid" ; }
    
    const vatRate= 7.5 ;
    const vat = (price*vatRate)/100 ;
    return vat ;

} 
    

function  validContact( contact ) {
    if ( typeof contact !== 'string' ) {
        
        return "Invalid" ; }

        else if (contact.length !== 11) {
            return false ;
        }
        else if (contact[0] !== "0" || contact[1] !== "1"){
            return false ;
        }
        else if (contact.includes (" ") ){
            return false ;
        }
        else {
            for (let i = 0; i < contact.length; i++) {
                if (contact[i] !== "0" && contact [i]!== "1" && contact [i]!== "2" &&
                    contact[i] !== "3" && contact [i]!== "4" && contact [i]!== "5" &&
                    contact[i] !== "6" && contact [i]!== "7" && contact [i]!== "8" &&
                    contact[i] !== "9") {
                        return false ;
                    }
        }
    }

  return true;
    
}

function  willSuccess( marks ) {

    let arrayTester= Array.isArray(marks);
    
    if (arrayTester === false){       
            return "Invalid" ; 
    }
    
    let passed =0,failed=0;
    for (let i = 0; i < marks.length; i++){
        if ( marks[i] >= 50) {
            passed=passed+1;
        } 
        else {
            failed=failed+1;
        }
    }
    
    if (passed > failed){
        return true;
    }
    else {
        return false;
    }
}

function  validProposal( person1 , person2 ) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
}   
        else if (person1.gender === person2.gender) {
    return false;
}   const age=person1.age - person2.age
    const ageGap= Math.abs(age);
    const maxGap= 7;
    if (ageGap>maxGap){
        return false;
    }
    
    return true;
}

function  calculateSleepTime( times ) {

    let totalTimes=0;
    const timeFrame=60;

    for (let i = 0; i < times.length; i++){
    if (typeof times[i] !== 'number') {
        return "Invalid";
      }
      totalTimes=totalTimes+times[i];
    }

    let hoursDone= parseInt(totalTimes/(timeFrame*timeFrame));
    let minutesDone=parseInt((totalTimes % (timeFrame*timeFrame))/timeFrame);
    let secondsDone=parseInt(totalTimes% timeFrame);
    
    let final= { hour: hoursDone, minute: minutesDone, second: secondsDone };
    
    return final;

}

