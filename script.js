const container = document.getElementById("formContainer");
container.classList.add("container-sm");

const heading = document.createElement("h1");
heading.textContent = "IP Address Tracker";
heading.classList.add("text-center");
container.appendChild(heading);

// form to get IP address
const form = document.createElement("form");
form.id = "ipTrack";
form.classList.add("mt-5");
const divForm = document.createElement("div");
divForm.classList.add("row","mb-3","d-flex","align-items-center","justify-content-center");
const inputDiv = document.createElement("div");
inputDiv.classList.add("col-8");
const inputIP= document.createElement("input");
inputIP.setAttribute("type", "text");
inputIP.setAttribute("placeholder", "Enter IP Address for tracking");
inputIP.classList.add("form-control");
inputIP.id = "ipInput";
inputDiv.appendChild(inputIP);
const btnDiv = document.createElement("div");
btnDiv.classList.add("col-4");
const trackButton = document.createElement("button");
trackButton.setAttribute("type","button");
trackButton.setAttribute("data-bs-toggle","modal");
trackButton.setAttribute("data-bs-target","#infoModal");
trackButton.classList.add("btn","btn-primary");
trackButton.textContent = "Track IP Address";
trackButton.id = "track";
btnDiv.appendChild(trackButton);
const br = document.createElement("br");

// assembling form elements
divForm.appendChild(inputDiv);
divForm.appendChild(br);
divForm.appendChild(btnDiv);
form.appendChild(divForm);
container.appendChild(form);

// infoModal

const infoContainer = document.createElement("div");
infoContainer.classList.add("modal","fade");
infoContainer.id = "infoModal";
infoContainer.setAttribute("aria-labelledby","headerLabel");
infoContainer.setAttribute("aria-hidden","true");
infoContainer.setAttribute("tab-index","-1");

const infoDialog = document.createElement("div");
infoDialog.classList.add("modal-dialog", "modal-dialog-centered");
const infoContent = document.createElement("div");
infoContent.classList.add("modal-content");
const infoHeader = document.createElement("div");
infoHeader.classList.add("modal-header");
const infoBody = document.createElement("div");
infoBody.classList.add("modal-body");
const infoFooter = document.createElement("div");
infoFooter.classList.add("modal-footer");
// header elements
const modalTitle = document.createElement("h5");
modalTitle.id = "headerLabel";
modalTitle.textContent = "IP Address Details";
const closeButton = document.createElement("button");
closeButton.classList.add("btn-close");
closeButton.setAttribute("type","button");
closeButton.setAttribute("data-bs-dismiss","modal");
closeButton.setAttribute("aria-label","Close");
infoHeader.appendChild(modalTitle);
infoHeader.appendChild(closeButton);

// body elements
let p1 = document.createElement("p");
p1.innerHTML =`Country: <span id="country"></span>`;
let p2 = document.createElement("p");
p2.innerHTML =`City: <span id="city"></span>`;
let p3 = document.createElement("p");
p3.innerHTML =`Organisation: <span id="org"></span>`;
let p4 = document.createElement("p");
p4.innerHTML =`Latitude: <span id="lat"></span>`;
let p5 = document.createElement("p");
p5.innerHTML =`Longitude: <span id="lon"></span>`;

infoBody.appendChild(p1);
infoBody.appendChild(p2);
infoBody.appendChild(p3);
infoBody.appendChild(p4);
infoBody.appendChild(p5);

// footer elements
const footerCloseButton = document.createElement("button");
footerCloseButton.classList.add("btn","btn-secondary");
footerCloseButton.setAttribute("type","button");
footerCloseButton.setAttribute("data-bs-dismiss","modal");
footerCloseButton.textContent = "Close";
infoFooter.appendChild(footerCloseButton);

infoContent.appendChild(infoHeader);
infoContent.appendChild(infoBody);
infoContent.appendChild(infoFooter);
infoDialog.appendChild(infoContent);

infoContainer.appendChild(infoDialog);

container.appendChild(infoContainer);


// fetching details
let country = document.getElementById("country");
let city = document.getElementById("city");
let org = document.getElementById("org");
let lat = document.getElementById("lat");
let lon = document.getElementById("lon");

let track = document.getElementById("track");

async function getApi() {
    try { 
        let ip = document.getElementById("ipInput").value;        
        const api_url =`https://ipapi.co/${ip}/json/`;
        // console.log(api_url);    
        const response = await fetch(api_url);
        var data = await response.json();
        if(data){
            country.textContent = data.country_name;
            city.textContent = data.city ;
            org.textContent = data.org ;
            lat.textContent = data.latitude ;
            lon.textContent = data.longitude ;  
        } else{
            alert("Tracking not available");
            country.textContent = "Not Available";
            city.textContent = "Not Available";
            isp.textContent = "Not Available";
            lat.textContent = "Not Available";
            lon.textContent = "Not Available";
        }
        document.getElementById("ipTrack").reset();      
    } catch(err) {
        // error
        console.log(err);
    }
}

track.addEventListener("click",getApi);


















 