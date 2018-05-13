<template>
  <div>
    <el-row>
      <div class="about-background">
        <div class="about-frame">
          <div class="about-text">
            <p>我们用工匠与画家的眼光</p>
            <p>来重新设计和塑造身边的日常</p>
            <p>简化校园生活</p>
          </div>
        </div>
      </div>
    </el-row>
    <el-row class="introduction">
      <p>ABOUT US</p>
      <el-col :xs="24" :sm="8">
        <div>
          <p>Lab μ</p>
          <p>清华大学学生校园极客社</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="16">
        <div>
          <p>Lab μ是清华大学内部具有极客精神的同学们组成的科创团体，汇集了校园顶尖的工程师、设计师和创造力行动力max的同学。 我们用工匠与画家的眼光来重新设计和塑造身边的日常，并通过协力开发全新的互联网、移动和桌面应用等产品来简化校园生活。</p>
          <p>多个深受师生欢迎的应用已在发布或开发中，如TUNet校园网自动联网助手、Tsinghua Now即刻清华应用、 CaμsKit校园活动套件等，更多有趣实用的想法正被一步步实现！</p>
          <p>我们通过多种平台大型项目的设计、开发、宣传、运营等活动，为团队成员提供了有效的交流和学习机会。</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :xs="24"
        :sm="8"
        > 
        <img src="../../static/images/products.svg" />
        <p>PRODUCTS</p>
        <p>
          我们的作品在全校范围被广泛地使用。<br />
          TUNet校园自动联网助手现有Android、iOS和桌面版本，在校内共有16000+的用户数量。
        </p>
      </el-col>
      <el-col
        :xs="24"
        :sm="8"
        > 
        <img src="../../static/images/awards.svg" />
        <p>AWARD WINNING</p>
        <p>
          获得“挑战杯”全国大学生课外学术科技作品竞赛特等奖， “挑战杯”全国大学生创业计划竞赛金奖，华人新世界数学奖银奖，第二届清华大学校园优化创意大赛实践赛 三等奖
        </p>
      </el-col>
      <el-col
        :xs="24"
        :sm="8"
        > 
        <img src="../../static/images/members.svg" />
        <p>MEMBERS</p>
        <p>
          来自不同专业的协会成员共同合作，涵盖了项目开发过程中的方方面面。我们同样欢迎拥有创意与热情的你，来与我们一起实现各种更多的可能。
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.about-background
{
  position: relative;
  background-image: url(../../static/images/ex-bg.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: repeat;
  background-size: cover;
  background-position: 50% 50%;
  text-align: center;
}
.about-frame
{
  position: absolute;
  bottom: 10%;
  width: 100%;
  height: 90%;
  background-image: url(../../static/images/frame.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.about-text
{
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
}
.introduction
{
  background-color: #eee;
}
</style>

