// 图片切换代码
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/gynsh-icon.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
};


function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '高邮农商行，' + name + '！';
}

function setUserName(){
    let myName = prompt('请输入你的名字');
    if(myName != null)
    {
    localStorage.setItem('name',myName);
    setHeading(myName);
    }
    else
    {
        
    }
}

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;