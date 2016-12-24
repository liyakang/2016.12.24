var express=require('express'),path=require('path');
var app=express();
var users=[];

app.set('view engine','ejs');

app.set('views',path.resolve('./views'));
app.get('/signup',function(req,res){
    var user=req.query;
    if(user.username && user.password){
        var flag=users.find(function(item){
            return item.username==user.username;
        });
        if(!flag){
            users.push(user);
            res.redirect('/signin');
        }
    }else{
        res.render('signup');
    }
});
app.get('/signin',function(req,res){
    var user=req.query;
    if(user.username){
        var flag=users.find(function(item){
            return item.username==user.username &&　item.password==user.password;
        });
        if(flag){
            res.redirect('/welcome');
        }else{
            res.redirect('back');
        }

    }else{
        res.render('signin');
    }
});
app.get('/welcome',function(req,res){
    res.render('welcome');
});
app.listen(8080);