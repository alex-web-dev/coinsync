import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useMessages = defineStore('messages', () => {
  const messages = ref([]);

  function getAll() {
    return messages.value;
  }

  function add(data) {
    const id = getMaxId();
    const delay = data.delay || 5000;

    messages.value.push({
      id,
      type: data.type,
      text: data.text
    });

    setTimeout(() => remove(id), delay);
  }

  function getMaxId() {
    const id = messages.value.reduce((accumulator, message) => {
      return accumulator < message.id ? message.id : accumulator;
    }, 0);

    return id + 1;
  }

  function remove(id) {
    messages.value = messages.value.filter((message) => message.id !== id);
  }

  return { getAll, add, remove };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMessages, import.meta.hot));
}
