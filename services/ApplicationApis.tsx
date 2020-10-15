export interface APIStructure {
    requestMethod :String,
    requestPath:String,
    requestBody:any,
    queryParams:any,
    requestHeader
}

export const userList : APIStructure = 
  {  
       requestMethod:'get',
       requestPath :'api/users',
       requestBody:null,
       queryParams:null,
       requestHeader:null
   }

export const userListWithQueryParam : APIStructure = 
  {  
       requestMethod:'get',
       requestPath :'api/users',
       requestBody:null,
       queryParams:null,
       requestHeader:null
   }

export const userCreatePost : APIStructure = 
   {  
       requestMethod:'post',
       requestPath :'api/users',
       requestBody:null,
       queryParams:null,
       requestHeader:null
   }

export const userUpdatePut : APIStructure = 
   {  
       requestMethod:'put',
       requestPath :'api/users/',
       requestBody:null,
       queryParams:null,
       requestHeader:null
   }

export const deleteUser : APIStructure = 
   {  
       requestMethod:'delete',
       requestPath :'api/users/',
       requestBody:null,
       queryParams:null,
       requestHeader:null
   }