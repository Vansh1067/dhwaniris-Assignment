# Dhwaniris-Assignment

Add MongoDBURL to config/local.js file for local Development

Add MongoDBURL to config/production.js file for Production Development 


npm start

https://localhost:3000/


# Post User Login

http://localhost:3000/auth/login

body={
    "username":"User1",
    "password":"12345"
}

# Post User Logout

http://localhost:3000/auth/logout

headers Bearer Token

# Post State (Add State)

http://localhost:3000/state/

body={
    "name":"Uttrakhand"
}
headers Bearer Token

# Get State 

http://localhost:3000/state/

headers Bearer Token

# Post District (Add District)

http://localhost:3000/district/

body={
    "name":"Pauri",
    "stateId":"60e48eb4c90f0f5ca004ccfd"
}
headers Bearer Token

# Get District (All district of Particular State)

http://localhost:3000/district/stateId

headers Bearer Token

# Get All District

http://localhost:3000/district/

headers Bearer Token

# Post Child (Add Child)

http://localhost:3000/child/

body={
    "name":"Child2",
    "sex":"female",
    "dob":"2021-07-06T17:43:29.408Z",
    "fathername":"Child Father",
    "mothername":"Child Mother",
    "stateId":"60e48eb4c90f0f5ca004ccfd",
    "districtId":"60e491f6eb906c2c68dc16da",
    "photoUrl":"https://xd.adobe.com/view/da5320fb-dbb3-4e2f-7647-cc8e7e860c7e-ac62/"
}
headers Bearer Token

# Get Child (Get All Child)

http://localhost:3000/child/

headers Bearer Token

# Get Child Details

http://localhost:3000/child/childId

headers Bearer Token


















