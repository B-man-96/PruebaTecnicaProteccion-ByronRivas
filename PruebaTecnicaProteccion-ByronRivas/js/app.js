//#region DeclararVariables
    let TbResult=document.getElementById("TbResult");
    let TbInput=document.getElementById("TbInput");
    let button =document.getElementById('BtCalc');

    let now_mm="";
    let now_ss="";

    let myVar = setInterval(function() {
        myTimer();
    }, 1000);
//#endregion DeclararVariables


//#region EventosFront
    button.addEventListener('click',(e)=>{
        fibbo_mm_ss(now_mm,now_ss);
    });
//#endregion EventosFront


//#region Programa
    function fibbo_mm_ss(mm,ss){
        let m1=mm.toString().substr(0, 1);//Semilla 1 de la serie
        let m2=mm.toString().substr(1, 1);//Semilla 2 de la serie
        
        m1=parseInt(m1);
        m2=parseInt(m2);
        console.log("Primer dígito de los minutos = X: "+m1);
        console.log("Segundo dígito de los minutos = Y: "+m2);
        console.log("Segundos = cant elementos -2: "+ss);
        n=ss+2;//numero de elementos en la serie
        
        let list_fibo=[];
        let list_fibo_desc=[];
        let a=0;
        let b=1;
        let c=0;
        
        a=m1;
        b=m2;

        for(var i=0; i<n; i++){
            list_fibo.push(a+" ");//Se añade " " por la presentacion responsive en front
            c=a+b;
            a=b;
            b=c;
        }
        list_fibo_desc=list_fibo.sort(function(a, b){return b-a});

        console.log("Resultado Lista: ");
        console.log(list_fibo_desc);
        TbResult.innerText=(list_fibo);
        TbInput.innerText=("Primer dígito de los minutos = X = "+m1+"\n"+"\n"+
            "Segundo dígito de los minutos = Y ="+m2+"\n"+"\n"+
            "Digitos de los segundos = N-2 = "+ss+"\n"+"\n"+
            "Cantidad de elementos = N = "+n
            );
    }
    function myTimer() {
        var d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
        now_mm=(d.getMinutes()<10?'0':'') + d.getMinutes();
        now_ss=d.getSeconds();
    }
//#endregion Programa

