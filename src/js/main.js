import "../styles/style.scss";

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.display = "block";
    // document.querySelector("#loader").style.visibility = "visible";
  } else {
    // document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.display = "block";
  }
};
