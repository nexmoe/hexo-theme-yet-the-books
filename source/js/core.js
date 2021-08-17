function search() {
	window.open(
		document.getElementById("search_form").getAttribute("action_e") +
			" " +
			document.getElementById("search_value").value
	);
	return false;
}

let display = false;
function displayAll() {
	let elements = document.querySelectorAll(".catalogue .hidden");
	if (!display) {
		for (let elem of elements) {
			elem.style.display = "block";
			display = true;
		}
	} else {
		for (let elem of elements) {
			elem.style.display = "none";
			display = false;
		}
	}
}
