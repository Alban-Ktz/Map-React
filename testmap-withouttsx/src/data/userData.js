import bcrypt from 'bcryptjs';

export const userData =[
    {
        id : "1",
        name :"COURS",
        surname:"Nathan",
        username :"2BaR",
        password : bcrypt.hashSync("Har9@", bcrypt.genSaltSync())
    },
    {
        id : "2",
        name :"CARL",
        surname:"Noé",
        username :"Neopreda",
        password : bcrypt.hashSync("Har9@ezf", bcrypt.genSaltSync())
    }
]