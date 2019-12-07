document.querySelector('#join').addEventListener('click',()=>{
    const loginform = document.createElement('form'); // 로그인폼
    loginform.setAttribute('charset','utf-8');
    loginform.setAttribute('method','Post');
    loginform.setAttribute('action','./auth');
    const email = document.createElement('input'); //로그인폼안에 이메일
    email.setAttribute('type','email');
    email.setAttribute('name','email');
    email.placeholder="사용하실 이메일을 입력해주세요.";
    const nick = document.createElement('input'); // 닉네임 칸
    nick.setAttribute('type','text');
    nick.setAttribute('name','nick');
    nick.placeholder="사용하실 닉네임을 입력해주세요.";
    const password = document.createElement('input'); // 패스워드칸
    password.setAttribute('type','password');
    password.setAttribute('name','password');
    password.placeholder = "사용하실 패스워드를 입력해주세요.";
    const submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.textContent="가입완료";
    document.getElementById('div').appendChild(loginform);
    loginform.appendChild(email);
    loginform.appendChild(nick);
    loginform.appendChild(password);
    loginform.appendChild(submit);
    
});
document.querySelector('#login').addEventListener('click',()=>{


    const loginform = document.createElement('form'); // 로그인폼
    loginform.setAttribute('charset','utf-8');
    loginform.setAttribute('method','Post');
    loginform.setAttribute('action','./auth');
    const email = document.createElement('input'); //로그인폼안에 이메일
    email.setAttribute('type','email');
    const password = document.createElement('input'); // 패스워드칸
    password.setAttribute('type','password');
    document.getElementById('div').appendChild(loginform);
    loginform.appendChild(email);
    loginform.appendChild(br);
    loginform.appendChild(nick);
    loginform.appendChild(br);
    loginform.appendChild(password);

});