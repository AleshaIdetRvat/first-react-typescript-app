export interface CssStyles {
    [key: string]: string | undefined
}
interface IAddress {
    street: string
    city: string
    zipcode: string
}

export interface IUser {
    id: number
    name: string
    email: string
    address: IAddress
}

export interface ITodo {
    id: number
    title: string
    completed: boolean
}

/*
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
*/

// https://jsonplaceholder.typicode.com/users
//  {IUser}
/*

{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
    },
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
},

*/
