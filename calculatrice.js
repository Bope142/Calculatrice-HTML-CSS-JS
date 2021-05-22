let btn_numbers =document.querySelectorAll('.les-boutons'),
    afficheur =document.getElementById('afficheur'),
    btn_fonction={
        deletes : document.getElementById('delete'),
        resets : document.getElementById('reset'),
        answer : document.getElementById('reponse')
    },
    les_operateurs= document.querySelectorAll('.les-boutons-operateur'),
    les_signes ={
        plus:'+',
        moins:'-',
        multiplication:'*',
        division:'/'
    },
    comma = document.querySelector('.les-boutons-virgule');
function AddNumbers(numbers) {
    if (afficheur.value === '0'){
        afficheur.value=numbers;
    }else{
        if(afficheur.value === 'div par 0 impossible' || afficheur.value === 'error'){
            afficheur.value='';
        }
        afficheur.value +=numbers;
    }
}
function reset(){
    afficheur.value='';
}
function  Add_operator(Operator_sign){
    let length_afficheur,
    Old_value=afficheur.value;
    length_afficheur=afficheur.value.length;
         if(length_afficheur ===0){
            if(Operator_sign === les_signes.moins){
                afficheur.value=les_signes.moins;
            }
        } else if(length_afficheur ===1){
                 if(Operator_sign === les_signes.moins && length_afficheur <1){
                afficheur.value +=les_signes.moins;
             }else{
                    if(afficheur.value.charAt(0) === les_signes.moins){
                reset()
                    }else{
                    afficheur.value +=Operator_sign;
                }
            }
        }else{
            if(Operator_sign === les_signes.plus){
                if((afficheur.value.charAt(length_afficheur-1) === les_signes.moins) || (afficheur.value.charAt(length_afficheur-1) ===
                    les_signes.multiplication) || (afficheur.value.charAt(length_afficheur-1) ===les_signes.division)){
                    afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.plus;
                }else{
                    if((afficheur.value.charAt(length_afficheur-1) === les_signes.moins)|| (afficheur.value.charAt(length_afficheur-1) ===
                        les_signes.multiplication) || (afficheur.value.charAt(length_afficheur-1) === les_signes.division)){
                        afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.plus;
                    }else{
                        if(afficheur.value.charAt(length_afficheur-1) !== les_signes.plus){
                            afficheur.value =Old_value+les_signes.plus;
                        }
                    }
                }
            } else if (Operator_sign === les_signes.moins){
                if((afficheur.value.charAt(length_afficheur-1) === les_signes.plus) || (afficheur.value.charAt(length_afficheur-1) ===
                    les_signes.multiplication) || (afficheur.value.charAt(length_afficheur-1) ===les_signes.division)){
                    afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.moins;
                }else{
                    if((afficheur.value.charAt(length_afficheur-1) === les_signes.plus)|| (afficheur.value.charAt(length_afficheur-1) ===
                        les_signes.multiplication) || (afficheur.value.charAt(length_afficheur-1) === les_signes.division)){
                        afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.moins;
                    }else{
                        if(afficheur.value.charAt(length_afficheur-1) !== les_signes.moins){
                            afficheur.value =Old_value+les_signes.moins;
                        }
                    }
                }
            } else if (Operator_sign === les_signes.multiplication){
                if((afficheur.value.charAt(length_afficheur-1) === les_signes.plus) || (afficheur.value.charAt(length_afficheur-1) ===
                    les_signes.moins) || (afficheur.value.charAt(length_afficheur-1) ===les_signes.division)){
                    afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.multiplication;
                }else{
                    if((afficheur.value.charAt(length_afficheur-1) === les_signes.plus)|| (afficheur.value.charAt(length_afficheur-1) ===
                        les_signes.moins) || (afficheur.value.charAt(length_afficheur-1) === les_signes.division)){
                        afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.multiplication;
                    }else{
                        if(afficheur.value.charAt(length_afficheur-1) !== les_signes.multiplication){
                            afficheur.value =Old_value+les_signes.multiplication;
                        }
                    }
                }
            }else {
                if((afficheur.value.charAt(length_afficheur-1) === les_signes.plus) || (afficheur.value.charAt(length_afficheur-1) ===
                    les_signes.multiplication) || (afficheur.value.charAt(length_afficheur-1) ===les_signes.moins)){
                    afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.division;
                }else{
                    if((afficheur.value.charAt(length_afficheur-1) === les_signes.plus)|| (afficheur.value.charAt(length_afficheur-1) ===
                        les_signes.multiplication) || (afficheur.value.charAt(length_afficheur-1) === les_signes.moins)){
                        afficheur.value =Old_value.substring(0,length_afficheur-1)+les_signes.division;
                    }else{
                        if(afficheur.value.charAt(length_afficheur-1) !== les_signes.division){
                            afficheur.value =Old_value+les_signes.division;
                        }
                    }
                }
            }
         }
}
function calculator(values) {
    let reponse;
    if(values.length === 3){
        if((values.charAt(values.length-1) === les_signes.plus) || (values.charAt(values.length-1) === les_signes.moins) || (values.charAt(values.length-1) === les_signes.multiplication)
            || (values.charAt(values.length-1) === les_signes.division)){
            afficheur.value =values;
        }else{
            reponse =eval(values);
            if (!isFinite(reponse)) {
                afficheur.value = 'div par 0 impossible';
            } else if (isNaN(reponse)) {
                afficheur.value = 'error';
            } else {
                afficheur.value = reponse;
            }
        }
    }else if(values.length > 3){
        reponse =eval(values);
        if (!isFinite(reponse)) {
            afficheur.value = 'Infinite';
        } else if (isNaN(reponse)) {
            afficheur.value = 'Error';
        } else {
            afficheur.value = reponse;
        }
    }
    else{
        afficheur.value =values;
    }
}
function Add_the_comma() {
    let operateur =['+','-','*','/'],position,char;
    if(afficheur.value.length >= 1){
        for (let i = 0; i <=3 ; i++) {
            if ( afficheur.value.lastIndexOf(operateur[i]) >= 0){
                if((afficheur.value.charAt(afficheur.value.length-1) === operateur[0])){
                   break;
                }else if (afficheur.value.charAt(afficheur.value.length-1) === operateur[1]){
                    break;
                }else if (afficheur.value.charAt(afficheur.value.length-1) === operateur[2]){
                    break;
                }else if (afficheur.value.charAt(afficheur.value.length-1) === operateur[3]){
                    break;
                }
                else{
                    position=afficheur.value.lastIndexOf(operateur[i]);
                    char=afficheur.value.substring(position+1);
                    if(char.lastIndexOf('.') < 0){
                        afficheur.value +='.';
                        break;
                    }else{
                        break;
                    }
                }
            }else{
                if(afficheur.value.lastIndexOf('.') < 0){
                    afficheur.value +='.';
                    break;
                }
            }
        }
    }
}
function Deletes() {
    afficheur.value = afficheur.value.substring(0,afficheur.value.length-1);
}
window.addEventListener('load',()=>{
    btn_numbers.forEach((value, key, parent) =>
        {
            parent[key].addEventListener('click',()=>{
                AddNumbers(btn_numbers[key].value)
            })
        }
    );
    btn_fonction.resets.addEventListener('click',()=>{
        reset();
    });
    les_operateurs.forEach((value, key, parent) =>
    {
        parent[key].addEventListener('click',()=>{
            Add_operator(parent[key].value)
        })
    });
    btn_fonction.answer.addEventListener('click',()=>{
        calculator(afficheur.value);
    });
    btn_fonction.deletes.addEventListener('click',()=>{
        Deletes();
    });
    comma.addEventListener('click',()=>{
       Add_the_comma();
    });
})
//by BOPE NORBERT