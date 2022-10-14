console.log("jay shree ram ");

// here is clear function to clear the textarea

function remove() {
  let text = document.getElementById("exampleFormControlTextarea1");
  text.value = " ";
}

// here is copy function to copy the material which is written in textarea

function copy() {
  let text = document.getElementById("exampleFormControlTextarea1");
  navigator.clipboard.writeText(text.value);
  alert("coppied to clipboard ");
}

// we take input details

let extract = () => {
  let text = document.getElementById("exampleFormControlTextarea1");
  let lower = text.value.toLowerCase();

  // here we get  all words in an array by useing split(" ") mathod

  let words = lower.split(" ");
  let details = [];

  // here is testing that word contain gmail or not

  for (let i = 0; i < words.length; i++) {
    let test = words[i];
    let check = test.includes("@gmail.com");
    if (check === true) {
      details.push(test);
    }
  }

  // now we sort the emails what we have  we found

  details = details.sort();

  // here we are going to print those emails

  let main = document.getElementById("main");
  let data = "";

  for (let i = 0; i < details.length; i++) {
    data += `
     <tr>
       <th scope="row">${i + 1}</th>
       <td>${details[i]}</td>
     </tr>

     `;
  }

  main.innerHTML = data;

  let num = document.getElementById("text");

  // here we print that how many emails found

  let totalEmail = document.getElementById("totalEmail");

  if (details.length < 2) {
    totalEmail.innerHTML = `${details.length} Email found  `;
  } else {
    totalEmail.innerHTML = `${details.length} Emails found  `;
  }

  // here we change color of that heading and print emails in textarea if found otherwise we clear textarea

  if (details.length == 0) {
    totalEmail.style.color = "orange";
    text.value = " ";
  } else {
    totalEmail.style.color = "green";
    text.value = details;
  }
};
