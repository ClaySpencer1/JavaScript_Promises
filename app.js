/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// TODO: Handle the resolved or rejected states of the promise
let pError = document.getElementById("error");
let ul = document.getElementById("list");

let promise = getList();
// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
function listContainer(list){
  list.forEach(hobbit => {
    let li = document.createElement("li")
    li.textContent = hobbit;
    ul.appendChild(li);
  });
}


// TODO: If the promise rejects with the failure object

function errorContainer(error){
  console.error(error);
  pError.textContent = error.message;
}
// Display the failure message in the paragraph element with id="error" (check index.html file)
promise.then(listContainer).catch(error);

//I did mine a little different from Hunter's example but it is completely functional