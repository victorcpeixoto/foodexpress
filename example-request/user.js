GET + Header(authorization: token)
http://localhost:8080/users/:id

{
"_id": "589104e049e85f1ea738a670",
"name": "Victor Cesar Peixoto Barbosa",
"email": "victorcmggg@gmail.com",
"password": "55dc87",
"phone": "99999999999",
"updated_at": "2017-02-13T00:12:08.738Z",
"__v": 0,
"created_at": "2017-01-31T21:42:56.718Z"
}

*********************************************************************************
*********************************************************************************
*********************************************************************************

POST
http://localhost:8080/users
{
  "name": "Joao Carlos",
  "phone": "34988889973",
  "email": "vict@gmail.com"
}

Retorno
{
"status": true,
"message": "Seja bem vindo Joao Carlos! A senha será enviada para o seu email."
}

*********************************************************************************
*********************************************************************************
*********************************************************************************

PUT + Header(authorization: token)
http://localhost:8080/users
{
  "name": "Joao Carlos",
  "phone": "34988889973",
  "email": "vict@gmail.com"
}
Retorno
{
	"status": true,
	"message": "Usuário editado com sucesso."
}


*********************************************************************************
*********************************************************************************
*********************************************************************************

DELETE
Não possui
