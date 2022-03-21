const request = new XMLHttpRequest();
request.open("GET", "https://www.delish.com/cooking/recipe-ideas/a23014857/classic-stuffed-peppers-recipe/");
request.send();
request.onload = () => {
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status}`)
    }
}