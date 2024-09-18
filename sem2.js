const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");


const calculateMarks = (event) => {
  
  event.preventDefault();
  console.log("hello");
  
  const m2_sem = document.getElementById("m2-sem").value;
  const m2_inter = document.getElementById("m2-inter").value;
  const p2_sem = document.getElementById("p2-sem").value;
  const p2_inter = document.getElementById("p2-inter").value;
  const c2_sem = document.getElementById("c2-sem").value;
  const c2_inter = document.getElementById("c2-inter").value;
  const grap_sem = document.getElementById("grap-sem").value;
  const grap_inter = document.getElementById("grap-inter").value;
  const cp_sem = document.getElementById("cp-sem").value;
  const cp_inter = document.getElementById("cp-inter").value;
  const pce_sem = document.getElementById("pce-sem").value;
  const pce_inter = document.getElementById("pce-inter").value;
  const ws = document.getElementById("workshop").value;



  const sumfinal = ( for100(m2_sem) + for75(p2_sem) + for75(c2_sem) + for75(cp_sem) + for75(grap_sem) + for75(grap_inter) + for25(p2_inter) + for25(c2_inter) + for50(cp_inter) + for50(ws) + for40(p2_sem) + for25m(m2_inter) + for25m(pce_inter)  ) / 20;


  console.log(sumfinal);

  document.getElementById("result").textContent = "The sgpa is : " + sumfinal;



              
  function for100(subfinal) {

     
    sum100 = 0;

        if (subfinal >=40 && subfinal<=44)
        {
            sum100  = sum100 + 3*4;
        }
        else if (subfinal>=45 && subfinal<=49)
        {
            sum100 = sum100 + 3*5;
        } else if (subfinal>=50 && subfinal<=59)
        {
            sum100 = sum100 + 3*6;
        } else if (subfinal>=60 && subfinal<=69)
        {
            sum100 = sum100 + 3*7;
        } else if (subfinal>=70 && subfinal<=74)
        {
            sum100 =sum100 + 3*8;
        } else if (subfinal>=75 && subfinal<=79)
        {
            sum100 =sum100 + 3*9;
        }
        else if (subfinal >=80 && subfinal<=100)
        {
            sum100 =sum100 +3*10;
        }

        return sum100;
    }

   
  function for75(subfinal){

    sum75 = 0;

        if (subfinal>=30 && subfinal<=33)
        {
            sum75 =sum75 +2*4;
        }
        else if (subfinal>=34 && subfinal<=36)
        {
            sum75 =sum75 +2*5;
        } else if (subfinal>=37 && subfinal<=44)
        {
            sum75 =sum75 +2*6;
        } else if (subfinal>=45 && subfinal<=52)
        {
            sum75 =sum75 +2*7;
        } else if (subfinal>=53 && subfinal<=56)
        {
            sum75 =sum75 +2*8;
        } else if (subfinal>=57 && subfinal<=59)
        {
            sum75 =sum75 +2*9;
        } else if (subfinal>=60 && subfinal<=75) {
            sum75 = sum75+2*10;
        }


        return sum75;
    }


  function for25(subfinal){

    sum25 = 0;

        if (subfinal >=17&& subfinal <=19)
        {
            sum25 = sum25 + 0.5 *9;
        }
        else if (subfinal >=20 && subfinal <=25)
        {
            sum25 = sum25 + 0.5 *10;
        }
        return sum25;
  }  

  function for25m(subfinal){
    
    sum25m = 0;

        if (subfinal >=17&& subfinal <=19)
        {
            sum25m = sum25m + 1 *9;
        }
        else if (subfinal >=20 && subfinal <=25)
        {
            sum25m = sum25m + 1 *10;
        }

        return sum25m;

  }  


  function for40(subfinal) {

    sum40 = 0;

    if(subfinal >= 20 && subfinal <= 21){
      sum40 = sum40 + 2*4;
    }
    else if(subfinal >= 22 && subfinal <= 24){
      sum40 = sum40 + 2*5;
    }
    else if(subfinal >= 25 && subfinal <= 29){
      sum40 = sum40 + 2*6;
    }
    else if(subfinal >= 30 && subfinal <= 34){
      sum40 = sum40 + 2*7;
    }
    else if(subfinal >= 35 && subfinal <= 37){
      sum40 = sum40 + 2*8;
    }
    else if(subfinal >= 38 && subfinal <= 39){
      sum40 = sum40 + 2*9;
    }
    else if(subfinal >= 40 && subfinal <= 50){
      sum40 = sum40 + 2*10;
    }

    return sum40;
  }

  function for50(subfinal){

    sum50 = 0;

        if(subfinal>=20 && subfinal <=21){
            sum50 = sum50 + 4;
        }

        else if (subfinal >= 22 && subfinal <=24)
        {
            sum50= sum50 +5;

        }
        else if (subfinal >=25 && subfinal <=29)
        {
            sum50 = sum50+6;
        }
        else if (subfinal >=30 && subfinal <=34)
        {
            sum50 = sum50+7;
        }
        else if (subfinal >=35 && subfinal <=37)
        {
            sum50 = sum50+8;
        }
        else if (subfinal >=38 && subfinal <=39)
        {
            sum50 = sum50+9;
        }
        else if (subfinal >=40 && subfinal <=50)
        {
            sum50 = sum50+10;
        }
        return sum50;
  }





}