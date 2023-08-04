// function convertCode() {
//     const codeInput = document.getElementById("codeInput").value;
//     const languageSelect = document.getElementById("languageSelect");
//     const targetLanguage = languageSelect.options[languageSelect.selectedIndex].value;

//     // Make a request to the backend API for code conversion
//     fetch("http://localhost:3000/convert", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({codeInput,targetLanguage })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById("convertedCode").textContent = data.convertedCode;
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// }

// function debugCode() {
//     const debugCodeInput = document.getElementById("debugCodeInput").value;

//     // Make a request to the backend API for code debugging
//     fetch("http://localhost:3000/debug", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ CodeInput: debugCodeInput })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById("debuggedCode").textContent = data.debuggedCode;
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// }

// function performQualityCheck() {
//     const qualityCheckCodeInput = document.getElementById("qualityCheckCodeInput").value;

//     // Make a request to the backend API for code quality check
//     fetch("http://localhost:3000/qualitycheck", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ CodeInput: qualityCheckCodeInput })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById("qualityCheckResult").textContent = data.qualityCheckResult;
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// }