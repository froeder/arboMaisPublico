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
            <div style="color:white">
              <div class="text-h6">{{arvore.nome_popular}}</div>
              <small>{{arvore.nome_cientifico}}</small>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
            >
              <q-btn
                round dense text-color="yellow"
                icon="star"
                @click="favoritar()"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <q-card style="margin-top:1em">
          <q-card-section>
            <div>
              <strong>Nome Popular: </strong> <span class="text-weight-light">{{arvore.nome_popular}} </span>
            </div>
            <div>
              <strong>Nome científico: </strong><span class="text-weight-light"><i>{{arvore.nome_cientifico}}</i></span>
            </div>
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
      arvore: {}
    }
  },
  methods: {
    server (id) {
      console.log(id)
      Firebase.firestore().collection('arvores').where('id', '==', id).get().then(
        query => {
          query.forEach(doc => {
            this.arvore = {
              nome_popular: doc.data().nome_popular,
              nome_cientifico: doc.data().nome_cientifico
            }
          })
        }
      )
    },
    favoritar () {},
    baixarFotos () {
      console.log(this.arvore)
    }
  },
  mounted () {
    this.server(this.id)
    this.baixarFotos()
  }
}
</script>

<style>
  .q-card{
    background-color:rgba(247, 241, 241, 0.603)
  }
</style>
