<template>
  <div>
    <h2>Card</h2>
    <div class="card" @click="modal_block">
      <img src="../assets/img_avatar.png" alt="Avatar" style="width:100%">
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>

    <div id="id01" class="modal" ref="modal">
      <span
        onclick="document.getElementById('id01').style.display='none'"
        class="close"
        title="Close Modal"
      >&times;</span>
      <form class="modal-content" action="/action_page.php">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required>
          
          <label for="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" required>
          
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
          
          <label>
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a
              href="#"
              style="color:dodgerblue"
            >Terms & Privacy</a>.
          </p>

          <div class="clearfix">
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="cancelbtn"
            >Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modal_block() {
      this.$refs.modal.style.display = "block";
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(94, 94, 94, 0.7);
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
.modal-content:hover {
  box-shadow: 0 4px 8px 0 red;
}
</style>
