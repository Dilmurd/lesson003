 // 1 masala
{
    let a = +prompt ("butun son kiriting musbat son bolsa 1 oshirilsin aks holda soning ozi qaytsin")    
    if(a > 0){
       console.log(a + 1);
    }else{
        console.log(a);
    }
}
 // 2 masala
 {
    let a = +prompt ("butun son kiriting agar berilgan son musbat bolsa 1 oshiriladi aks holda 2 kamaytiriladi")
    if(a > 0){
        console.log(a + 1);
    }else{
        console.log (a - 2);
    }
 }
 // 3 masala
 {
    let a = +prompt ("butun son kiriting agar musbat son bolsa 1 ga kopaytiriladi agar manfiy bolsa 2 ga kamaytiriladi 0 ga teng bolsa 10 ga ozlashtiriladi")
    if(a < 0){
        console.log(a + 1);
    }else if(a < 0){
        console.log(a - 2);
    }else if(a == 0){
        console.log(son + 10);
    }
 }
 // 4 masalaa
 {
    let a = 10
    let b = 20
    let c = 11
    let musbat = 0
    let manfiy = 0
    if(a > 0){
        musbat++
    }else{
        console.log(musbat);
    }
    if(b > 0){
        musbat++
    }else{
        console.log(musbat);
    }
    if(b > 0){
        musbat++
    }else{
        console.log(musbat);
    }
    console.log(`musbat soni: ${musbat}`);
  }
 // 5 masalaa 
 {
    let a = -15
    let b = 20
    let c = -65

    let musbat = 0
    let manfiy = 0
    if(a > 0){
        musbat++
    }else{
        manfiy++
    }

    if(b > 0){
        musbat++
    }else{
        manfiy++
    }
    if(c > 0){
        musbat++
    }else{
        manfiy++
    }
    console.log(`musbat soni: ${musbat} manfiy soni: ${manfiy}`);
 }
// 6 masalaa
{
    alert = +prompt ("ikkta soni qaysi biri katta ekanligini aniqlovchi dasturcha")
    let a = +prompt ("a sonin kiriting")
    let b = +prompt ("b sonin kiriting")
    if(a >= b){
        console.log(`a soni katta ${a}`);
    }else{
        console.log(`b soni katta ${b}`);
    }
}
// 7 masala
{
    alert = +prompt ("ikkta sondan qaysi biri kichik ekanligini aniqlaydigan dasturcha")
    let a = +prompt ("a sonin kiriting")
    let b = +prompt ("b sonin kiriting")
    if(a <= b){
        console.log(`a soni kichik ${a}`);
    }else{
        console.log(`b soni kichik ${b}`);
        
    }
}
// 8 masala
{
    alert = +prompt ("ikkta son berilga shu sonlardan avval kattasini chiqaruvchi dasturcha")
    let a = +prompt ("a sonin kiriting")
    let b = +prompt ("b sonin kiriting")
    if(a >= b){
        console.log(`a soni katta ${a}`);      
    }else{
        console.log(`b soni katta ${b}`);
    }
}
// 9 masala 
{
    alert = +prompt ("ikkta son berilgan shu sonlardan a soni kichik b somi katta boladigan dasturcha")
    let a = +prompt ("a sonin kiriting")
    let b = +prompt ("b sonin kiriting")
    if(a == b){
        a = a - a + 1
        console.log(`a soni kichik boladi ${a}`);
    }else if (a > b) {
        a = a - a + 1
        b = b + 10
        console.log(`birinchi kiritga son a soni kichik boladi ${a} ikkinchisi esa katta boladi ${b}`);
    }else if(b > a){
        a = a - a + 1
        b = b + 10
        console.log(`birinchi son ${a} kichik boladi ikkinchi son esa ${b} katta boldi`);
        
    }
}
// 10 masala
{
    alert = +prompt ("ikkta son berilgan agar ozgaruvchi teng bolmasa a va b ning yigindisini ozlashtiradigan dasturcha")
    let a = +prompt ("a sonin kiriting")
    let b = +prompt ("b sonin kiriting")
    if(a != b){
        console.log(`a va b soni teng emas ${a + b}`);
    }else if(a == b){
        a = 0
        b = 0 
        console.log(`sonlar teng bolgani uchun qiymat birinchi ${a} keyn ${b} ozgaradi`);
    }
}