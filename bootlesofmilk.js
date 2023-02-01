//My Code 
function milk(){
    let i=0;
    
    var bootlesOfMilk=100;
    while (bootlesOfMilk > i) {
        console.log("the Bottle of Milk is "+ bootlesOfMilk + " I will Give it you ");
        bootlesOfMilk--;
    };
    if(bootlesOfMilk ==1 ){
        console.log("the Bottle of Milk is "+ bootlesOfMilk + " I will Give it you  ")
    }
        else if(bootlesOfMilk ==0){
            console.log("You have zero bootles ")
        }
};
milk();
  
//expert code
    var numberOfBottles = 99
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        } 
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
    	numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
