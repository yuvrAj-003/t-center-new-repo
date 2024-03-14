


async function getLocalData(){
    let response = await fetch("./shirts.json");
    let data = await response.json();
    return data;
}

export {getLocalData};