document.querySelector("form").addEventListener("submit",myfunction);
function studentdetails(one,two,three,four,five){
    this.name=one;
    this.course=two;
    this.unit=three;
    this.image=four;
    this.batch=five;
}
function myfunction(){
    event.preventDefault();
    let name=one.two.value;
    let course=one.three.value;
    let unit=one.four.value;
    let image=one.five.value;
    let batch=one.six.value;
    let out=new studentdetails(name,course,unit,image,batch);
    let array=JSON.parse(localStorage.getItem("students"))||[];
    array.push(out);
   localStorage.setItem("students",JSON.stringify(array));
   window.location.reload();
}

function calci(){
   let put=document.querySelector("#app");
    let array=JSON.parse(localStorage.getItem("students"))||[];
    let obj={};
    for(let i=0; i<array.length; i++){
        let char=array[i];
        if(obj[char.batch]==undefined){
            obj[char.batch]=1;
        }
        else{
            obj[char.batch]=obj[char.batch]+1;
        }
    }
    console.log(obj)
    for(let key in obj){
        put.append(key+"---"+obj[key])
    }

   

}
calci();