let items = [];

function addItem() {
  const name = document.getElementById("itemName").value;
  const percentage = parseInt(document.getElementById("itemPercentage").value);
  const color = document.getElementById("itemColor").value;

  if (name && percentage && color) {
    items.push({ name, percentage, color });
    renderChart();
    renderItems();
  } else {
    alert("Please fill in all fields");
  }
}

function renderChart() {
  const svg = document.getElementById("chartSVG");
  svg.innerHTML = "";

  let cumulativePercentage = 0;
  items.forEach((item) => {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    const radius = 100;
    const circumference = 2 * Math.PI * radius;
    const segmentPercentage = (item.percentage / 100) * circumference;

    circle.setAttribute("cx", 150);
    circle.setAttribute("cy", 150);
    circle.setAttribute("r", radius);
    circle.setAttribute(
      "stroke-dasharray",
      `${segmentPercentage} ${circumference}`
    );
    circle.setAttribute("stroke-dashoffset", -cumulativePercentage);
    circle.setAttribute("stroke", item.color);
    circle.setAttribute("stroke-width", "50");
    circle.setAttribute("fill", "transparent");

    svg.appendChild(circle);

    cumulativePercentage += segmentPercentage;
  });
}

function renderItems() {
  const itemsContainer = document.getElementById("chartContainer");
  itemsContainer.innerHTML = "";

  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");

    const colorIndicator = document.createElement("div");
    colorIndicator.style.backgroundColor = item.color;

    const itemName = document.createElement("span");
    itemName.textContent = `${item.name}: ${item.percentage}%`;

    itemElement.appendChild(colorIndicator);
    itemElement.appendChild(itemName);

    itemsContainer.appendChild(itemElement);
  });
}

renderChart();
renderItems();
