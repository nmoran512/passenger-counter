//A relation is reflexive if and only if there is an ordered pair (a,a) in the set r1 for every element (a) in A.

//declaring and initializing set A, every element in this set must be represented in (a,a) fashion (such that a is an element in the set A)
const setA: number[] = [1,2,3,4];
//relation
const relation: number[][] = [
    [1,1],
    [1,2],
    [2,2],
    [2,3],
    [3,3],
    [4,4]
];


function isReflexive(set: number[], relate: number[][]): boolean{
    let result: boolean;
    //this (i) loop will search through set A to compare each element in the relation.
    for(let elementInA = 0; elementInA < set.length; elementInA++){
        //this rowInRelation loop will search through each row of the multidimensional array
        //that represents the relation with each element being an ordered pair
        for(let rowInRelation = 0;  rowInRelation< relate.length; rowInRelation++){
            //comparison of each of the 2 elements in each rowInRelation as an 'ordered pair'
           if(relate[rowInRelation][0] === set[elementInA] && relate[rowInRelation][1] === set[elementInA]){
               //If it finds an instance where one element in the multidimensional array
               //has both elements of each array (the arrays that make up the multidimensional)
               // then break out of the loop and look for another element in the set A.
               result = true;
               break;
           }
           //reinitializes result to false (if result was previously true).
           //will be false only if none of the elements of the array in the multidimensional
          // array matched the (a,a) format (such that a is an element in set A)
           result = false;
        }
        //if there is an instance where one element in the set A was not
       // represented in the relation as (a,a) then the whole loop is done, and the relation is
      // not reflexive
        if(result === false){
            break;
        }
    }
    return result;
}

console.log('\nIs set R1 ={(1,1),(1,2),(2,2),(2,3),(3,3),(4,4)} reflexive of set A = {1,2,3,4}? : \n' + isReflexive(setA, relation));