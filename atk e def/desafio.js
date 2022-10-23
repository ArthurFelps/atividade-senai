const nameperson1 = prompt ("Digite o nome do 1º personagem:")
const attack1 = prompt ("Digite o dano do 1º ataque:")
const attack2 = prompt ("Digite o dano do 2º ataque:")

const atak1 = parseFloat(attack1)
const atak2 = parseFloat(attack2)

const nameperson2 = prompt ("Digite o nome do 2º personagem:")
const def = prompt ("Qual a defesa do seu personagem:  "  + nameperson2 + "?"    )
const defe = parseFloat(def)


const escudo =  prompt("O seu personagem " +nameperson2 + " vai ter escudo " + "?" + " 1-Sim/ 2-Não" ) 


const qataque = prompt("Qual ataque você deseja usar para atacar? 1 ou 2:")


let atakdef=0
let atakdef2=0
let atak=0

if(escudo==1){
        if(qataque==="1"){
            atak=  atak1 / 2
            atakdef = defe - atak
            alert("Seu ataque foi de:   " +atak +"\t A sua defesa é de:  " +atakdef )
        } 
        
        else if(qataque==="2"){
            atak=  atak2 / 2
            atakdef = defe - atak
            alert("Seu ataque foi de:   " +atak +"\t A sua defesa é de:   " +atakdef )
        }
    }
if(escudo==2){
         if(qataque==="1"){
            atakdef2 = defe - atak1
            alert("Seu ataque foi de:   " +atak1+ "\t E sua defesa é:   " +atakdef2 )
        }

        else if(qataque==="2"){
            atakdef2 = defe - atak2
            alert("Seu ataque foi de:   " +atak2+ "\t E sua defesa é:   " +atakdef2 )
        }
    }






