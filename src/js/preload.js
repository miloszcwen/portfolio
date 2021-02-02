const preload = () => {
fetch('https://protected-taiga-19734.herokuapp.com/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: "a",
        password: "a"
    })
}).then(response=>response.json())
.then(user=>{
    console.log(user)
    }
)
.catch(err)

fetch('https://miloszcwen.github.io/fans/')
        .then((response) => response.json())
        .then((users) =>     console.log(users))
        .catch(err=>console.log(err))
};

export default preload;
