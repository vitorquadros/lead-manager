<template>
  <div id="container">
    <form>
      <div id="container-form">
        <div id="form-info">
          <div class="input-container">
            <label>Nome *</label>
            <input v-model="lead.name" type="text" />
          </div>
          <div class="input-container">
            <label>Telefone *</label>
            <input v-model="lead.tel" type="tel" />
          </div>
          <div class="input-container">
            <label>Email *</label>
            <input v-model="lead.email" type="email" />
          </div>
        </div>

        <div id="form-oportunity">
          <label>Oportunidades *</label>
          <table>
            <tr>
              <th><input type="checkbox" v-model="selectAll" /></th>
              <th></th>
            </tr>

            <tr v-for="oportunity in opportunities" :key="oportunity">
              <td>
                <input type="checkbox" v-model="selected" :value="oportunity" />
              </td>
              <td colspan="4">{{ oportunity }}</td>
            </tr>
          </table>
        </div>
      </div>

      <button @click="handleSubmit">Salvar</button>
    </form>

    <div class="error">
      <Error v-if="errors.length" :errors="errors" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Error from '@/components/Error.vue';

export default defineComponent({
  components: { Error },

  data() {
    return {
      lead: {
        id: this.ID(),
        name: '',
        tel: '',
        email: '',
      },
      opportunities: ['RPM', 'Produto Digital', 'Analytics', 'BPM'],
      errors: [] as string[],
      selected: [] as string[],
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

  computed: {
    selectAll: {
      get() {
        return (<any>this).opportunities
          ? (<any>this).selected.length == (<any>this).opportunities.length
          : false;
      },
      set(value) {
        let selected = [] as string[];

        if (value) {
          this.opportunities.forEach((oportunity) => {
            selected.push(oportunity);
          });
        }

        this.selected = selected;
      },
    },
  },

  methods: {
    isValid(newLead, leads) {
      this.errors = [];

      if (newLead.name == '' || newLead.tel == '' || newLead.email == '') {
        this.errors.push('Há campos não preenchidos');
      }

      if (newLead.opportunities.length < 1) {
        this.errors.push('O lead deve ter pelo menos uma oportunidade');
      }

      const leadExists = leads.find(({ name }) => name == this.lead.name);

      if (leadExists) this.errors.push('Já existe um lead com o nome inserido');

      if (this.errors.length > 0) {
        return false;
      } else return true;
    },

    handleSubmit() {
      const newLead = {
        ...this.lead,
        opportunities: this.selected,
      };

      const leads = JSON.parse(
        localStorage.getItem('Cliente em Potencial') || '[]'
      );

      if (!this.isValid(newLead, leads)) return false;

      leads.push(newLead);
      localStorage.setItem('Cliente em Potencial', JSON.stringify(leads));

      this.$router.push('/');

      this.Toast.fire({
        icon: 'success',
        title: 'Lead criado com sucesso!',
      });
    },

    ID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
  },
});
</script>

<style scoped>
* {
  font-size: 1.4rem;
}

#container {
  min-height: 300px;
}

form {
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem;
}

#container-form {
  display: flex;
  justify-content: space-between;
}

#form-info {
  width: 40%;
}

#form-oportunity {
  width: 40%;
}

button {
  width: 40%;
  align-self: flex-end;
  background-color: #2196f3;
  color: white;
  border: none;
  font-weight: bold;
  padding: 12px 0;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  opacity: 0.8;
}

/* LEAD INFO */

.input-container {
  width: 100%;
  display: flex;
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

/* OPORTUNITY */

table,
tr,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  margin-top: 5px;
}

td {
  text-align: center;
}

table {
  width: 100%;
}

tr:first-child {
  background-color: gray;
}

input[type='checkbox'] {
  cursor: pointer;
}

tr:nth-child(2),
tr:nth-child(4) {
  background-color: lightgray;
}

.input-container {
  width: 100%;
  display: flex;
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

.error {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
