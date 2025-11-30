function showSavePopup() {
    const popup = document.getElementById("savePopup");
    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0";
    }, 1500);
}