// let express = require('express')
//
// let app = express()
// //用于解析post请求请求体参数---参数的编码类型必须为：
// app.use(express.urlencoded({extended:true}))
//
// //暴露静态资源
// app.use(express.static(__dirname+'/public'))
//
// app.get('/ajax_get',function (req,res) {
//   console.log('有人发了get请求给我')
//   console.log(req.query)
//   res.send('你发来的是get请求，我收到了??????')
// })
//
// app.post('/ajax_post',function (req,res) {
//   console.log('有人发了post请求给我')
//   console.log(req.body)
//   res.send('你发来的是post请求，我收到了')
// })
//
// app.listen(3000,function (err) {
//   if(err) console.log(err)
//   else {
//     console.log('【练习原生js发送ajax服务器启动成功！】')
//     console.log('【兄弟，别用编译器打开网页，会产生跨域问题！！！】')
//     console.log('【点击这里去练习吧：http://localhost:3000/test_ajax_get.html】')
//     console.log('【点击这里去练习吧：http://localhost:3000/test_ajax_post.html】')
//   }
// })


let express = require('express')

let app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'))

app.get('/ajax_get', (req, res) => {
    console.log('有人发了get请求给我')
    console.log(req.query)
    res.send('我收到了你的get请求')
})

app.post('/ajax_post', (req, res) => {
    console.log('有人发了post请求给我')
    console.log(req.body)
    res.send('你来的post请求,我收到了')
})


app.listen(8000, (err) => {
    if (!err) {
        console.log('【练习原生js发送ajax服务器启动成功！】')
        console.log('【兄弟，别用编译器打开网页，会产生跨域问题！！！】')
        console.log('【点击这里去练习吧：http://localhost:8000/test_ajax_get.html】')
        console.log('【点击这里去练习吧：http://localhost:8000/test_ajax_post.html】')
    } else {
        console.log(err);
    }
})