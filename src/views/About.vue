<template>
  <div class="about">
    <div class="txt">
      <h2>ABOUT <span>ME</span></h2>
      <p>신입 개발자 배성민입니다</p>
    </div>

    <div class="left">
      <img src="1.jpg" alt="프로필">
    </div>
    <div class="right">
      <div class="content-box">
        <div class="box">
          <h2>PROFILE</h2>
          <div class="txt-box">
            <p>NAME</p>
            <p>AGES</p>
            <p>ADDRESS</p>
            <p>EMAIL</p>
          </div>
          <div class="txt-box">
            <p>배성민</p>
            <p>25(1997.11.17)</p>
            <p>경상남도 양산시</p>
            <p>qeenon666@naver.com</p>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="box">
          <h2>LICENSE</h2>
          <div class="txt-box">
            <p>2010.3</p>
            <p>2019.6</p>
            <p>2021.11</p>
          </div>
          <div class="txt-box">
            <p>ITQ 아래한글 A등급</p>
            <p>ITQ 인터넷 A등급</p>
            <p>정보처리기사(예정)</p>
          </div>
        </div>
      </div>
      <div class="content-box" id="skill">
        <h2>MY ABILITIES</h2>
        <div class="progress-area">
          <div id="html" class="progress" style="position: relative;">HTML<svg viewBox="0 0 100 3" preserveAspectRatio="none" style="display: block; width: 90%;"><path d="M 0,1.5 L 100,1.5" stroke="#ededed" stroke-width="3" fill-opacity="0"></path><path d="M 0,1.5 L 100,1.5" stroke="#778899" stroke-width="3" fill-opacity="0" style="stroke-dasharray: 100, 100; stroke-dashoffset: 10;"></path></svg><div class="progressbar-text" style="font-size: 0.8vw; font-family: Cairo, sans-serif; position: absolute; right: 60px; bottom: 0px; color: rgb(0, 0, 0); font-weight: bold;">90%</div></div>
          <div id="css" class="progress" style="position: relative;">CSS<svg viewBox="0 0 100 3" preserveAspectRatio="none" style="display: block; width: 90%;"><path d="M 0,1.5 L 100,1.5" stroke="#ededed" stroke-width="3" fill-opacity="0"></path><path d="M 0,1.5 L 100,1.5" stroke="#778899" stroke-width="3" fill-opacity="0" style="stroke-dasharray: 100, 100; stroke-dashoffset: 20;"></path></svg><div class="progressbar-text" style="font-size: 0.8vw; font-family: Cairo, sans-serif; position: absolute; right: 60px; bottom: 0px; color: rgb(0, 0, 0); font-weight: bold;">80%</div></div>
          <div id="js" class="progress" style="position: relative;">JS<svg viewBox="0 0 100 3" preserveAspectRatio="none" style="display: block; width: 90%;"><path d="M 0,1.5 L 100,1.5" stroke="#ededed" stroke-width="3" fill-opacity="0"></path><path d="M 0,1.5 L 100,1.5" stroke="#778899" stroke-width="3" fill-opacity="0" style="stroke-dasharray: 100, 100; stroke-dashoffset: 40;"></path></svg><div class="progressbar-text" style="font-size: 0.8vw; font-family: Cairo, sans-serif; position: absolute; right: 60px; bottom: 0px; color: rgb(0, 0, 0); font-weight: bold;">60%</div></div>
          <div id="ai" class="progress" style="position: relative;">Ai<svg viewBox="0 0 100 3" preserveAspectRatio="none" style="display: block; width: 90%;"><path d="M 0,1.5 L 100,1.5" stroke="#ededed" stroke-width="3" fill-opacity="0"></path><path d="M 0,1.5 L 100,1.5" stroke="#778899" stroke-width="3" fill-opacity="0" style="stroke-dasharray: 100, 100; stroke-dashoffset: 20;"></path></svg><div class="progressbar-text" style="font-size: 0.8vw; font-family: Cairo, sans-serif; position: absolute; right: 60px; bottom: 0px; color: rgb(0, 0, 0); font-weight: bold;">80%</div></div>
        </div>
      </div>
      <div class="content-box" id="edu">
        <div class="box">
          <h2>EDUCATION </h2>
          <div class="txt-box">
            <p>2016.3 - 2022.2</p>
            <p>2013.3 - 2016.2</p>
          </div>
          <div class="txt-box">
            <p>신라대학교 컴퓨터정보공학부 졸업예정</p>
            <p>양산 물금고등학교 졸업</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about .txt{
    width: 100%;
}
.about .txt h2{
    margin-top: 80px;
    text-align: center;
    font-size: 1.6vw;
    font-family: 'NEXON Lv2 Gothic';
}
.about h2 span{
    font-weight: normal;
}
.about .txt p{
    text-align: center;
    color: #767676;
    margin-top: 10px;
    font-family: 'NEXON Lv2 Gothic';
    
}
.about .left{
    box-sizing: border-box;
    padding: 5%;
    float: left;
    width: 50%;
    text-align: center;
    padding-left: 25%;
}

.about .left img{
  max-width: 300px;
  width: 100%;
  margin: 2vh 0;
}

.about .right{
    font-family: 'SEBANG_Gothic_Bold';
    float: left;
    width: 50%;
    text-align: center;
}
.about .right .content-box{
    float: left;
    padding-top: 5%;
    margin-top: 6.5vh;
}
.about .right .box > div{
    float: left;
    margin-right: 20px;
    margin-top: 24px;
}
.about .right .box > div:nth-of-type(1){
    font-size: 1vw;
    letter-spacing: 0.5px;
    text-align: left;
}
.about .right .box > div:nth-of-type(2){
    font-size: 1vw;
    font-family: 'NEXON Lv2 Gothic';
    color: #767676;
    letter-spacing: 0.5px;
}
.about .right .box h2{
    font-size: 1.2vw;
    line-height: 1.5;
    text-align: left;
}
.about .right .box .txt-box{
    margin-bottom: 20px;
    text-align: left;
    line-height: 35px;
}
.about .right .box .txt-box p{
    letter-spacing: 1.5px;
}

.about .right .content-box:nth-child(3){
    clear: both;
    padding-top: 0;
    font-family: 'SEBANG_Gothic_Bold';
    text-align: left;
    
}
.about .right .content-box:nth-child(3) h2{
    font-size: 1.2vw;
}
.progress-area{
    width: 600px;
    height: 400px;
    margin-top: 24px;
    box-sizing: border-box;
    padding: 20px;
}
.progress-area div:nth-child(1){
    margin-top: 0;
}
.progress-area div{
    margin-top: 20px;
}
#skill{
  margin-left: -600px;
  margin-top: 150px;
  width: 300px;
  height: 500px;
}
#edu{
  margin-top: 110px;
  width: 600px;
  height: 500px;
}

</style>