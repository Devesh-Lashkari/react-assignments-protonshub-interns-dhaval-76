const printInputValues = (e) => {
  console.log(e.target.id, ": ", e.target.value);
};

document
  .querySelectorAll("input")
  .forEach((elem) => elem.addEventListener("input", printInputValues));

let isFirstTimeUser = true;

const table = document.getElementById("table");

const formSubmit = (e) => {
  e.preventDefault();

  if (isFirstTimeUser) {
    table.classList.remove("none");
  }

  const row = table.insertRow();

  const formArray = e.target;

  for (let index = 0; index < formArray.length - 1; index++) {
    row.insertCell().innerHTML = formArray[index].value;
  }

  e.target.reset();
};
