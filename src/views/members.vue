<template>
  <div>
    <div class="header">
      <el-row class="header-title">
        <h3>MEMBERS</h3>
      </el-row>

      <el-row>
        <el-col :span="12">
          <p style="font-size: 1.5em">我们由来自不同背景，不同学院的同学们组成</p>
        </el-col>

        <el-col :span="6">
          <hr align="left" width="80%" color="#ffffff" size="40/"/>
          <div id="slogan1" class="slogan">
            <h5 class="slogan-head">开发</h5>
            <h5 class="slogan-content">给我一段代码我能撬动整个校园</h5>
          </div>
          <div id="hr2" class="hr">
            <hr align="left" width="80%" color="#ffffff" size="40/"/>
          </div>
          <div id="slogan2" class="slogan">
            <h5 class="slogan-head">设计</h5>
            <h5 class="slogan-content">用像素美化我们的校园</h5>
          </div>
        </el-col>

        <el-col :span="6">
          <div id="hr3" class="hr">
            <hr align="left" width="80%" color="#ffffff" size="40/">
          </div>
          <div id="slogan3" class="slogan">
            <h5 class="slogan-head">运营</h5>
            <h5 class="slogan-content">
              我们的目标是一晚200粉
            </h5>
          </div>
          <div id="hr4" class="hr">
            <hr align="left" width="80%" color="#ffffff" size="40/">
          </div>
          <div id="slogan4" class="slogan">
            <h5 class="slogan-head">产品</h5>
            <h5 class="slogan-content">二分之一个产品等于零</h5>
          </div>
        </el-col>
      </el-row>

      <el-row class="header-text">
      </el-row>
    </div>

    <div class="main-content">
      <div class="container">
        <el-row>
          <el-col :xs="6" :sm="4" :md="2">
            <div id="logo-img">
              <img src="../../static/images/LabmU_Meow_black.svg" />
            </div>
          </el-col>
          <el-col :xs="18" :sm="20" :md="22">
            <div class="content">
              那些码代码、赶设计、求涨粉的日日夜夜，终将铭刻我们的真诚与热爱。 这里是不断超越的Lab μ，谢谢您的支持。
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="members">
    </div>
  </div>
</template>

<style>
.header
{
  width: 100%;
  padding-top: 100px;
  padding-bottom: 200px;
  margin-bottom: -40px;
  position: relative;
  background-image: url(../../static/images/members.jpg);
  background-size: cover;
  background-position: 0 100%;
  background-repeat: no-repeat;
  color: white;
}
</style>

