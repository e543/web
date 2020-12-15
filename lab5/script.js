
function show(id) {
    modal = document.getElementById(id);
    modal.showModal()
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}