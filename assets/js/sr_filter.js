
  const range = document.querySelector(".range"); //Khởi tạo biến range từ tên element có class là .range
  const number = document.querySelector(".number");

  range.addEventListener("input", () => {
    setNumber(range, number);
  }); // Set giá trị cho output khi input có thay đổi

  setNumber(range, number); // Set giá trị ban đầu của input cho output khi vừa load filter

function setNumber(range, number) {
  const val = range.value;
  const min = range.min;
  const max = range.max;
  const newVal = Number(((val - min) * 100) / (max - min));
  number.innerHTML = val;

  // Tính vị trí cho number khi giá trị range thay đổi
  number.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px`;
}

function showFilter(name){ 
  document.querySelector(`${name}`).style.display = "block";

}
function hideFilter(name){ 
  document.querySelector(`${name}`).style.display = "none";
}
