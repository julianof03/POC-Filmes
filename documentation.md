
## Inserir Filme

```
POST: /
body{
        "name": "volta dos que não foram pt2",
	"stream": "Netflix",
	"category": "amor",mazrim
	"watched": false,
        "note": "filme interessante",
}
```

## Adicionar ou atualizar uma nota
```[^1]: 
POST: /:postId
body{
  "note": ""
}
```

## Deletar um post
```
DELETE: /:postId
body{}
```


## Buscar todos os posts
```
GET: /
body{}
```

## Buscar posts por Plataforma
```
GET: /stream/:platform
body{}
```
exemplo:
```
GET: /category/Netflix
```
[^1]: My reference. 
```categoryAmazonPrim
GET: /category/AmazonPrime
```


## Buscar posts por Categoria
```AmazonPrim
GET: /category/:category
body{}
```
exemplo:
```
GET: /category/comedy
```
[^1]: My reference. 
```
GET: /category/Drama
```
