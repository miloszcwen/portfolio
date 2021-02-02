const preload = () => {
fetch('https://protected-taiga-19734.herokuapp.com/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: "a",
        password: "a"
    })
}).then(response=>response.json())
.then(null)
.catch(err1=>console.log(err1))

fetch('https://miloszcwen.github.io/fans/')
        .then((response) => response.json())
        .then(null)
        .catch(err2=>console.log(err2))
};

export default preload;
