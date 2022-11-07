import { Task } from "./Task/index.js";

const check = document.querySelector("#checkbox-undone");

const renderTasks = (data) => {
  const ukoly = document.querySelector(".todo__tasks");
  ukoly.innerHTML = data.map((item) => Task(item)).join("");
};

const getData = (api) => {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then(renderTasks);
};

getData("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks");

check.addEventListener("change", () => {
  if (check.checked) {
    getData(
      "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false"
    );
  } else {
    getData("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks");
  }
});
