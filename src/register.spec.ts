//const request = require('axios')

import axios from 'axios';

describe('register user',()=> {

    test("REGISTER",async()=>{
        
        expect.assertions(1)
    
        const res = await axios.post("https://reqres.in/api/register",{

            "email": "eve.holt@reqres.in",
            "password": "pistol"
        
        })
        console.log(res.status)

        expect(res.status).toEqual(200);
    
    })

    test('register Unsuccessful',async()=> {

        expect.assertions(1)
        
        try {
                const res = await axios.post("https://reqres.in/api/register",{

                 "email": "eve.holt@reqres.in",
                 "password": "pistol"
            })
        }

        catch(e){

        expect(e).toEqual(400);
        
        }
    
    })
})
