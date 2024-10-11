// get the buy section element
var buySection = document.querySelectorAll("ul.tralbumCommands");

// create the details tag
var details = document.createElement('details');
var summary = document.createElement('summary');
summary.innerHTML = "Buy album";
summary.style.setProperty("cursor", "pointer", "important")
summary.style.setProperty("font-size", "20px", "important")
summary.className = "download-link buy-link"
details.appendChild(summary);
details.className = "tralbumCommands"

// add the buy section to the details tag
buySection[0].parentNode.insertBefore(details, buySection[0]);
details.appendChild(buySection[0]);