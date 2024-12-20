// const company = {
//     name: 'devzone-It',
//     ceo: {
//         name: "Rizvee",
//         food: "BEEF WITH RICE"
//     },
//     Technology: {
//         first: 'javascript',
//         second: 'React',
//         third: 'next js',
//         backend: 'node & express',
//         upcomming: {
//             recent: 'Typescript',
//             validation: 'Mongooes',
//             more: 'Zod'
//         }
//     },
//     age: 12,
//     future: 'just growth'
// }



// const backendResult = company?.Technology?.backend;
// const security = company?.Technology?.upcomming?.validation
// console.log(backendResult);
// console.log(security);


// const name = company?.name
// const age = company?.age
// const future = company.future

// const { name, futre , age , ceo} = company
// console.log(ceo.food);



const company = {
    name: 'devzone-It',
    age: 12,
    future: 'just growth'
}

// Object.seal(company)
// company.future = 'Bright';
// console.log(company);

/* seal korle modify kora jay */


// Object.freeze(company)
// company.future = 'Bright';
// console.log(company);

/* Freeze korle modify kora jayna */


//  Object.freeze(company)
// delete company.age
//  console.log(company);

 /* Freeze korle modify,delete ,kono kichu kora jayna */


//  Object.seal(company)
// delete company.age
//  console.log(company);

/* modify kora jay but delete kora jayna */