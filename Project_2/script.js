var btnShares = document.querySelectorAll(".share")
btnShares.forEach(btn => {
    btn.onclick = function () {
        alert("Copy Successful: https://smileeyecharity.org/")
        navigator.clipboard.writeText("https://smileeyecharity.org/")
    }
});