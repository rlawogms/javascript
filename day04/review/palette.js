const colorList = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
];

colorList.forEach((v)=>{
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.backgroundColor = v;
    newDiv.addEventListener("click", () => {
        window.alert(`${v} 색깔이 클릭되었습니다.`);
    });
    const palette = document.querySelector(".palette");
    palette.appendChild(newDiv);
});
