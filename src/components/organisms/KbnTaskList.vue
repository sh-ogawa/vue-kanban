<template>
  <div class="task-list">
    <KbnTaskListHeader
      :name="name"
      @add="shown = true"
    />
    <ul class="task-list-items">
      <li
        v-for="item in items"
        :key="item.id"
      >
        <KbnTaskCard
          v-bind="item"
          @remove="handleRemove"
        />
      </li>
    </ul>
    <KbnTaskForm
      v-if="shown"
      :list-id="id"
      @close="shown = false"
    />
  </div>
</template>

<script>
import KbnTaskListHeader from '@/components/molecules/KbnTaskListHeader.vue'
import KbnTaskCard from '@/components/molecules/KbnTaskCard.vue'
import KbnTaskForm from '@/components/molecules/KbnTaskForm.vue'

export default {
  name: 'KbnTaskList',

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskForm
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      shown: false
    }
  },

  methods: {
    handleRemove ({ id, listId }) {
      return this.$store.dispatch('removeTask', { id, listId })
        .catch(err => Promise.reject(err))
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li {
  margin: 8px;
  padding: 4px;
  border: thin solid black;
  border-radius: 0.5em;
}
</style>
