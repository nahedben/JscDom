//***********************PartOne ***********************//

// Examin the document Object
//console.dir(document)

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
////document.title= 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
////document.all[10].textContent ="hello"
//
//console.log(document.forms);
//
//console.log(document.links);
//console.log(document.images);


//*******************GETELEMENTBYID**************************//

//console.log(document.getElementById("header-title"));
//var headerTitle=document.getElementById("header-title");
//console.log(headerTitle);
//Here we are changind the title on headerTitle
//headerTitle.textContent="Hello";
//headerTitle.innerText = "GoodBye"

//Here the difference between innerText & TextContent
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);

//headerTitle.innerHTML='<h3>Hello</h3>';

//var headerTitle2=document.getElementById('main-header');
//
//headerTitle.style.borderBottom='solid 3px #000';
//
//headerTitle2.style.border='solid 3px #aaa';

//****************GETELEMENTSBYCLASSNAME***********************//

//var items =document.getElementsByClassName('list-group-item');
//console.log(items)
//console.log(items[1])
//items[1].textContent= 'Hello to';
//items[1].style.fontWeight="bold";
//items[1].style.backgroundColor="yellow"

//Gives Erro since it is an erray and we need to eterate
//items.style.backgroundColor='#fff';

//for(var i=0; i<items.length; i++){
//    items[i].style.backgroundColor="#cdd";
//}

//********************GETElEMENTBYTAGNAME**********************//

//var li =document.getElementsByTagName('li');
//console.log(li)
//console.log(li[1])
//li[1].textContent= 'Hello to';
//li[1].style.fontWeight="bold";
//li[1].style.backgroundColor="yellow"

//Gives Erro since it is an erray and we need to eterate
//items.style.backgroundColor='#fff';

//for(var i=0; i<li.length; i++){
//    li[i].style.backgroundColor="#ddd";
//}



//****************QuerySelector**********************//
//var header =document.querySelector('#main-header');
//header.style.borderBottom="solid 3px #ccc";
//
//var input =document.querySelector('input');
//input.value= " hello world";
//input.style.color="#fd7";
//input.style.borderBottom="solid 3px #ccc";
//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";
//
//var item= document.querySelector(".list-group-item");
//item.style.color ='red';
//
//var lastItem= document.querySelector('.list-group-item:last-child');
//lastItem.style.color = " blue";
//var SecItem= document.querySelector('.list-group-item:nth-child(2)');
//SecItem.style.color = " coral";
//var thrdItem= document.querySelector('.list-group-item:nth-child(3)');
//thrdItem.style.backgroundColor = " coral";

//**********************QuerySelectorALL*********************///

//var titles= document.querySelectorAll('.title');
//
//console.log(titles);
//titles[0].textContent= "Hello";
//
//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even= document.querySelectorAll('li:nth-child(even)');
//
//for(var i = 0; i<odd.length; i++){
//    odd[i].style.backgroundColor ="#f4f4f4";
//    even[i].style.backgroundColor='#ccc';
//}


///*******************Part2 *************************/////

// **************Traversing the DOM **********************//

var itemList = document.querySelector('#items');

    //ParentNode
//console.log(itemList.parentNode);
//
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//
//console.log(itemList.parentNode.parentNode);

    //ParentElement
//console.log(itemList.parentElement);
//
//itemList.parentElement.style.backgroundColor="#f4f4f4";
//
//console.log(itemList.parentNode.parentNode);


    //ChildNodes
//console.log(itemList.childNodes)

//console.log(itemList.children);
//console.log(itemList.children[1])
//itemList.children[1].style.backgroundColor= 'yellow'

    //firstChild
//console.log(itemList.firstChild)
//
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent=" Hi child"


 //ChildNodes
//console.log(itemList.childNodes)

//console.log(itemList.children);
//console.log(itemList.children[1])
//itemList.children[1].style.backgroundColor= 'yellow'

    //lastChild
//console.log(itemList.lastChild)

//console.log(itemList.lastElementChild)
//itemList.lastElementChild.textContent=" Hi child"

//nextSibling
//console.log(itemList.nextSibling)
//console.log(itemList.nextElementSibling);
//console.log(itemList.previousElementSibling);
//console.log(itemList.previousSibling);
//itemList.previousElementSibling.style.color="green";
//
//// createElement
//
////Add class
//var newDiv= document.createElement('div');
//newDiv.className='hello';
//
//console.log(newDiv)
//
////Add id
//newDiv.id='hello1'
//
////add Attribute
//newDiv.setAttribute('title', 'Hello Div');
//
////Create text node
//var newDivText= document.createTextNode(" hello Nahed");
//
////Add text to div
//newDiv.appendChild(newDivText);
//console.log(newDiv)
//
//var container = document.querySelector('header .container');
//var h1 =document.querySelector('header h1');
//
//container.insertBefore(newDiv, h1)
//
//newDiv.style.fontSize="30px";
//
//container.insertBefore(newDiv, h1)


//****************Part3***********************************
//var button = document.getElementById('button').addEventListener('click',buttonClick)
//                                                                
//function buttonClick(){                                                  
//    console.log('button clicked12')
//}


//Event Object
//var button = document.getElementById('button').addEventListener('click',buttonClick)
                                                                
//function buttonClick(e){                                                  
//    console.log('button clicked12')
//    document.getElementById('header-title').textContent = 'hi';
//    document.querySelector('#main').style.backgroundColor="#d2c22c";
//    console.log(e)
    
//    console.log(e.target);
//    console.log(e.target.id);
//    console.log(e.target.className);
//    console.log(e.target.classList);
//    var output =document.getElementById('output');
//    output.innerHTML= '<h3>'+e.target.id+'</h3>'
    
//    console.log(e.type);
    
//    client is from the browser
//    console.log(e.clientX);
//    console.log(e.clientY);
    
//    offset is from the element
//    console.log(e.offsetX)
//    console.log(e.offsetY)
    
//    console.log(e.altKey);
//    console.log(e.ctrlKey);
//    console.log(e.shiftKey);
//}

//*****************differente type of Event***************************

var button = document.getElementById('button')
// Oneclick
//button.addEventListener('click',runEvent);

//doubleClick
//button.addEventListener('dblclick',runEvent)

//Mousedown Event
//button.addEventListener('mousedown',runEvent)
//Mouseup Event
//button.addEventListener('mouseup',runEvent)


var box=document.getElementById('box');
//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

//box.addEventListener('mousemove', runEvent);

var itemInput=document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select=document.querySelector('select');

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent)
//itemInput.addEventListener('keypress',runEvent)

//itemInput.addEventListener('focus',runEvent)
//itemInput.addEventListener('blur',runEvent)

//itemInput.addEventListener('cut',runEvent)
//itemInput.addEventListener('paste',runEvent)
//itemInput.addEventListener('copy',runEvent)

//itemInput.addEventListener('input',runEvent)
//select.addEventListener('change', runEvent)
//select.addEventListener('input', runEvent)


form.addEventListener('submit', runEvent)


function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE '+e.type);
    
    console.log(e.target.value)
    
    
    
    
//    alert("you are not allowed to copy")
//    document.body.style.display="none"
    
//    console.log(e.target.value)   document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
    //display the mouse position on Y & X
//    output.innerHTML= '<h3>MouseX: '+e.offsetX+ ' </h3><h3>MouseY: '+e.offsetY+'</h3>';
    
//    box.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+",40)";
}