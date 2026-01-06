let input=document.getElementById('input')
let listcontainer=document.getElementById('list-container')
function addbtn(){
    if(input.value=='')
    {
        alert('type your task')
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        // list-container.appendChild('li')
        listcontainer.appendChild(li);
        let circle=document.createElement('div')
        // circle.className="circle"
        // li.appendChild(circle);
        let span=document.createElement('span')
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value=''
}
// let check=getElementById('check')
// let del =getElementById('delete')
listcontainer.addEventListener('click',function (e)
{
    if(e.target.tagName=='LI' )
    {
        e.target.classList.toggle("check")
        e.target.classList.toggle("circle")
    }
    else if(e.target.tagName=='SPAN')
    {
        e.target.parentElement.remove()
    }
})

