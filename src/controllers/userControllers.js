const users = [];

//create new book
exports.createUser = (req, res) => {
    const {id, name, email,  age } = req.body;
    const user = { id, name, email,age };
    users.push(user);
    res.status(201).json(user);

}
//Get all user by optional search query
exports.getAllusers = (req, res) => {
    const { search } = req.query
    if (search) {
        console.log(search);
        
        const filtereduser = users.filter(user => 
            user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
        )
        return res.json(filtereduser)
    }
    res.json(users)
}
//search a user by id
exports.getUserById = (req, res) => {
 
    const user = users.find((b) => 
       b.id === parseInt(req.params.id)
    );
    console.log("Users Array:", user);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
}
//update Book
exports.updateUserById = (req, res) => {
    const user = users.find((b) => 
        b.id === parseInt(req.params.id)
    )
    
    if (!user) return res.status(404).send("User Not found")
    const { id, name, email, age } = req.body;
    if (id) {
        user.id = id;

    }
    if (name) {
        user.name = name;

    }
    if (email) {
        user.email = email;

    }
    if (age) {
        user.age = age;

    }
    res.json(user)
}
//partially update a book by id
exports.partiallyUpdateUserById = (req, res) => {
    const user = users.find((b) => 
        b.id === parseInt(req.params.id)
    )
    
    if (!user) return res.status(404).send("User Not Found")
    const { id,name,email, age } = req.body;
    if (id !== undefined) {
        user.id = id;

    }
    if (name !== undefined) {
        user.name = name;

    }
    if (email !== undefined) {
        user.email = email;

    }
    if (age !== undefined) {
        user.age = age;

    }
    res.json(user)
}
//Delete Book By id

exports.deleteUserById = (req, res) => {
    const index = users.findIndex((b) => 
        b.id === parseInt(req.params.id)
    )
    
    if (index === -1) return res.status(404).send("User Not Found");
    users.splice(index, 1);
    res.status(204).send();

}