<template>
<div class="login-container">
  <div class="signin">
    <h2>Sign in</h2>
    <form>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Email or phone"
        v-model="usuario.nombre"
        autocomplete="off"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        autocomplete="off"
        v-model="usuario.password"
      />
      
        <button class="log" @click="login">Sign in</button>
      <!-- <input class="log" type="submit" @click="login" value="Sign in" /> -->
    </form>
  </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            usuario: {nombre: "", password: ""},
        }
    },
    methods: {
        login() {
            if(this.usuario.nombre==='admin' && this.usuario.password==='admin'){
                this.$router.push("/admin");
            }else{
                alert('Credenciales incorrectas')
            }
        },
    },
};

</script>

<style scoped>

.login-container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c;
	background: linear-gradient(rgba(0, 0, 0, .50) 0% , rgba(0,0,0, .50) 100%), url(../assets/DO-es-20220329-popsignuptwoweeks-perspective_alpha_website_small.jpg);
}


.signin{
 background-color: #000000b4;
 border-radius: 5px;
 color: #fff;
 padding: 70px 60px 150px ; 
 margin: 40px auto 100px;
 width: 450px ;



}

.signin h2{
 margin: 0 0 25px;
 font-size: 30px;


}

.signin input, button{
 display: block;
 color: #fff;
 width: 100%;
 height: 50px;
border-radius: 5px;
border: none;

}
.signin input[type="text"],
.signin input[type="password"]
{

background-color: #353535;
font-size: 15px;
 outline:none ;
 margin-bottom: 20px;
 padding: 0 20px;
}

.signin input[type="text"]::-webkit-input-placeholder,
.signin input[type="password"]::-webkit-input-placeholder {

	color: #949494;
	font-size: 16px;

}
.signin .log
{
background-color: red;
font-size: 16px;
margin-bottom: 40px;
cursor: pointer;


}
</style>