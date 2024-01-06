function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
    } else {
        const lovePer = Math.ceil(Math.random() * 100);
        const result = document.getElementById("result");
        result.innerHTML = "Your love percentage is " + lovePer + "%";

        if (lovePer < 30) {
            result.innerHTML += "<br> Not a great match, keep loving more";
        }
        else if (lovePer > 30|| lovePer<70) {
            result.innerHTML += "<br> A great match, keep loving more";
        }
        else {
            result.innerHTML += "<br> Perfect match, keep loving same";
        }
    }
}
