<template>
<div class="hero-top-component">
    <div class="hero landing-page-background">
        <img src="/images/icon-svg.svg" alt="hero" class="logo">
        <h1>Lightning fast app creation.</h1>
        <p class="description">Quark is a <strong>general purpose software tool</strong> specifically designed to help you create projects written in HTML, CSS and JavaScript with native desktop app like capabilities.</p>
        <p class="action">
            <router-link to="/guide/intro.html" class="nav-link action-button">Get Started →</router-link>
        </p>
        <!-- <floaters side="left" /> -->
    </div>
</div>
</template>

<script>
import floaters from "./floaters";
export default {
    components: {
        floaters
    }
};
</script>

<style lang="scss" scoped>
.hero {
    text-align: center;

    img {
        margin-top: -20px;
        max-width: 250px;
        position: relative;
        top: -40px;
    }

    h1 {
        margin-top: 0px;
        margin-bottom: 10px !important;
    }

    p {
        margin: 10px 0px !important;
    }

    p.description {
        font-size: 22px;
        max-width: 90%;
        color: var(--text-color--light) !important;
        margin-bottom: 20px !important;
    }

    p.action a {
        border-radius: 3px !important;
        padding: 0.8rem 1.6rem;
        background-color: var(--accent-color);
        color: #ffffff;
        cursor: pointer;
    }
}

@media only screen and (max-width: 600px) {
    img {
        max-width: 200px !important;
    }

    h1 {
        font-size: 36px !important;
    }

    p.description {
        font-size: 14px !important;
    }
}

@media only screen and (max-width: 800px) {
    h1 {
        font-size: 36px !important;
    }
}
</style>
