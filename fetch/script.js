const getPost = () => {
    return fetch("/i.json")
    .then(function (res) {
        res.json()
    })
    .then(function (posts) {
        console.log(posts)
    });
}

console.log(getPost());