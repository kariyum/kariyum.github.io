
window.onload = function (){
    getInfo()
}

function getInfo() {
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            sendInfo(this.responseText)
        }
    });

    xhr.open("GET", "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8");
    xhr.setRequestHeader("X-RapidAPI-Key", "b8de9b6948msh2f27e538c3ff90dp1d66a0jsn02be81fd7a42");
    xhr.setRequestHeader("X-RapidAPI-Host", "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com");

    xhr.send(data);
}

function sendInfo(info){
    const data = JSON.stringify({
        "personalizations": [
            {
                "to": [
                    {
                        "email": "leagueofkarim@gmail.com"
                    }
                ],
                "subject": "A new visitor !"
            }
        ],
        "from": {
            "email": "portfolio-heroku@example.com"
        },
        "content": [
            {
                "type": "text/plain",
                "value": info
            }
        ]
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("POST", "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("X-RapidAPI-Key", "b8de9b6948msh2f27e538c3ff90dp1d66a0jsn02be81fd7a42");
    xhr.setRequestHeader("X-RapidAPI-Host", "rapidprod-sendgrid-v1.p.rapidapi.com");
    
    xhr.send(data);
}