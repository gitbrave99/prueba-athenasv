export class FetchUtils{
    private static fetchBase<T>(url:string, options={}):Promise<T>{
        return new Promise((resolve,reject)=>{
            fetch(url, options)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

    static getData<T>(url:string):Promise<T>{
        return this.fetchBase(url, {
            method:'GET',
            headers:{
                'x-api-key':'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9'
            }  
        })
    }

    static postData<T>(url:string, body:any):Promise<T>{
        return this.fetchBase(url, {
            method:'POST',
            headers:{
                'x-api-key':'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9'
            },
            body:JSON.stringify(body)
        })
    }






}