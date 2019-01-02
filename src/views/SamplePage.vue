<template>
  <section class="sample">
    <v-container fluid class="pa-0">
      <v-layout row wrap>
        <v-flex md6 sm12>
          <div>
            <v-chip>
              <router-link to="/main/Sample/DragAndDrop">DragAndDrop</router-link>
            </v-chip>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <router-view></router-view>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
