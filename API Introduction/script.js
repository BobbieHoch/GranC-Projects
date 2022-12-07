//Fetch request
fetch('https://grandcircusco.github.io/demo-apis.wrong.json')
//Promize is resolved
.then(res) => res.json()) //Getting json response from the Response object
.then((jsonData)=> console.log(jsonData))
//promise is rejected
.catch((error))

//Async function
async function fetcher(){
    const promise = await fetch(
        'https://grandscircusco.githib.io/demo-apis/donuts.json')
}


//Fetch requests
fetch ('https://grandscircusco.githib.io/demo-apis/donuts.json')

  .then((res)) => res.json();
then((jsonData) => {
    const donutlist = documnet.createElement ('ul')
})


//Make a POST request to the JSON place holder api to add a new post to the database
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  //"{title": "foo, "body":"bar" , "userId": 1}""
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


//   Create a ul element
    const list = document.createElement('ul');

    console.log(jsonData.results);

    data.results.forEach((person) => {
      // Create an li element
      const li = document.createElement('li');
      // Set the inner text of the li
      li.innerText = donut.name;
      // Append the li elements to our donut list ul
      donutList.appendChild(li);
    });

    document.body.appendChild(donutList);
