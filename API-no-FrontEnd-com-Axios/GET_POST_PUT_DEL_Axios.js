import { get } from "./node_modules/axios";

const apiResult = document.getElementById("apiResult")

const url = "http://localhost:5500/api"

function getUser() {
    get("http://localhost:5500/api")
        .then(response => {
            apiResult.innerText = response.data.users[0].name
        })
        .catch(error => console.error(error))
}

getUser()