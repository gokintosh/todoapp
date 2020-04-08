const form=document.querySelector('form');
const ul=document.querySelector('ul');
const button=document.querySelector('button');
const input=document.getElementById('item');

let itemsArray=localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
const data=JSON.parse(localStorage.getItem('items'));




const liMaker=text=>{
    const li=document.createElement('li');
    li.textContent=text;
    ul.prepend(li);
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items',JSON.stringify(itemsArray))
    
    liMaker(input.value)
    input.value=' ';

})

data.forEach(item => {
    liMaker(item);
});

// for(i=(data.length-1);i>=0;i--){
//     liMaker(data[i])
// }

button.addEventListener('click',function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
        input.value=' '
    }
})