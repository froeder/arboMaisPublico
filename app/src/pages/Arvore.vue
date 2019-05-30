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
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
            <div>
              <div class="text-h2">{{arvore[0].nome_popular}}</div>
              <div class="text-subtitle1">{{arvore[0].nome_cientifico}}</div>
            </div>
          </q-carousel-slide>
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
        <q-card v-for="arvore in arvore" v-bind:key="arvore.id" style="margin-top:1em">
          <q-card-section>
            {{arvore.nome_popular}}
          </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'

export default {
  data () {
    return {
      id: this.$route.params.id,
      slide: 1,
      arvore: []
    }
  },
  methods: {
    server (id) {
      console.log(id)
      Firebase.firestore().collection('arvores').where('id', '==', id).get().then(
        query => {
          query.forEach(doc => {
            this.arvore.push(doc.data())
          })
        }
      )
    }
  },
  mounted () {
    this.server(this.id)
    console.log(this.arvore)
  }
}
</script>

<style>
  .q-card{
    background-color:rgba(247, 241, 241, 0.603)
  }
</style>
