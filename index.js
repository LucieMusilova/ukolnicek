import { Task } from "./Task/index.js";

const check = document.querySelector("#checkbox-undone");

const renderTasks = (data) => {
  const ukoly = document.querySelector(".todo__tasks");
  ukoly.innerHTML = data.map((item) => Task(item)).join("");
};

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
  .then((response) => {
    return response.json();
  })
  .then(renderTasks);

check.addEventListener("change", () => {
  if (check.checked) {
    fetch(
      "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false"
    )
      .then((response) => {
        return response.json();
      })
      .then(renderTasks);
  } else {
    fetch(
      "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks"
    )
      .then((response) => {
        return response.json();
      })
      .then(renderTasks);
  }
});
