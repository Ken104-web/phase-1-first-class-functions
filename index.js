/*function morningRoutine(exercise){
    let breakfast;
    
    if(exesice === liftWeights){
        breakfast = 'Protein bar';
    } else if(exersice === swimFortyLaps){
        breakfast = 'Kale smoothie';
    } else {
        breakfast = 'granola';
    }
exerciseRoutine(exersice);
return function (){
    console.log('Nom nom nom, this ${breakfast} is delicious!');
};
}
morningRoutine()*/
function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function namedFunction(){
        console.log(`before all`)
    }
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return function() {
        console.log(`before all`)
    }
    }; // returns an anonymous function
