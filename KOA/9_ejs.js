const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

app.use(views(path.join(__dirname,'/views'),{
    extension:'ejs'
}))

app.use(async ctx=>{
    let title = "hello world";
    await ctx.render('index');
})
app.listen(3000,()=>{
    console.log('hahaha')
})