
/* JSON are two type:- stringify and parse  */


// const student = {
//     name: 'name nai',
//     age: 25,
//     job: 'student',
//     inTalent: true
// }
// console.log(student);

// const converted = JSON.stringify(student);
// console.log(converted);

// const objectConvert = JSON.parse(converted)
// console.log(objectConvert);

function loadApi() {

    fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => displayData(data))

}

function displayData(dataParam) {
    console.log(dataParam);
    const title = document.getElementById('title');
    title.innerText = dataParam.quote
    console.log(title);


}

