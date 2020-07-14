import axios from 'axios';

describe('list user',()=> {

    test("GET",async()=>{
        
        expect.assertions(1)

        const res = await axios.get("https://reqres.in/api/users")

        expect(res.status).toEqual(200);
    
    })
})
describe('create user',()=> {

    test("CREATE",async()=>{

        expect.assertions(1)

        const res = await axios.post("https://reqres.in/api/users",{
            "name": "morpheus",
            "job": "leader"
        })

        expect(res.status).toEqual(201);
    
    })
})
describe('update user',()=> {

    test("UPDATE",async()=>{
                        
        expect.assertions(1)

        const res = await axios.put("https://reqres.in/api/users/2",{
            "name": "morpheus",
            "job": "zion resident"
        })

        expect(res.status).toEqual(200);
    
    })
})
describe('update user',()=> {

    test("UPDATE",async()=>{
                        
        expect.assertions(1)

        const res = await axios.patch("https://reqres.in/api/users",{
            "name": "morpheus",
            "job": "zion resident"
        })

        expect(res.status).toEqual(200);
    
    })
})
describe('detele user',()=> {

    test("DELETE",async()=>{
                        
        expect.assertions(1)

        const res = await axios.delete("https://reqres.in/api/users")

        expect(res.status).toEqual(204);
    
    })
})
