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
          style="box-shadow: 0px 0px 7px black"
          :fullscreen.sync="fullscreen"
        >
          <q-carousel-slide :name="1" :img-src="url1">
            <div style="color:white">
              <div class="text-h6">{{arvore.nome_popular}}</div>
              <small>{{arvore.nome_cientifico}}</small>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" :img-src="url2" />
          <q-carousel-slide :name="3" :img-src="url3" />
          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
            >
              <q-btn
                push round dense color="white" text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
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
      fullscreen: false,
      arvore: {},
      url1: '',
      url2: '',
      url3: ''
    }
  },
  methods: {
    server (id) {
      let self = this
      console.log(id)
      Firebase.firestore().collection('arvores').where('id', '==', id).get().then(
        query => {
          query.forEach(doc => {
            let dado = doc.data()
            self.arvore = dado
            this.baixarFotos(dado.primeira_foto)
          })
        }
      )
    },
    favoritar () {},
    baixarFotos (idFoto) {
      let self = this
      console.log(idFoto)
      var storage = Firebase.storage()
      var pathReference1 = storage.ref(idFoto + '/arvore1.jpeg')
      pathReference1.getDownloadURL().then(function (url) {
        self.url1 = url
      })
      var pathReference2 = storage.ref(idFoto + '/arvore2.jpeg')
      pathReference2.getDownloadURL().then(function (url) {
        self.url2 = url
      })
      var pathReference3 = storage.ref(idFoto + '/arvore3.jpeg')
      pathReference3.getDownloadURL().then(function (url) {
        self.url3 = url
      })
    }
  },
  beforeMount () {
    this.server(this.id)
  }
}
</script>

<style>
  .q-card{
    background-color:rgba(247, 241, 241, 0.603)
  }
</style>
