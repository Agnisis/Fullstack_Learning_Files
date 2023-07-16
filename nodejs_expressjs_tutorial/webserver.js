/*

Browser(request) <-> Web Server(response) <-> Database Server

http protocol is send in this protocol
----
packet->
-------
request->
request line-> GET POST PUT DELETE PATCH
headers ->Browsername,content,lang,cookie
Body->content of frontend



response->
status line-> 200/404
headers -> server name type length expire
body -> result generated 


Response Status ->
2xx 200:OK 201: Created 202:Accepted (success)
3xx 301:Moved permanently 302:Found (redirections)
4xx 400 bad request 401: unauthorised(client error)
    403:Forbidden  404 :Not found 403:Method not alowed
5xx 500:internal server error  502:Bad gateway (server)







*/


const http=require('http');
const server=http.createServer((req,res)=>{

    console.log('server started')
    })

server.listen(8080);