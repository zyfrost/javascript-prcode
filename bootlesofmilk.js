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
