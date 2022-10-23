let escolha = 0
let x = 10
let i = 0
let y = 0
do{
    escolha = prompt("Escolha uma opção:\n"+
                    "1. Multiplicação\n"+
                    "2. Divisão\n"+
                    "3. Soma\n"+
                    "4. Subtração\n"+
                    "5. Número ao quadrado\n"+
                    "6. Número ao cubo\n"+
                    "7. Raiz Quadrada\n"+
                    "8. Sair\n")

            if(escolha==="1"){
                let m = prompt("(Multiplicação)Escolha um numero:");
                multiplicacao = parseInt(m)
                if(multiplicacao>=0 && typeof multiplicacao === "number"){
                    alert("A tabuada de "+ multiplicacao + "é: \n" + 
                    multiplicacao + " * " + "1 = " + multiplicacao*1 + "\n" +
                    multiplicacao + " * " + "2 = " + multiplicacao*2 + "\n" +
                    multiplicacao + " * " + "3 = " + multiplicacao*3 + "\n" +
                    multiplicacao + " * " + "4 = " + multiplicacao*4 + "\n" +
                    multiplicacao + " * " + "5 = " + multiplicacao*5 + "\n" +
                    multiplicacao + " * " + "6 = " + multiplicacao*6 + "\n" +
                    multiplicacao + " * " + "7 = " + multiplicacao*7 + "\n" +
                    multiplicacao + " * " + "8 = " + multiplicacao*8 + "\n" +
                    multiplicacao + " * " + "9 = " + multiplicacao*9 + "\n" +
                    multiplicacao + " * " + "10 = " + multiplicacao*10 + "\n"
                    )
                }else{
                    alert("x");
                }
            }

            if(escolha==="2"){
                let d = prompt("(Divisão)Escolha um numero:");
                divisao = parseInt(d)
                if(divisao>=0 && typeof divisao === "number"){
                    /*while(i<10){
                        i++
                        y =  divisao / i;
                        alert("A tabuada de "+ divisao + " é: " + divisao + " / " + i + " = " + y)
                    }*/
                    alert("A tabuada de "+ divisao + "é: \n" + 
                    divisao + " / " + "1 = " + divisao/1 + "\n" +
                    divisao + " / " + "2 = " + divisao/2 + "\n" +
                    divisao + " / " + "3 = " + divisao/3 + "\n" +
                    divisao + " / " + "4 = " + divisao/4 + "\n" +
                    divisao + " / " + "5 = " + divisao/5 + "\n" +
                    divisao + " / " + "6 = " + divisao/6 + "\n" +
                    divisao + " / " + "7 = " + divisao/7 + "\n" +
                    divisao + " / " + "8 = " + divisao/8 + "\n" +
                    divisao + " / " + "9 = " + divisao/9 + "\n" +
                    divisao + " / " + "10 = " + divisao/10 + "\n"
                    )
                }else{
                    alert("x");
                }
            }  

            if(escolha==="3"){
                let soma = prompt("(Soma)Escolha um numero:");
                s = parseInt(soma)
                if(s>=0 && typeof s === "number"){
                    /*while(i<10){
                        i++
                        y =  s + i;
                        alert("A tabuada de "+ s + " é: " + s + " + " + i + " = " + y)
                    }*/
                    alert("A tabuada de "+ s + "é: \n" + 
                    s + " + " + "1 = " + (s+1) + "\n" +
                    s + " + " + "2 = " + (s + 2) + "\n" +
                    s + " + " + "3 = " + (s+3) + "\n" +
                    s + " + " + "4 = " + (s+4) + "\n" +
                    s + " + " + "5 = " + (s+5) + "\n" +
                    s + " + " + "6 = " + (s+6) + "\n" +
                    s + " + " + "7 = " + (s+7) + "\n" +
                    s + " + " + "8 = " + (s+8) + "\n" +
                    s + " + " + "9 = " + (s+9) + "\n" +
                    s + " + " + "10 = " + (s+10) + "\n"
                    )
                }else{
                    alert("x");
                }
                }
                if(escolha==="4"){
                    let subtracao = prompt("(Subtração)Escolha um numero:");
                    sub = parseInt(subtracao)
                    if(sub>=0 && typeof sub === "number"){
                        /*while(i<10){
                            i++
                            y =  sub - i;
                            alert("A tabuada de "+ sub + " é: " + sub + " + " + i + " = " + y)
                        }*/
                        alert("A tabuada de "+ sub + "é: \n" + 
                        sub + " - " + "1 = " + sub-1 + "\n" +
                        sub + " - " + "2 = " + sub-2 + "\n" +
                        sub + " - " + "3 = " + sub-3 + "\n" +
                        sub + " - " + "4 = " + sub-4 + "\n" +
                        sub + " - " + "5 = " + sub-5 + "\n" +
                        sub + " - " + "6 = " + sub-6 + "\n" +
                        sub + " - " + "7 = " + sub-7 + "\n" +
                        sub + " - " + "8 = " + sub-8 + "\n" +
                        sub + " - " + "9 = " + sub-9 + "\n" +
                        sub + " - " + "10 = " + sub-10 + "\n")
                    }else{
                        alert("x");  
                    }
                }
                if(escolha==="5"){
                    let quadrado = prompt("(Número Quadrado)Escolha um numero:");
                    q = parseInt(quadrado)
                    if(q>=0 && typeof q === "number"){
                        quad= q*q;
                        alert("O número " + q + " ao quadrado é: " + quad)
                    }else{
                        alert("x");  
                    }
                }
                if(escolha==="6"){
                    let cubo = prompt("(Número ao Cubo)Escolha um numero:");
                    c = parseInt(cubo)
                    if(c>=0 && typeof c === "number"){
                        cub= c*c*c;
                        alert("O número " + c + " ao Cubo é: " + cub)
                    }else{
                        alert("x");  
                    }
                }
                if(escolha==="7"){
                    let raiz = prompt("(Raiz Quadrada)Escolha um numero:");
                    r = parseInt(raiz)
                    if(r>=0 && typeof r === "number"){
                        alert("A raiz do número " + r + " é: " + Math.sqrt(r))
                    }else{
                        alert("x");  
                    }
                }
                 
}while(escolha !=="8")
    alert ("Fim do programa")
