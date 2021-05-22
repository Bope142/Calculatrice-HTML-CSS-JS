let bulles =document.querySelector('.bulles'),
    radio =document.querySelector('.radio'),
    theme_of_the_application ={
    theme1:value={
            body_background :'hsl(222, 26%, 31%)',
            text_header_color:'hsl(0, 0%, 100%)',
            afficheur_background:'hsl(224, 36%, 15%)',
            afficheur_color:'hsl(0, 0%, 100%)',
            les_corps_background:'hsl(223, 31%, 20%)',
            btn_shadow_color:'0px 3px 0px 0px hsl(28, 16%, 65%)',
            btn_color:'hsl(221, 14%, 31%)',
            btn_background:'hsl(30, 25%, 89%)',
            btn_delete_shadow_color:'0px 3px 0px 0px hsl(224, 28%, 35%)',
            btn_delete_color:'hsl(0, 0%, 100%)',
            btn_delete_background:'hsl(225, 21%, 49%)',
            btn_reset_shadow_color:'0px 3px 0px 0px hsl(224, 28%, 35%)',
            btn_reset_color:'hsl(0, 0%, 100%)',
            btn_reset_background:'hsl(225, 21%, 49%)',
            btn_reponse_shadow_color:'0px 3px 0px 0px hsl(6, 70%, 34%)',
            btn_reponse_color:'hsl(0, 0%, 100%)',
            btn_reponse_background:'hsl(6, 63%, 50%)',
            bulle_radio:'hsl(223, 31%, 20%)',
            checkbox:'hsl(6, 63%, 50%)'
    },
    theme2:value={
        body_background :'hsl(0, 0%, 90%)',
        text_header_color:'hsl(60, 10%, 19%)',
        afficheur_background:'hsl(0, 0%, 93%)',
        afficheur_color:'hsl(60, 10%, 19%)',
        les_corps_background:'hsl(0, 5%, 81%)',
        btn_shadow_color:'0px 3px 0px 0px hsl(35, 11%, 61%)',
        btn_color:'hsl(60, 10%, 19%)',
        btn_background:'hsl(45, 7%, 89%)',
        btn_delete_shadow_color:'0px 3px 0px 0px hsl(185, 58%, 25%)',
        btn_delete_color:'hsl(0, 0%, 100%)',
        btn_delete_background:'hsl(185, 42%, 37%)',
        btn_reset_shadow_color:'0px 3px 0px 0px hsl(185, 58%, 25%)',
        btn_reset_color:'hsl(0, 0%, 100%)',
        btn_reset_background:'hsl(185, 42%, 37%)',
        btn_reponse_shadow_color:'0px 3px 0px 0px hsl(25, 99%, 27%)',
        btn_reponse_color:'hsl(0, 0%, 100%)',
        btn_reponse_background:'hsl(25, 98%, 40%)',
        bulle_radio:'hsl(0, 5%, 81%)',
        checkbox:'hsl(6, 63%, 50%)'
    },
    theme3:value={
        body_background :'hsl(268, 75%, 9%)',
        text_header_color:'hsl(52, 100%, 62%)',
        afficheur_background:'hsl(268, 71%, 12%)',
        afficheur_color:'hsl(52, 100%, 62%)',
        les_corps_background:'hsl(268, 71%, 12%)',
        btn_shadow_color:'0px 3px 0px 0px hsl(285, 91%, 52%)',
        btn_color:'hsl(52, 100%, 62%)',
        btn_background:'hsl(268, 47%, 21%)',
        btn_delete_shadow_color:'0px 3px 0px 0px hsl(285, 91%, 52%)',
        btn_delete_color:'hsl(0, 0%, 100%)',
        btn_delete_background:'hsl(281, 89%, 26%)',
        btn_reset_shadow_color:'0px 3px 0px 0px hsl(285, 91%, 52%)',
        btn_reset_color:'hsl(0, 0%, 100%)',
        btn_reset_background:'hsl(281, 89%, 26%)',
        btn_reponse_shadow_color:'0px 3px 0px 0px hsl(177, 92%, 70%)',
        btn_reponse_color:'hsl(198, 20%, 13%)',
        btn_reponse_background:'hsl(176, 100%, 44%)',
        bulle_radio:'hsl(268, 71%, 12%)',
        checkbox:'hsl(176, 100%, 44%)'
    }
},
    btn_themes ={
        btn1:document.getElementById('checktheme1'),
        btn2:document.getElementById('checktheme2'),
        btn3:document.getElementById('checktheme3')
    },
    elments ={
        main:document.body,
        text_head:document.querySelector('.en-tete'),
        afficheur_screen:document.querySelector('.display'),
        afficheur:document.getElementById('afficheur'),
        les_corps:document.querySelector('.les-corps'),
        btn_numbers:document.querySelectorAll('.les-boutons'),
        btn_operator:document.querySelectorAll('.les-boutons-operateur'),
        btn_comma:document.getElementById('virgule'),
        btn_delete:document.getElementById('delete'),
        btn_answer:document.getElementById('reponse'),
        btn_reset:document.getElementById('reset')
    };
function changedTheme(themeSelect) {
    if(themeSelect === 1){
        elments.main.style.backgroundColor=theme_of_the_application.theme1.body_background;
        elments.text_head.style.color=theme_of_the_application.theme1.text_header_color;
        elments.afficheur_screen.style.backgroundColor=theme_of_the_application.theme1.afficheur_background;
        elments.afficheur.style.color=theme_of_the_application.theme1.afficheur_color;
        elments.les_corps.style.backgroundColor=theme_of_the_application.theme1.les_corps_background;
        //btn
        elments.btn_numbers.forEach((value, key, parent) => {
            parent[key].style.boxShadow=theme_of_the_application.theme1.btn_shadow_color
            parent[key].style.color=theme_of_the_application.theme1.btn_color;
            parent[key].style.backgroundColor=theme_of_the_application.theme1.btn_background;
        });
        elments.btn_operator.forEach((value, key, parent) => {
            parent[key].style.boxShadow=theme_of_the_application.theme1.btn_shadow_color;
            parent[key].style.color=theme_of_the_application.theme1.btn_color;
            parent[key].style.backgroundColor=theme_of_the_application.theme1.btn_background;
        });
        elments.btn_comma.style.boxShadow=theme_of_the_application.theme1.btn_shadow_color;
        elments.btn_comma.style.color=theme_of_the_application.theme1.btn_color;
        elments.btn_comma.style.backgroundColor=theme_of_the_application.theme1.btn_background;
        elments.btn_delete.style.boxShadow=theme_of_the_application.theme1.btn_shadow_color;
        elments.btn_delete.style.color=theme_of_the_application.theme1.btn_color;
        elments.btn_delete.style.backgroundColor=theme_of_the_application.theme1.btn_background;
        elments.btn_answer.style.boxShadow=theme_of_the_application.theme1.btn_reponse_shadow_color;
        elments.btn_answer.style.color=theme_of_the_application.theme1.btn_reponse_color;
        elments.btn_answer.style.backgroundColor=theme_of_the_application.theme1.btn_reponse_background;
        elments.btn_reset.style.boxShadow=theme_of_the_application.theme1.btn_reset_shadow_color;
        elments.btn_reset.style.color=theme_of_the_application.theme1.btn_reset_color;
        elments.btn_reset.style.backgroundColor=theme_of_the_application.theme1.btn_reset_background;
        bulles.style.backgroundColor=theme_of_the_application.theme1.checkbox;
        radio.style.backgroundColor=theme_of_the_application.theme1.bulle_radio;
        bulles.style.transform="translateX(5px)";

    }else if(themeSelect === 2){
        elments.main.style.backgroundColor=theme_of_the_application.theme2.body_background;
        elments.text_head.style.color=theme_of_the_application.theme2.text_header_color;
        elments.afficheur_screen.style.backgroundColor=theme_of_the_application.theme2.afficheur_background;
        elments.afficheur.style.color=theme_of_the_application.theme2.afficheur_color;
        elments.les_corps.style.backgroundColor=theme_of_the_application.theme2.les_corps_background;
        //btn
        elments.btn_numbers.forEach((value, key, parent) => {
            parent[key].style.boxShadow=theme_of_the_application.theme2.btn_shadow_color;
            parent[key].style.color=theme_of_the_application.theme2.btn_color;
            parent[key].style.backgroundColor=theme_of_the_application.theme2.btn_background;
        });
        elments.btn_operator.forEach((value, key, parent) => {
            parent[key].style.boxShadow=theme_of_the_application.theme2.btn_shadow_color;
            parent[key].style.color=theme_of_the_application.theme2.btn_color;
            parent[key].style.backgroundColor=theme_of_the_application.theme2.btn_background;
        });
        elments.btn_comma.style.boxShadow=theme_of_the_application.theme2.btn_shadow_color;
        elments.btn_comma.style.color=theme_of_the_application.theme2.btn_color;
        elments.btn_comma.style.backgroundColor=theme_of_the_application.theme2.btn_background;
        elments.btn_delete.style.boxShadow=theme_of_the_application.theme2.btn_delete_shadow_color;
        elments.btn_delete.style.color=theme_of_the_application.theme2.btn_delete_color;
        elments.btn_delete.style.backgroundColor=theme_of_the_application.theme2.btn_delete_background;
        elments.btn_answer.style.boxShadow=theme_of_the_application.theme2.btn_reponse_shadow_color;
        elments.btn_answer.style.color=theme_of_the_application.theme2.btn_reponse_color;
        elments.btn_answer.style.backgroundColor=theme_of_the_application.theme2.btn_reponse_background;
        elments.btn_reset.style.boxShadow=theme_of_the_application.theme2.btn_reset_shadow_color;
        elments.btn_reset.style.color=theme_of_the_application.theme2.btn_reset_color;
        elments.btn_reset.style.backgroundColor=theme_of_the_application.theme2.btn_reset_background;
        bulles.style.backgroundColor=theme_of_the_application.theme2.checkbox;
        radio.style.backgroundColor=theme_of_the_application.theme2.bulle_radio;
        bulles.style.transform="translateX(25px)";

    }else{
        elments.main.style.backgroundColor=theme_of_the_application.theme3.body_background;
        elments.text_head.style.color=theme_of_the_application.theme3.text_header_color;
        elments.afficheur_screen.style.backgroundColor=theme_of_the_application.theme3.afficheur_background;
        elments.afficheur.style.color=theme_of_the_application.theme3.afficheur_color;
        elments.les_corps.style.backgroundColor=theme_of_the_application.theme3.les_corps_background;
        //btn
        elments.btn_numbers.forEach((value, key, parent) => {
            parent[key].style.boxShadow=theme_of_the_application.theme3.btn_shadow_color;
            parent[key].style.color=theme_of_the_application.theme3.btn_color;
            parent[key].style.backgroundColor=theme_of_the_application.theme3.btn_background;
        });
        elments.btn_operator.forEach((value, key, parent) => {
            parent[key].style.boxShadow=theme_of_the_application.theme3.btn_shadow_color;
            parent[key].style.color=theme_of_the_application.theme3.btn_color;
            parent[key].style.backgroundColor=theme_of_the_application.theme3.btn_background;
        });
        elments.btn_comma.style.boxShadow=theme_of_the_application.theme3.btn_shadow_color;
        elments.btn_comma.style.color=theme_of_the_application.theme3.btn_color;
        elments.btn_comma.style.backgroundColor=theme_of_the_application.theme3.btn_background;
        elments.btn_delete.style.boxShadow=theme_of_the_application.theme3.btn_shadow_color;
        elments.btn_delete.style.color=theme_of_the_application.theme3.btn_delete_color;
        elments.btn_delete.style.backgroundColor=theme_of_the_application.theme3.btn_delete_background;
        elments.btn_answer.style.boxShadow=theme_of_the_application.theme3.btn_reponse_shadow_color;
        elments.btn_answer.style.color=theme_of_the_application.theme3.btn_reponse_color;
        elments.btn_answer.style.backgroundColor=theme_of_the_application.theme3.btn_reponse_background;
        elments.btn_reset.style.boxShadow=theme_of_the_application.theme3.btn_reset_shadow_color;
        elments.btn_reset.style.color=theme_of_the_application.theme3.btn_reset_color;
        elments.btn_reset.style.backgroundColor=theme_of_the_application.theme3.btn_reset_background;
        bulles.style.backgroundColor=theme_of_the_application.theme3.checkbox;
        radio.style.backgroundColor=theme_of_the_application.theme3.bulle_radio;
        bulles.style.transform="translateX(46px)";
    }
}
function GetTheme(){
    let theme =localStorage.getItem('theme');
    if(theme == null){
        //default theme 1
        SetTheme('1');
        changedTheme(1);
    } else{
        changedTheme(parseInt(theme));
    }
}
function SetTheme(theme) {
    let theme_ap = localStorage.setItem('theme',theme);
}
GetTheme();
btn_themes.btn1.addEventListener('click',()=>{
    bulles.style.transform="translateX(5px)";
    changedTheme(1);
    SetTheme('1');
})
btn_themes.btn2.addEventListener('click',()=>{
    bulles.style.transform="translateX(25px)";
    changedTheme(2);
    SetTheme('2');
})
btn_themes.btn3.addEventListener('click',()=>{
    bulles.style.transform="translateX(46px)";
    changedTheme(3);
    SetTheme('3');
})
/*matrix(1, 0, 0, 1, 5, 0)
matrix(1, 0, 0, 1, 25, 0)
matrix(1, 0, 0, 1, 46, 0)*/
bulles.addEventListener('click',()=>{
    let transeltvalue=getComputedStyle(bulles,null).transform;
    if( transeltvalue === 'matrix(1, 0, 0, 1, 5, 0)'){
        bulles.style.transform="translateX(25px)";
        changedTheme(2);
        SetTheme('2');
    }else if( transeltvalue === 'matrix(1, 0, 0, 1, 25, 0)'){
        bulles.style.transform="translateX(46px)";
        changedTheme(3);
        SetTheme('3');
    }else{
        bulles.style.transform="translateX(25px)";
        changedTheme(2);
        SetTheme('2');
    }
})
window.addEventListener('load',()=>{
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        console.log('🎉 Dark mode is supported');
    }
})