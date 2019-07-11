<template>
<div class="message-component">
    <div class="container" v-if="!this.isDismissed">
        <span>
            Note: This project is currently under active development and things may not work as expected. 🤯
        </span>
        <div @click="dismiss()" class="button">Dismiss</div>
    </div>
</div>
</template>

<script>
export default {
    data: () => {
        return {
            isDismissed: false
        }
    },
    methods: {
        dismiss() {
            this.isDismissed = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.container {

    // $bgColor: var(--accent-color);
    $bgColor: var(--text-color--dark);
    color: #ffffff;
    background: linear-gradient(to right, #fec042 0%,#ff7246 100%);

    border-left: solid 3px $bgColor;
    border-right: solid 3px $bgColor;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;
    font-weight: 500;

    box-sizing: border-box;
    width: 100%;
    min-height: 30px;
    text-align: center;
    position: fixed;
    top: 56.7px;
    left: 0px;
    z-index: 11;

    span {
        flex-grow: 1;
        margin: 0px 20px;
        padding: 3px 0px;
    }

    span,
    .button {
        font-family: var(--heading-font-family) !important;
    }

    .button {
        // position: absolute;
        // right: 0px;
        margin-right: 20px;

        background-color: $bgColor;
        padding: 3px 10px;
        cursor: pointer;
        border-radius: 3px;
    }
}
</style>
