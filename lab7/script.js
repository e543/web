
function createFigure(figureName) {
    let count = document.getElementById('count').value;
    count = parseInt(count);
    if (isNaN(count) || count < 1) {
        alert("incorrect number");
        return;
    }
    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;

    for (let i = 0; i < count; i++) {
        let fig = document.createElement("div");
        fig.classList.add(figureName);

        let size = Math.random() * 500 + 50;
        fig.style.width = `${size}px`;
        fig.style.height = `${size}px`;

        fig.style.top = `${Math.random() * (viewHeight - size - 100) + 100}px`;
        fig.style.left = `${Math.random() * (viewWidth - size)}px`;
        document.body.append(fig);

        fig.addEventListener("click", oneclick);
        fig.addEventListener("dblclick", doubleclick);
    }

}
oneclick = (event) => {
    event.target.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
}
doubleclick = (event) => {
        event.target.style.display = "none";
}