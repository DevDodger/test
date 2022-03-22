const defaultOptions = {
    URL: "http://localhost:5500",
    method: "GET",
    delays: {
        enabled: false,
        delayMs: 1000
    }
}

function api (url, method, logToConsole) {
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (logToConsole) {
            console.log(data);
        }
        return response.json();
    }).catch(error => {
        console.log(error);
    });
}