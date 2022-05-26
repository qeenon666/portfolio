<template>
  <div class="jspproject mx-10 my-5">
    <h1>JSP</h1>
    <div class="container">
      <div class="item-wrap">
        <!-- <div class="item wow bounceInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: bounceInUp;">
          <img src="2.png" alt="200x200">
        </div> -->
        <div class="item wow bounceInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: bounceInUp;">
          <img src="3.png" alt="200x200">
        </div>
        <div class="item wow bounceInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: bounceInUp;">
          <img src="4.png" alt="200x200">
        </div>
        <div class="item wow bounceInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: bounceInUp;">
          <img src="5.png" alt="200x200">
        </div>
        <div class="item wow bounceInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: bounceInUp;">
          <img src="6.png" alt="200x200">
        </div>
      </div>
      <div>
        <div class="jspcontent">
          <h1>Javascript & JQuery & JSP</h1><br />
          <h2>Hard Coding Template(Module) Source - UI/UX, DBCP 구현</h2><br />
          <p>
            자바스크립트와 제이쿼리를 학습한 기초 기반 지식을 토대로 소스분석 및 테스트 응용하여, <br />
            100% 순수 하드코딩 작업으로 연습삼아 UI/UX, DBCP 구현을 해 보았습니다.<br />
            jsp 페이지를 만들고 jsp페이지에서 form으로 입력하는 action을 처리 후<br />
            control 페이지 값을 저장하고 do서블릿으로 db를 접속하기 위해 dao서블릿을 만들고 그리고 DBCP서블릿 제작<br />
          </p>
        </div>
        <h2>
           <br />
        </h2>
      </div>
    </div>
  </div>
  <!-- <div class="wrapper">
    <div class="typing-demo">
      안녕하세요 이게 맞
    </div>
  </div> -->
</template>
<script>

export default {
  
}
</script>
<style>
.jspproject{
  padding-bottom: 100px;
}
.jspproject .jspcontent{
  padding-top: 15px;
}
.jspproject h2{
  font-size: 15px;
  font-style: italic;
}
.jspproject p{
  font-size: 12px;
}
.jspproject .container{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    margin-top: 10px;
}
.jspproject .container .item-wrap{
    margin-top: 15px;
    text-align: center;
    overflow: hidden;
}
.jspproject .container .item-wrap .item,
.jspproject .container .item-wrap .item-box{
    width: 23%;
    float: left;
    margin: 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-radius: 30px;
    border: 1px solid black;
}
.jspproject .container .item-wrap .item img{
    width: 100%;
    height: 330px;
    border-radius: 30px;
}
.jspproject .container .item-wrap .item:hover img{
    transform: scale(1.1);
    transition: 0.2s;
    border-radius: 30px;
    overflow: hidden;
}
.jspproject .container .item-wrap .item-box img{
    width: 100%;
    height: 420px;
    border-radius: 30px;
}
</style>
