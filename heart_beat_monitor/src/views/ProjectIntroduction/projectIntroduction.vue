<template>
  <div class="project-introduction">
    <display-card :content="front"></display-card>
    <display-card :content="server"></display-card>
  </div>
</template>

<script>
import displayCard from '@/views/ProjectIntroduction/components/displayCard'

export default {
  components: {displayCard},
  data() {
    return {
      front: {
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1958288914,130314900&fm=26&gp=0.jpg',
        image: 'https://tva1.sinaimg.cn/large/0081Kckwgy1glnnhq9dd7j30ga0gaaad.jpg',
        text: '前端技术栈',
        stack: [{name: 'Vue', percentage: 90}, {name: 'Vue-Router', percentage: 30}, {
          name: 'element',
          percentage: 75
        }, {name: 'echarts', percentage: 40}]
      },
      server: {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607965931392&di=22bf56c426dae58e925b96f67daec1b5&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170929%2F20170929102048_d41d8cd98f00b204e9800998ecf8427e_2.jpeg',
        image: 'https://tva1.sinaimg.cn/large/0081Kckwgy1glnrhyu9hdj30c70camxt.jpg',
        text: '后端技术栈',
        stack: [{name: 'java', percentage: 80}, {name: 'spring-boot', percentage: 80}, {
          name: 'netty',
          percentage: 30
        }, {name: 'hibernate', percentage: 40}]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-introduction {
  display: flex;
  justify-content: space-around;
}
</style>
