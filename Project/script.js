var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.querySelectorAll("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btns.forEach(btn => {
    btn.onclick = function () {
        console.log(1);
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById("myModal1");
var btns1 = document.querySelectorAll(".image-19-icon");
btns1.forEach(btn => {
    btn.onclick = function () {
        var copyText = "https://smileeyecharity.org/"

        // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);

        // Alert the copied text
        alert("Copied the text: " + copyText);
    }
});
var share = document.querySelectorAll(".image-18-icon6");
share[0].onclick = function () {
    var copyText = "https://smileeyecharity.org/"

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
}

