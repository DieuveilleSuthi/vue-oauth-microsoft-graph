<template>
    <button
      class="base-button"
      :class="{ 'hovered': isHovered, 'focused': isFocused, 'disabled': isDisabled}"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :disabled="isDisabled"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHovered: false,
        isFocused: false,
      };
    },
    props: {
      isDisabled: {
        type: Boolean,
        default: false,
      },
      color: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'warn', 'danger'].includes(value);
      },
    },
  },
};
  </script>
  
  <style scoped>
  /* BaseButton styles */
  .base-button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: green;
    transition: background-color 0.3s, transform 0.1s;
    margin : 10px;
    padding: 10px;
    border-radius: 8px
  }
  
  .base-button.hovered {
    background-color: #78c978; /* Background color on hover */
  }
  
  .base-button.focused {
    transform: scale(1.05); /* Scale effect on focus */
  }
  
  .base-button.disabled {
    background-color: #79dd9e; /* Disabled state background color */
    cursor: not-allowed;
  }

  /* Dynamic color styles */
.base-button.primary {
  background-color: #007bff; /* Primary color */
}

.base-button.warn {
  background-color: #ffc107; /* Warning color */
}

.base-button.danger {
  background-color: #dc3545; /* Danger color */
}
</style>
