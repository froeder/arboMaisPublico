<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="fundo">
        <q-btn
          flat
          dense
          round
          @click="$router.go(-1)"
          aria-label="Voltar"
        >
          <q-icon name="arrow_back" />
        </q-btn>
        <q-toolbar-title>
          Arvore
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container style="background-color:#d8d3be">
      <router-view />
    </q-page-container>
    <q-footer class="fundo" elevated>
        Desenvolvido por Jhonatan Froeder
    </q-footer>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
  .fundo{
     background-image: linear-gradient(to right, #C0CA33, #9ea71d);
  }
</style>
