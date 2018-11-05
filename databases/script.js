"use strict";

const form = document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  addMessage(form.elements.name.value, form.elements.content.value);
});

function getData() {
  fetch("https://5be00efaf2ef840013994a8e.mockapi.io/name/")
    .then(res => res.json())
    .then(showMessage);
}

getData();

const temp = document.querySelector("#messageTemplate").content;

function showMessage(data) {
  data.forEach(mes => {
    let clone = temp.cloneNode(true);
    clone.querySelector("h2").textContent = mes.name;
    clone.querySelector("p").textContent = mes.createdAt;
    clone.querySelector("#content").textContent = mes.Content;
    clone.querySelector("article").dataset.id = mes.id;
    clone.querySelector(".edit").addEventListener("click", populateEditForm);
    clone.querySelector(".delete").addEventListener("click", deleteMessage);
    console.log(
      clone.querySelector(".delete").addEventListener("click", deleteMessage)
    );
    document.querySelector("main").appendChild(clone);
  });
}

function populateEditForm(e) {
  const parent = e.target.parentElement;
  const id = e.target.parentElement.dataset.id;
  console.log(parent.querySelector("h2").textContent);
  updateForm.elements.name.value = parent.querySelector("h2").textContent;
  updateForm.elements.content.value = parent.querySelector("div").textContent;
  //updateForm.elements.id.value = parent.querySelector("#formId").value;
}

function deleteMessage(id) {
  //you can delete from dom here, but it is optimistic, because ypu dont know if it works. But user might be not realise it has been deleted and press again.
  fetch("https://5be00efaf2ef840013994a8e.mockapi.io/" + id, {
    method: "delete"
  })
    .then(res => res.json())
    .then(data => {
      console.log("data was deleted", data);
      // delete from DOM here
    });
}

/* DELETE
2. addEventlistner
    call deleteMessage
3. remove from DOM
    elem.remove()
4.*/

function addMessage(formName, formContent) {
  const data = {
    name: formName,
    content: formContent,
    createdAt: "2018-11-23T08:30:27.154Z"
  };
  console.log(data);

  fetch("https://5be00efaf2ef840013994a8e.mockapi.io/name", {
    //add data
    method: "post",
    body: JSON.stringify(e),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(d => {
      console.log(d);
    });
}

function update(id, updatedName, updatedContent) {
  const payLoad = {
    name: updatedName,
    content: updatedContent
  };
  const id = 4;
  const postData = JSON.stringify(payLoad);
  fetch(`https://5be00efaf2ef840013994a8e.mockapi.io/name/${id}`, {
    method: "put",
    headers: {
      "content-type": "application/json; charset=utf=8"
    },
    body: postData
  })
    .then(res => res.json())
    .then(d => {
      console.log(d);
    });
}
