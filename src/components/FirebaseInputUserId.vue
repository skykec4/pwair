<template>
  <div class="firebaseTest">
    <h1>inputData</h1>
    <v-form v-model="valid">
      <v-container>
        <p>
          <!-- <label :class="InputUserId" for="userId">userId :</label>
          <input class="input-data" v-model="userId" type="text">-->
          <v-flex xs12 sm6 md3>
            <v-text-field :rules="userIdRules" v-model="userId" label="userId" :readonly="checkId"></v-text-field>
          </v-flex>
          <v-btn color="info" @click="IdCheck">ID 중복체크</v-btn>
        </p>
        <p>
          <!-- <label :class="InputName" for="name">name</label>
          <input class="input-data" v-model="name" type="text">-->
          <v-flex xs12 sm6 md3>
            <v-text-field :rules="nameIdRules" v-model="name" label="name"></v-text-field>
          </v-flex>
        </p>

        <p>
          <!-- <label :class="InputEmail" for="email">email</label>
          <input class="input-data" v-model="email" type="text">-->
          <v-flex xs12 sm6 md3>
            <v-text-field :rules="emailRules" v-model="email" label="email"></v-text-field>
          </v-flex>
        </p>
      </v-container>
    </v-form>
    <div>
      <v-btn color="info" @click="writeUserData">input</v-btn>
    </div>
  </div>
</template>

<script>
var database = firebase.database();

export default {
  data() {
    return {
      valid: false,
      checkId: false,
      userId: "",
      name: "",
      email: "",
      red: "red",
      green: "green",
      userIdRules: [v => !!v || "userId is required"],
      nameIdRules: [v => !!v || "name is required"],
      emailRules: [v => !!v || "email is required"]
    };
  },
  methods: {
    writeUserData() {
      if (!this.checkId) {
        alert("id중복체크를 하세요!");
        return;
      }
      if (this.valid) {
        database.ref("users/" + this.userId).set({
          id: this.userId,
          username: this.name,
          email: this.email
        });
        this.dataClear();
      } else {
        alert("필수 항목을 입력하세요");
      }
    },
    IdCheck() {
      if (this.userId.length < 4) {
        alert("아이디를 4자 이상 입력하세요.");
        return;
      }
      let username = "";

      database
        .ref("/users/" + this.userId)
        .once("value")
        .then(snapshot => {
          username = (snapshot.val() && snapshot.val().username) || "Anonymous";
          console.log("중복확인 : ", username);

          if (username == "Anonymous") {
            alert("사용가능한 ID입니다.");
            this.checkId = true;
          } else {
            alert("사용중인 ID입니다.");
          }
        })
        .catch(err => console.log("err", err));
    },
    dataClear() {
      this.userId = "";
      this.name = "";
      this.email = "";
    }
  },
  computed: {}
};
</script>

<style scoped>
.input-data {
  border: solid 2px black;
}
</style>
