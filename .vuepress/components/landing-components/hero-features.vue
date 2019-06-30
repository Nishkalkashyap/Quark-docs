<template>
<div class="hero-features-component">
    <div style="text-align:center;margin-top:150px">
        <h1>Everything you would expect</h1>
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
h1 {
    padding: 15px 20px;
    display: inline-block;
    border-radius: 4px;
    font-size: 36px !important;
    text-align: center;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    max-width: calc(100% - 100px);
    box-sizing: border-box;
}

@media only screen and (max-width: 600px) {
    h1 {
        font-size: 28px !important;
    }
}

.features-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 860px;
    padding: 20px;
    justify-content: center;
    text-align: initial;
    margin-bottom: 100px;

    .feature {
        min-width: 340px;
        width: calc(50% - 80px);
        padding: 10px 20px;
        margin: 10px 20px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);

        h3 {
            padding-top: 0px !important;
        }
    }
}
</style>
