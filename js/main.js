"use strict"


// ↓↓ サムネイル複製 ↓↓ ---------------------- 

  const personlist = document.getElementById("personlist");

  function thumb_clone(){
    
    for(let i = 0;i < (persons.length - 1);i++){
      let clone = personlist.firstElementChild.cloneNode(true);
      personlist.appendChild(clone);
    };

  };

// ↑↑ サムネイル複製 ↑↑ ---------------------- 


// ↓↓ サムネイル表示 ↓↓ ---------------------- 

  const thumbnail_img = document.getElementsByClassName("thumbnail_img");
  const thumbnail_info = document.getElementsByClassName("thumbnail_info");
  const thumbnail_oneword = document.getElementsByClassName("thumbnail_oneword");
  const prof_link = document.getElementsByClassName("prof_link");

  function thumb_apear(){

    for(let i = 0;i < thumbnail_img.length;i++){
      thumbnail_img[i].style.backgroundImage = `url(${persons[i].img})`;
      thumbnail_info[i].innerHTML = `${persons[i].age}歳/${persons[i].place}/${persons[i].name}`;
      thumbnail_oneword[i].innerHTML = persons[i].oneword;
      prof_link[i].href = `profile.html?p=${i}`;
    };

  };
  
  // ↑↑ サムネイル表示 ↑↑ ---------------------- 

  new Promise((resolve)=>{

    thumb_clone();
    resolve();

  }).then(()=>{

    thumb_apear()
    
  });
