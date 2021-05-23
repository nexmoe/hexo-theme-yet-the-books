function search() {
	window.open(
        document.getElementById("search_form").getAttribute("action_e") + " " + document.getElementById("search_value").value
	);
	return false;
}
