<template>
  <q-page padding>
    <span class="text-weight-thin">Bem vindo</span>
    <q-card>
      <q-card-section>
        <qrcode-stream @decode="onDecode"></qrcode-stream>
      </q-card-section>
      <q-card-section>
        <span>{{id_arvore || 'Aguardando'}}</span>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      id_arvore: ''
    }
  },
  methods: {
    onDecode (decodedString) {
      console.log(decodedString)
      this.id_arvore = decodedString
      this.$router.push({ name: 'arvore', params: { id: this.id_arvore } })
    }
  }
}
</script>
