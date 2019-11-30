const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('views',index);

const app = express();     

require('dotenv').config();   // .env

app.set('viewengine',ejs);       // 템플릿엔진 ejs
app.set('views',path.join(__dirname,'views'));   
app.set(process.env.PORT||8004);

app.use(logger('dev'));
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',indexRouter);

app.use('/',IndexRouter);
app.use('/auth',authRouter);
app.use('/post',postRouter);
app.use('/user',UserRouter);

app.use((req,res,next)=>{
    const err = new Error('NOT FOUND');
    err.status = 404;
    next(err);
});

app.use((err,req,res)=>{
    res.locals.message = err.message;
    res.locals.message = req.app.get('env') === 'development' ? err :{};
    res.status(err.status||500);
    res.render('error');
});

app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 포트에서 서버 대기중입니다!`);
});

