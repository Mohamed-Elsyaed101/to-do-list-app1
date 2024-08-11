
const inbox=document.getElementById('input-box');
const licontainer =document.getElementById('list')
const button =document.getElementById('button')
function addtask(){
    if( inbox.value==='')window.alert('You must write some thing ');
    else {
        let li =document.createElement('li');
        li.innerHTML=inbox.value;
        licontainer.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        
    }
    inbox.value='';
    savedata();
}
inbox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
    event.preventDefault()
        button.click();
    }
});
licontainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false
);
function savedata(){
    localStorage.setItem('data',licontainer.innerHTML);
};
function getdata(){
    licontainer.innerHTML=localStorage.getItem('data');
};
getdata();

