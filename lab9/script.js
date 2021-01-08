function onClickListener(button) {
    function isNumberWithoutDot(str) {
        let number = parseInt(str);
        if (isNaN(number)) return false;
        return !str.includes(".");
    }
    function isNumber(str) {
        return !isNaN(parseInt(span.textContent));
    }

    let display = document.getElementById("display");
    let span = display.querySelector("span:last-child");
    if (span == null) {
        span = document.createElement("span");
        display.append(span);
    }
    let buttonText = button.textContent;
    switch (buttonText) {
        case "C":
            while (display.children.length > 0) {
                display.children[0].remove();
            }
            break;
        case "⇐":
            let len = span.textContent.length;
            if (len > 1) {
                span.textContent = span.textContent.substr(0, len - 1);
            } else {
                span.remove();
            }
            break;
        case "+":
        case "*":
        case "/":
        case "-":
            if (isNumber(span.textContent)) {
                let newSpan = document.createElement("span");
                span.after(newSpan);
                newSpan.textContent = buttonText;
            } else if (display.children.length > 1 || buttonText == "-")
                span.textContent = buttonText;
            break;
        case "=":
            display.children[0].textContent = eval(display.textContent);
            while (display.children.length > 1) {
                display.children[1].remove();
            }
            break;
        case ".":
            if (isNumberWithoutDot(span.textContent))
                span.textContent = span.textContent + ".";
            break;
        default:
            if (!isNumber(span.textContent)) {
                let newSpan = document.createElement("span");
                span.after(newSpan);
                span = newSpan;
            } else if (parseInt(span.textContent) === 0 && !span.textContent.includes(".")) break;
            span.textContent = span.textContent + buttonText;
    }

}