<template>
  <q-page padding>
    <div class="text-weight-thin">Detalhes da árvore</div>
    <q-carousel
      swipeable
      animated
      arrows
      navigation
      v-model="slide"
      infinite
      style="box-shadow: 0px 0px 7px black ; border-radius:10px"
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
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn flat :text-color="cor" :icon="'star'" @click="console.log('add favorito')" />
        </q-carousel-control>
      </template>
    </q-carousel>
    <div class="pt1 text-center bold fnt20">Dados básicos:</div>
    <q-card style="background-color:#fff ; border-radius:10px">
      <q-card-section class="q-pa-md fnt15">
        <div class="column">
          <div>
            <strong>Nome Popular:</strong>
            <div class="text-weight-light">{{arvore.nome_popular}}</div>
          </div>
          <div>
            <strong>Nome científico:</strong>
            <div class="text-weight-light">
              <i>{{arvore.nome_cientifico}}</i>
            </div>
          </div>
          <div>
            <strong>
              Espécie:
              <div class="text-weight-light">{{arvore.especie}}</div>
            </strong>
          </div>
          <div>
            <strong>
              Gênero:
              <div class="text-weight-light">{{arvore.genero}}</div>
            </strong>
          </div>
          <div>
            <strong>
              Familia:
              <div class="text-weight-light">{{arvore.familia}}</div>
            </strong>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="pt1 text-center mt20 bold fnt20">Biologia:</div>
    <q-card style="background-color:#fff ; border-radius:10px">
      <q-card-section class="q-pa-md fnt15">
        <div class="column">
          <div>
            <strong>Estado Geral:</strong>
            <div class="text-weight-light">{{arvore.estado_geral}}</div>
          </div>
          <div>
            <strong>Fitossanidade:</strong>
            <div class="text-weight-light">
              <i>{{arvore.fito}}</i>
            </div>
          </div>
          <div>
            <strong>
              Injúrias:
              <div class="text-weight-light">{{arvore.injurias}}</div>
            </strong>
          </div>
          <div>
            <strong>
              Ecologia:
              <div class="text-weight-light">{{arvore.ecologia}}</div>
            </strong>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="pt1 text-center mt20 bold fnt20">Localização e entornos:</div>
    <q-card style="background-color:#fff ; border-radius:10px">
      <q-card-section class="q-pa-md fnt15">
        <div class="column">
          <div>
            <strong>Estado Geral:</strong>
            <div class="text-weight-light">{{arvore.estado_geral}}</div>
          </div>
          <div>
            <strong>Fitossanidade:</strong>
            <div class="text-weight-light">
              <i>{{arvore.fito}}</i>
            </div>
          </div>
          <div>
            <strong>
              Injúrias:
              <div class="text-weight-light">{{arvore.injurias}}</div>
            </strong>
          </div>
          <div>
            <strong>
              Ecologia:
              <div class="text-weight-light">{{arvore.ecologia}}</div>
            </strong>
          </div>
          <div>
            <strong>
              Familia:
              <div class="text-weight-light">{{arvore.familia}}</div>
            </strong>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Firebase from "firebase";

export default {
  data() {
    return {
      id: this.$route.params.id,
      slide: 1,
      fullscreen: false,
      cor: "white",
      arvore: {},
      url1: "",
      url2: "",
      url3: ""
    };
  },
  methods: {
    server(id) {
      let self = this;
      console.log(id);
      Firebase.firestore()
        .collection("arvores")
        .where("id", "==", id)
        .get()
        .then(query => {
          query.forEach(doc => {
            let dado = doc.data();
            self.arvore = dado;
            this.baixarFotos(dado.primeira_foto);
          });
        });
    },
    favoritar() {},
    baixarFotos(idFoto) {
      let self = this;
      console.log(idFoto);
      var storage = Firebase.storage();
      var pathReference1 = storage.ref(idFoto + "/arvore1.jpeg");
      pathReference1.getDownloadURL().then(function(url) {
        self.url1 = url;
      });
      var pathReference2 = storage.ref(idFoto + "/arvore2.jpeg");
      pathReference2.getDownloadURL().then(function(url) {
        self.url2 = url;
      });
      var pathReference3 = storage.ref(idFoto + "/arvore3.jpeg");
      pathReference3.getDownloadURL().then(function(url) {
        self.url3 = url;
      });
    }
  },
  beforeMount() {
    this.server(this.id);
  }
};
</script>

<style>
.q-card {
  background-color: rgba(247, 241, 241, 0.603);
}
</style>
