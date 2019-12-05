<template>

      <div class="card text-center">
        <div class="card-header text-left">
          {{info.title }}
        </div>
        <div class="card-body">
          <img @click="changeImage"  class="card-img-top" :src="info.url" alt="Maznusmo s unsplasha i bilo bi lijepo da napisemo cija je slika">
        </div>
        <div class="card-footer text-left">
          {{info.time}}
        </div>
      </div>

</template>
<script>
export default {
  props: ["info"],
  methods:{
    changeImage(){
      fetch("https://source.unsplash.com/1600x900/?nature,water").then(response => {
        this.info.url= response.url
        this.info.time="Done."
      })
    }
  }
  }

</script>