const preload = () => {
fetch('https://protected-taiga-19734.herokuapp.com/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: "a",
        password: "b"
    })
    })
    .then(null)
    .catch(err1 => null)

fetch('https://miloszcwen.github.io/fans/')
    .then(null)
    .catch(err2 => null)
}

export default preload;
