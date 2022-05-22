let array=JSON.parse(localStorage.getItem("students"))||[];

callthefun(array);

function callthefun(data){
    data.forEach(function(ele,index){
        let box=document.createElement("div");

        let one=document.createElement("h2");
        one.innerText=ele.name;

        let two=document.createElement("h3");
        two.innerText=ele.course;

        let three=document.createElement("h4");
        three.innerText="Unit-  "+ele.unit;

        let four=document.createElement("img");
        four.setAttribute("src",ele.image);

        let five=document.createElement("h4");
        five.innerText=ele.batch;

        let six=document.createElement("button");
        six.innerText="Remove";
        six.addEventListener("click",function(){
            hello(ele,index);
        })

        box.append(four,one,two,three,five,six);
        document.querySelector("#attach").append(box);
    })

}

function hello(ele,index){
    array.splice(index,1);
    localStorage.setItem("students",JSON.stringify(array));
    window.location.reload();
   let local= localStorage.setItem("trash",JSON.stringify(ele));
}
 