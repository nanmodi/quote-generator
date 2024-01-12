let btn=document.getElementsByClassName("btn")[0];
let clear=document.getElementsByClassName("btn")[1];
let txt=document.getElementsByClassName("area")[0];
var category = 'happiness'
let color=['#DADBDD','#DBE9FA','#F8F8FF'	,'#E8F1D4','#FFFDD0',	'#FAEBD7','#FFDEAD',	'#E8E4C9','#DFD3E3','#E1D9D1']
async function call()
{
  let url="https://type.fit/api/quotes";
  let resp=await fetch(url);
  let response=await resp.json();
  let t=Math.floor(Math.random()*response.length);
  console.log(response[t]);
  let b=document.createElement("div");

  b.innerText='"'+response[t].text+'"';
  let d=document.createElement("span");
  let text=response[t].author;
  let gfd="";

  for(let i=0;i<text.length;i++)
  {
     if(text.charAt(i)===",")
     break;
    gfd+=text.charAt(i);
  }
  gfd.charAt(0).toUpperCase();
  d.innerText="By~ "+gfd;
  b.appendChild(d);

  txt.innerText=b.innerText;
  let ran=Math.floor(Math.random()*color.length)
  txt.style.backgroundColor=color[ran];

}

btn.addEventListener("click",()=>{
  
call();


})
clear.addEventListener("click",()=>
{
  txt.innerHTML="";
  txt.style.backgroundColor='';
})
