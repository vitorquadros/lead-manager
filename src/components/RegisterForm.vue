<template>
  <div id="register-container">
    <form>
      <div class="input-container">
        <label>Usuário *</label>
        <input type="text" />
      </div>
      <div class="input-container">
        <label>Password *</label>
        <input type="password" />
      </div>
      <div class="input-container">
        <label>Confirmação Password *</label>
        <input type="password" />
      </div>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

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
}
</style>
