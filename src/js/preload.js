const preload = () => {
fetch('https://protected-taiga-19734.herokuapp.com/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: "a",
        password: "b"
    })
    })
    .then(response=>response.json())
    .then(null)
    .catch(null)

fetch('https://miloszcwen.github.io/fans/')
    .then((response) => response.json())
    .then(null)
    .catch(null)
}

export default preload;
