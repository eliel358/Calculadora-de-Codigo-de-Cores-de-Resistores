linhas = 0

if(linhas == 0){
    document.getElementById('calcular-cores').className='hide'
    document.getElementById('buttons-types').className='buttons-types'
}
document.getElementById('fourl').addEventListener('click',function(){
    document.getElementById('calcular-cores').className='calcular-cores'
    document.getElementById('buttons-types').className='hide'
    document.getElementById('faixa-5').className='hide'
    linhas = 4
})
document.getElementById('fivel').addEventListener('click',function(){
    document.getElementById('calcular-cores').className='calcular-cores'
    document.getElementById('buttons-types').className='hide'
    document.getElementById('faixa-5').className='option'
    linhas = 5
})

if(linhas == 4){
    
} 
cores = ['Preto','Marrom','Vermelho','Laranja','Amarelo','Verde','Azul','Violeta','Cinza','Branco','Ouro','Prata','Sem cor']


checkcolor = (fx,fx_num) => {
    for(i=0;i<13;i++){
        if(cores[i] == fx){            
            return i.toString()
        }
    }
}

document.getElementById('calcular').addEventListener('click',function(){
    fx1 = document.getElementById('Faixa 1').value
    fx2 = document.getElementById('Faixa 2').value
    fx3 = document.getElementById('Faixa 3').value
    fx4 = document.getElementById('Faixa 4').value
    fx5 = document.getElementById('Faixa 5').value
    fx1 = checkcolor(fx1,1)
    fx2 = checkcolor(fx2,2)
    fx3 = checkcolor(fx3,3)
    fx4 = eval(checkcolor(fx4,4))
    fx5 = eval(checkcolor(fx5,5))

    if(linhas == 5){
        console.log(document.getElementById('Faixa 2').value)
        num = eval(fx1+fx2+fx3)
            
        result = num * 10**fx4
        if(fx4==10){
            result = num * 0.1
        }
        if(fx4==11){
            result = num * 0.01
        }
        if(fx4==12){
            // console.log('Erro: a faixa 4 não pode ser sem cor')
            // return
        }
        if(fx5 == 1){
            fx5 = 1
        }
        else if(fx5 == 2){
            fx5 = 2
        }
        else if(fx5 == 5){
            fx5 = 0.5
        }
        else if(fx5 == 6){
            fx5 = 0.25
        }
        else if(fx5 == 7){
            fx5 = 0.1
        }
        else if(fx5 == 8){
            fx5 = 0.05
        }
        else if(fx5 == 10){
            fx5 = 5
        }
        else if(fx5 == 11){
            fx5 = 10
        }
        else if(fx5 == 12){
            fx5 = 20
        }
        errorinput = document.getElementById('errortax').value
        m = errorinput - result
        errortax = m/result
        errortax = (errortax*100).toFixed(2)
                
        

       


        document.getElementById('resultado').innerHTML ='V.Nominal: '+result.toFixed(2)+'Ω\n<br>V.Max: '+(result +((fx4 *result) /100)).toFixed(2)+'Ω\n<br> V.Min: '+(result -((fx4 *result) /100)).toFixed(2)+'Ω'
        if(document.getElementById('errortax').value != ''){
            document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML +'\n<br> Taxa de erro: '+errortax+'%'
        }
    }else if(linhas == 4){
        console.log('4 linhas')
        // console.log('aafx1\n'+fx1+'\n'+fx2+'\n'+fx3+'\n'+fx4+'\n')
        num = eval(fx1+fx2)
        result = num * 10**fx3
        
        if(fx1>=10){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 1 não pode ser "+cores[10]+', '+cores[11]+', ou '+cores[12]+','
            return
        }   
        if(fx2>=10){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 2 não pode ser "+cores[10]+', '+cores[11]+', ou '+cores[12]+','
            return
        }   
        if(fx3==10){
            result = num * 0.1}
        if(fx3==11){
            result = num * 0.01}
        if(fx3==12){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 3 não pode ser Sem cor"
            return
        }
        if(fx4 == 1){
            fx4 = 1}
        else if(fx4 == 2){
            fx4 = 2}
        else if(fx4 == 5){
            fx4 = 0.5}
        else if(fx4 == 6){
            fx4 = 0.25}
        else if(fx4 == 7){
            fx4 = 0.1}
        else if(fx4 == 8){
            fx4 = 0.05}
        else if(fx4 == 10){
            fx4 = 5}
        else if(fx4 == 11){
            fx4 = 10}
        else if(fx4 == 12){
            fx4 = 20}
        if(fx4 == 0){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 4 não pode ser Preto, Laranja, Amarelo, ou Branco"
            return
        }
        if(fx4 == 3){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 4 não pode ser Preto, Laranja, Amarelo, ou Branco"
            return
        }
        if(fx4 == 4){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 4 não pode ser Preto, Laranja, Amarelo, ou Branco"
            return
        }
        if(fx4 == 9){
            document.getElementById('resultado').innerHTML = "ERRO: Faixa 4 não pode ser Preto, Laranja, Amarelo, ou Branco"
            return
        }
        errorinput = document.getElementById('errortax').value
        m = errorinput - result
        errortax = m/result
        errortax = (errortax*100).toFixed(2)
                
        

       
        console.log(result)

        document.getElementById('resultado').innerHTML ='V.Nominal: '+result.toFixed(2)+'Ω\n<br>V.Max: '+(result +((fx4 *result) /100))+'Ω\n<br> V.Min: '+(result -((fx4 *result) /100))+'Ω'
        if(document.getElementById('errortax').value != ''){
            document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML +'\n<br> Taxa de erro: '+errortax+'%'
        }
        // console.log(' Max: '+(result +((fx4 *result) /100))+'     Min: '+(result -((fx4 *result) /100)))
    }
})
