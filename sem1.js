const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");


const calculateMarks = (event) => {
  
  event.preventDefault();
  console.log("hello");
  
  const m1_sem = document.getElementById("m1-sem").value;
  const m1_inter = document.getElementById("m1-inter").value;
  const p1_sem = document.getElementById("p1-sem").value;
  const p1_inter = document.getElementById("p1-inter").value;
  const c1_sem = document.getElementById("c1-sem").value;
  const c1_inter = document.getElementById("c1-inter").value;
  const mech_sem = document.getElementById("mech-sem").value;
  const mech_inter = document.getElementById("mech-inter").value;
  const bee_sem = document.getElementById("bee-sem").value;
  const bee_inter = document.getElementById("bee-inter").value;
  const ws = document.getElementById("workshop").value;



  const sumfinal = ( for100(mech_sem) + for100(m1_sem) + for100(bee_sem) + for75(p1_sem) + for75(c1_sem) + for25m(m1_inter) + for25(p1_inter) + for25(c1_inter) + for50(mech_inter) + for50(bee_inter) + for50(ws)) / 18;

  console.log(sumfinal);

  document.getElementById("result").textContent = "Your sgpa is : " + sumfinal;



              
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





