// Copyright year
try {
    document.getElementById("copy-year").innerHTML = new Date().getFullYear();
} catch (error) {
    console.log("ID \"copy-year\" not found. Skipped.");
}
