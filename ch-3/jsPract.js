//concept
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log("commma delimited string from the array: ",schools.join(", "));

//concept
const arr1 = schools.filter((school) => school[0] === 'W') // doesn't changes the original argument, takes a predicate as the only argument
//use array.filter in case of removing elements instead of array.pop or array.splice coz array.filter is immutable

console.log("schools starting with W: ", arr1);

console.log("the original array schools: ", schools);

//filtering out specific school names as a new array

const arr2 = schools.filter( school => school.substring(0,4) != "York")

console.log("filtered array without york substring schools: ", arr2);


//array.map()

const highschools = schools.map(school => `${school} High School`);

console.log("full school names: ", highschools);

//converting array to object

console.log("with , delimeter string full school names:\n", highschools.join("\n "))
let rank = 1;
const schoolObjs = schools.map((school) => {
    return {
        school,
        rank: rank++
    }
})

console.log("Schools as objects: ", schoolObjs);

//changing the name of one school without mutating the shcools array

const mutatedSchool = schools.map(school => {
    if(school === "Yorktown" ) return "Dav";

    return school;
})
//i was trying to construct an array by removing the first element of the array, but that is not what array.map() does, it is array.reduce()'s thing

console.log("removed the first school: ", mutatedSchool);

//thoda saaa aur object manipulation

let schoolsObj = [
    { name: "Yorktown" },
    { name: "Stanford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
   ];


//    editStan(schoolsObj)[1] should be MIT


const editStan = (oldName, newName, arr) =>{ 
    return arr.map((obj) => {
        if(obj.name === oldName){
            return {
                ...obj, 
                name: newName
            }
        }
        else{
            return obj;
        }
        
    })
    }

const editedSchoolObj = editStan("Stanford","MIT",schoolsObj)


    
console.log("edited: ", editedSchoolObj);
console.log("original: ",schoolsObj);


//transform array into an object

//const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];


const schools1 = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
   };


   console.log(Object.keys(schools1));



//transform array into primitives and other objects
//uses reduce and reduceRight


const ages = [21, 18, 42, 40, 64, 63, 34];

const arrReducedToANumber = ages.reduce((max, age) => {
    return max > age? max: age;
}, 0)

console.log("arrReducedToANumber: ", arrReducedToANumber);


// story of arr.reduce - it takes two argument, the first is the callback funciton and the other is the original value, the first argument of the callback is the original value, 
//the callback runs for each element of the array, and then returns the final element, hence the arr gets reduced to a number.



const colors = [
    {
    id: "xekare",
    title: "rad red",
    rating: 3
    },
    {
    id: "jbwsof",
    title: "big blue",
    rating: 2
    },
    {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5
    },
    {
    id: "ryhbhsl",
    title: "banana",
    rating: 1
    }
   ];


// {
// "xekare": {
// title:"rad red",
// rating:3
// },
// "jbwsof": {
// title:"big blue",
// rating:2
// },
// "prigbj": {
// title:"grizzly grey",
// rating:5
// },
// "ryhbhsl": {
// title:"banana",
// rating:1
// }
// }


const colorHash = colors.reduce((clrHash,  {id, title, rating}) => {
    clrHash[id] = {title, rating};
    return clrHash
}, {})


console.log("colourHash: ", colorHash)




const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
 return hash;
}, {});
   


//reduce array with multiple occurences to unique occurences.
const colors1 = ["red", "red", "green", "blue", "green"];


const colors1uniqueObj = colors1.reduce((arr, ele) => {
    if(!arr.includes(ele)) {
        arr.push(ele);
    }
    return arr;
}, [])

console.log("unique ele array: ", Object.keys(colors1uniqueObj))



   








