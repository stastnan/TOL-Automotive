function changeWheelOnClick(e) {
  const target = e.target.closest("li");
  if (!target) return;

  let wheelType = "Diamond";
  let priceChange = 0;
  let itemName = "Diamond on the rise";

  if (target.querySelector("h3")?.textContent.includes("Square")) {
    wheelType = "Square";
    priceChange = 670;
    itemName = "Square targets";
  } else if (target.querySelector("h3")?.textContent.includes("Dark")) {
    wheelType = "Dark";
    priceChange = 870;
    itemName = "Dark circular";
  }

  const configItems = document.querySelectorAll(".confSelector ul li");
  configItems.forEach((item) => {
    item.style.backgroundColor = "";
  });

  target.style.backgroundColor = "#ddd";

  const selectedColor = localStorage.getItem("selectedColor") || "Red";
  const imageKey = `${selectedColor}${wheelType}`;
  const imageOptions = {
    RedDiamond: "1RedDiamond.png",
    RedSquare: "2RedSquare.png",
    RedDark: "3RedDark.png",
    SilverDiamond: "4SilverDiamond.png",
    SilverSquare: "6SilverSquare.png",
    SilverDark: "5SilverDark.png",
    GreenDiamond: "7GreenDiamond.png",
    GreenSquare: "8GreenSquare.png",
    GreenDark: "9GreenDark.png",
  };
  const selectedImage = imageOptions[imageKey];

  if (selectedImage) {
    const carWheelsImage = document.getElementById("car-wheels-image");
    carWheelsImage.setAttribute(
      "src",
      `Assets/carImageSelection/${selectedImage}`
    );
  }

  localStorage.setItem("selectedWheels", wheelType);

  if (window.updatePrice) {
    updatePrice(priceChange, itemName);
  } else {
    console.error("updatePrice function is not available");
  }
}

