function darkMode(){
    const app = document.querySelector('body')

    app.classList.toggle('dark')

}

const iconshow=document.querySelector('.show')
const iconblock=document.querySelector('.block')
const input=document.querySelector('#senha')

function showPass(){
    if(input.type ==='password'){
        input.type='text'
        console.log(iconshow);
        iconshow.style.display='none'
        iconblock.style.display='block'
    } else{
        input.type='password'
        iconshow.style.display='block'
        iconblock.style.display='none'
    }

}

