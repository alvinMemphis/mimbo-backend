# hair style api  


## Running Locally

Make sure you have [Node.js](http://nodejs.org/)  installed.

```sh
git clone https://github.com/alvinMemphis/mimbo-backend # or clone your own fork
cd mimbo-backend
yarn install
yarn start
```

or using  NPM
```sh
npm install
npm start
```

##usage

### End-point: /users/1/tags
Endpoint that returns tags of a particular user
### Method: GET
>```
>127.0.0.1:3000/users/1/tags
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: /hairstyles
get request for all hairstyle tags
### Method: GET
>```
>127.0.0.1:3000/hairstyles
>```
### Response: 200
```json
[
    {
        "name": "brown"
    },
    {
        "name": "curly"
    },
    {
        "name": "long braids"
    },
    {
        "name": "short braids"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: /makeup
returns all tags of type make up
### Method: GET
>```
>127.0.0.1:3000/makeup
>```
### Response: 200
```json
[
    {
        "name": "Shinny"
    },
    {
        "name": "bridal"
    },
    {
        "name": "brown skin"
    },
    {
        "name": "fabulous"
    },
    {
        "name": "natural"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: /api/tag?type=hairstyle&tag=broc
endpoint for searching for tags. Creates a new tag incase tag was not found in table
### Method: GET
>```
>127.0.0.1:3000/api/tag?type=hairstyle&tag=broc
>```
### Query Params

|Param|value|
|---|---|
|type|hairstyle|
|tag|broc|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
Your app should now be running on [localhost:3000](http://localhost:3000/).
