let nextPath;
function checkReferrer() {
    let referrerPath = document.referrer != "" ? new URL(document.referrer).pathname : "";
    let currPath = new URL(window.location.href).pathname;
    currPath = currPath.match(/\d+/);
    let currInt = document.referrer != "" ? parseInt(currPath[0]) : "";
    let expectedReferrerPath = "/wq" + (currInt-1);
    nextPath = "wq" + (currInt+1);
    console.log(currInt);
    console.log(nextPath);
    // Check if the referrer is not empty and pathname is the expected URL pathname
    if ((referrerPath == "") || (referrerPath != expectedReferrerPath)) {
        window.location.href = "wq1";
    }
} checkReferrer();