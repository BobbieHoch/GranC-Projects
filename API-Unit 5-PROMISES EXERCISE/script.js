 // Fetch requests
// fetch('https://grandcircusco.github.io/demo-apis/wrong.json')
//   // Promise is resolved
//   .then((res) => res.json()) // Getting json response from the Response object
//   .then((jsonData) => console.log(jsonData))
//   // Promise is rejected
//   .catch((error) => console.log(error));

// // Async function
// async function fetcher() {
//   const promise = await fetch(
//     'https://grandcircusco.github.io/demo-apis/donuts.json'
//   );
//   const response = await promise.json(); // Getting json response from the Response object
//   return response;
// }


const apiPromise = 
fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
.then((res) => res.json())
.then(jsonDate) => {

  const donutList = document.createElement('ul');
  ///console.log(jsonDate.results);

  jsonDate.results.forEach((donut => {

    const li= document.createElement('li');
    
  })
}
