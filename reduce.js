/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {

    // let initialArray = []
    
    // initialArray = arr.reduce(function(acc,next){
    //     // console.log(acc);
    //     acc.push(next[key]);
    //     return acc;
    // },initialArray)

    // // console.log(initialArray);

    // return initialArray;

    // console.log(arr);
    // console.log(key);

    return arr.reduce((acc,nextValue) => {

        // console.log(acc);
        // console.log(nextValue[key]);
        acc.push(nextValue[key]);
        // console.log(acc);
        return acc;
    
    },[]);

}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {

    // const vowels = 'aeiou'
    
    // // console.log(str);

    // let vCount = {}

    // vCount =

    // str.split('').reduce(function(acc, next){

    //     // console.log(acc);
    //     // console.log(next);

    //     let strLc = next.toLowerCase();

    //     if (vowels.indexOf(strLc) !== -1) {
            
    //         if (acc[strLc]) {
    //             acc[strLc]++;
    //         }
    //         else {
    //             acc[strLc] = 1;
    //         }
    //     }

    //     // console.log(acc);

    //     return acc;

    // },{});

    // // console.log(vCount);
    // return vCount;

    const vowels = 'aeiou';

    let strLc = str.toLowerCase();

    let strLcAsArray = strLc.split('');

    // console.log(strLcAsArray);

    let solution =

    strLcAsArray.reduce(function(acc,next) {
        // console.log(acc);
        // console.log(next);
        // console.log(vowels.indexOf(next));
        // console.log(acc[next]);

        if (vowels.indexOf(next) !== -1) {
            if(acc[next]) {
                acc[next]++;
            }
            else {
                acc[next] = 1;
            }
        }
        // console.log(acc);
        return acc;
    },{});

    return solution;



}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {

    // // console.log(arr);
    // // console.log(key);
    // // console.log(value);

    // return arr.reduce((acc,next,idx) => {
    //     acc[idx][key] = value;
    //     return acc;
    // },arr);

    //

    // console.log(arr);
    // console.log(key);
    // console.log(value);

    let solution =

    arr.reduce(function(acc,next,idx) {
        // console.log(acc);
        // console.log(next);
        // console.log(idx);

        acc.push(next);
        acc[idx][key] = value;

        // console.log(acc);

        return acc;
    },[]);

    // console.log(solution);
    // console.log(arr);
    return solution;

    // Check the odd behavior - showing answer when code complete in previous arrays - even ones without same variable name...
    // Ask Mikael


}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {

    // return arr.reduce(function(acc,next){
    //     if (callback(next)) {
    //         acc[0].push(next);
    //     } else {
    //         acc[1].push(next);
    //     }
    //     return acc;
    // }, [[],[]]);

    console.log(arr);
    console.log(callback);

    let solution =

    arr.reduce((acc,next) => {
        console.log(acc);
        console.log(next);

        if (callback(next) === true) {
            acc[0].push(next);
        }

        else {
            acc[1].push(next);
        }

        return acc;

    },[[],[]])

    console.log(solution);

    return solution;

}

// This was very difficult - review with Mikael