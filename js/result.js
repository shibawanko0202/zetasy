"use strict"

const loading = document.getElementById("result-loading");
const reload_btn = document.getElementById("reload-btn");

// 選択肢の中身を定数定義
const ans1 = "いずみ";
const ans2 = "谷元";
const ans3 = "いずぽん";
const ans4 = "雪見";

// 選択肢の票数を定義、初期化
var s1 = 0;	//いずみ 
var s2 = 0;	//谷元
var s3 = 0;	//いずぽん
var s4 = 0;	//雪見

var i = 1;

// Googleスプレッドシートから値を取得して値を集計
const api_url = "https://script.google.com/macros/s/AKfycby-d71hP6_-uZ6n02fAD60bUvNYQBtGe2VQf0jh3B2aokW0FDhcTRMGbq7sqUYoRAophQ/exec";
fetch(api_url)
.then(function (fetch_data) {
	return fetch_data.json();
})
.then(function (json) {
	for (i in json) {
        //    console.log(json[i].ans);
		if(json[i].ans == ans1) {
			s1++;
		} else if (json[i].ans == ans2) {
			s2++;
		} else if (json[i].ans == ans3) {
			s3++;
		} else if (json[i].ans == ans4) {
			s4++;
		}
    }
	const total = s1 + s2 + s3 + s4;

    const bars = document.getElementsByClassName("bar");
	const percents = document.getElementsByClassName("percent");

	// ％変換
	const select_01 = Math.round(s1 / total * 100); 
	const select_02 = Math.round(s2 / total * 100);
	const select_03 = Math.round(s3 / total * 100);
	const select_04 = Math.round(s4 / total * 100);
	const select_array = [select_01,select_02,select_03,select_04];

	let count1 = 0;
	let count2 = 0;
	let count3 = 0;
	let count4 = 0;

    loading.classList.add("loaded");
    setTimeout(() => {
        for(let i = 0;i < bars.length;i++){
        bars[i].classList.add("rise");
        };
        const rise = document.getElementsByClassName("rise");
    
        // 棒グラフアニメーション追加
        const bh = 8;
        const bs = 15;
        // rise[0].style.height = `${90 * bh}px`;
        rise[0].style.height = `${select_01 * bh}px`;
        rise[1].style.height = `${select_02 * bh}px`;
        rise[2].style.height = `${select_03 * bh}px`;
        rise[3].style.height = `${select_04 * bh}px`;
        rise[0].style.transition = `height ${select_01 / bs}s`;
        rise[1].style.transition = `height ${select_02 / bs}s`;
        rise[2].style.transition = `height ${select_03 / bs}s`;
        rise[3].style.transition = `height ${select_04 / bs}s`;
    
        // カウントUP用の変数
        const anim_sec = 60; 
        // カウントUPアニメーション
        const countup01 = setInterval(()=>{
        count1++;
        percents[0].innerHTML = `${count1}<span>%</span>`;
        if(count1 == select_01){
            clearInterval(countup01);
        };
        },anim_sec);
        const countup02 = setInterval(()=>{
        count2++;
        percents[1].innerHTML = `${count2}<span>%</span>`;
        if(count2 == select_02){
            clearInterval(countup02);
        };
        },anim_sec);
        const countup03 = setInterval(()=>{
        count3++;
        percents[2].innerHTML = `${count3}<span>%</span>`;
        if(count3 == select_03){
            clearInterval(countup03);
        };
        },anim_sec);
        const countup04 = setInterval(()=>{
        count4++;
        percents[3].innerHTML = `${count4}<span>%</span>`;
        if(count4 == select_04){
            clearInterval(countup04);
        };
        },anim_sec);

        reload_btn.classList.add("apear");
    }, 1200);
});

// 更新ボタン
reload_btn.addEventListener('click',()=>{
	location.reload();
});