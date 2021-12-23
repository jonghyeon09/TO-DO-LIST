const today = document.querySelector("#today");

function getDate() {
  const day = new Date();
  const year = day.getFullYear();
  const month = String(day.getMonth()).padStart(2, "0");
  const date = String(day.getDate()).padStart(2, "0");
  today.innerText = `${year}년 ${month}월 ${date}일`;
}

getDate();
