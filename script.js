/* The loop that makes the countdown happen */
for (let i = 10; i >= 0; i--) {
    setTimeout(function () {
        document.getElementById("count").innerText = i; /* Renders the numbers in the elment with the "count"-id */
        console.log(i); /* Left this here for development purposes */
    }, (10 - i) * 1000); /* Makes the number change every second */
}