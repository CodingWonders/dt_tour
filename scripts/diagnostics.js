function gatherDiagnostics() {
    var finalDiagnosticMessage = "DIAGNOSTIC INFORMATION:\n";
    finalDiagnosticMessage += ` - Language: ${navigator.language}\n`;
    finalDiagnosticMessage += ` - Online: ${navigator.onLine}\n`;
    finalDiagnosticMessage += ` - Screen Size: ${window.screen.width}x${window.screen.height}\n`;
    finalDiagnosticMessage += ` - Window Size: ${window.innerWidth}x${window.innerHeight}\n`;
    finalDiagnosticMessage += ` - User Agent: ${navigator.userAgent}\n`;

    console.log(finalDiagnosticMessage);
    alert("Diagnostic information has been logged to the console. Use the browser's \"Inspect\" window (which you can trigger in most browsers by pressing F12), and go to the Console.\n\nReport this information to the developers.");
}