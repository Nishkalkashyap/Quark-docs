<template>
<div class="hero-features-component">
    <div>

        <h1>Everything you would expect.</h1>
        <div class="features-container">
            <div class="feature" v-for="feature in features">
                <h3>{{feature.heading}}</h3>
                <p>{{feature.text}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            features: [{
                    heading: 'Keybindings and Quick Actions',
                    text: `Use Keybindings and Quick Actions to execute commonly used actions more quickly.`
                },
                {
                    heading: 'Configuration UI',
                    text: `We show a UI for configuration files so you don't have to look up how the configuration is structured.`
                },
                {
                    heading: 'Monaco Editor',
                    text: `We use the same editor as VSCode, which gives us "Go to Definition", "Replace Occurences" and more!`
                },
                {
                    heading: 'Error Overlay',
                    text: `We show a user friendly error overlay for every error, sometimes with suggestions on how to solve it.`
                },
                {
                    heading: 'TypeScript',
                    text: 'Thanks to Monaco we show TypeScript autocompletions and diagnostics for TS sandboxes.'
                },
                {
                    heading: 'TypeScript',
                    text: 'Thanks to Monaco we show TypeScript autocompletions and diagnostics for TS sandboxes.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.features-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 860px;
    padding: 20px;
    // justify-content: space-between;
    justify-content: center;

    .feature {
        min-width: 360px;
        width: calc(50% - 80px);
        padding: 10px 20px;
        margin: 10px 20px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    }
}
</style>
