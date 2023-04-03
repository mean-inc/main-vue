<template>
  <div class="modal_window">
    <div class="modalAll">
      <div class="modal_header">
        <h5>Iphone</h5>
        <i @click="closeModal" style="cursor: pointer" class="material-icons"
          >close</i
        >
      </div>
      <div class="modal_body">
        <slot></slot>
      </div>
      <div class="modal_footer">
        <button>В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopModal",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/modal_style.scss";
</style>
