<template>
  <div id="register-container">
    <form>
      <div class="input-container">
        <label>Usuário *</label>
        <input v-model="user.username" type="text" />
      </div>
      <div class="input-container">
        <label>Password *</label>
        <input v-model="user.password" type="password" />
      </div>
      <div class="input-container">
        <label>Confirmação Password *</label>
        <input v-model="user.passwordConfirm" type="password" />
      </div>

      <button @click="handleSubmit">Registrar</button>
    </form>

    <Error class="error" v-if="errors.length" :errors="errors" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Error from '@/components/Error.vue';

export default defineComponent({
  components: { Error },

  data() {
    return {
      user: {
        id: this.ID(),
        username: '',
        password: '',
        passwordConfirm: '',
      },

      errors: [] as string[],

      Toast: (<any>this).$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', (<any>this).$swal.stopTimer);
          toast.addEventListener('mouseleave', (<any>this).$swal.resumeTimer);
        },
      }),
    };
  },

  methods: {
    handleSubmit() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.find(
        ({ username }) => username == this.user.username
      );

      this.errors = [];
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

      if (
        this.user.username == '' ||
        this.user.password == '' ||
        this.user.passwordConfirm == ''
      ) {
        this.errors.push('Há campos não preenchidos');
      }

      if (this.user.password != this.user.passwordConfirm) {
        this.errors.push('As senhas não coincidem');
      }

      if (userExists) this.errors.push('O usuário ja existe');

      if (!this.user.password.match(regex) && this.user.password != '') {
        this.errors.push(
          'A senha deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, um caracter numérico e um caracter alfanumérico'
        );
      }

      if (this.errors.length > 0) {
        return false;
      }

      const newUser = {
        id: this.user.id,
        username: this.user.username,
        password: this.user.password,
      };

      users.push(newUser);

      localStorage.setItem('users', JSON.stringify(users));

      this.$router.push('/');

      this.Toast.fire({
        icon: 'success',
        title: 'Novo usuário cadastrado com sucesso!',
      });
    },

    ID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
  },
});
</script>

<style scoped>
#register-container {
  background-color: white;
  display: flex;
  flex-direction: column;
}

#register-container form {
  margin: 2rem 4rem;
}

.input-container {
  display: flex;
  width: 30rem;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-container label {
  margin-left: 5px;
  margin-bottom: 5px;
}

.input-container input {
  height: 25px;
  padding-left: 5px;
  border: 1px solid black;
}

#register-container button {
  background-color: white;
  border: 1px solid black;
  width: 100%;
  padding: 12px 0;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

#register-container button:hover {
  background-color: lightgray;
}

.error {
  margin-bottom: 1rem;
}
</style>
