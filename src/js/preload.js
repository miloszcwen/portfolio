const preload = () => {
    console.log("start")
etch('https://protected-taiga-19734.herokuapp.com/signin', {
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
.catch(err=>console.log(err))
};

export default preload;
