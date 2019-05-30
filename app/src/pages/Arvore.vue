<template>
    <q-page padding>
        <span class="text-weight-thin">Detalhes da árvore</span>
        <q-carousel
          swipeable
          animated
          arrows
          navigation
          v-model="slide"
          infinite
          style="box-shadow: 0px 0px 8px grey"
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
            >
            </q-carousel-control>
          </template>
        </q-carousel>
        <q-card style="margin-top:1em">
          <q-card-section>
            <q-btn @click="server()">Server</q-btn>
          </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params,
      slide: 1,
      fullscreen: false
    }
  },
  methods: {
    server () {
      axios.get('http://localhost:3000')
        .then(function (response) {
          console.log(response)
        })
    }
  },
  mounted () {
  }
}
</script>

<style>
  .q-card{
    background-color:rgba(247, 241, 241, 0.603)
  }
</style>
