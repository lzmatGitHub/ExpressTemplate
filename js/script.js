window.onload = function () {

    /*        GET Request
    const xhr = new XMLHttpRequest();
    const url = 'https://api.datamuse.com/words?rel_rhy=arm';
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    };
    xhr.open('GET', url);
    xhr.send();
    */



    const xhr = new XMLHttpRequest();
    const url = '/route';
    const data = JSON.stringify({
        value: 'I want to find this data'
    });
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    };
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(data);

};