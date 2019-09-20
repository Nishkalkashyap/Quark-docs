<template>
<table>
    <thead>
        <tr>
            <th>File</th>
            <th>Hash</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(value, key) in shasum">
            <td class="item-name">{{key}}</td>
            <td>{{value}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
import stableShasum from './../../version-assets/stable/__shasum.json';
import insidersShasum from './../../version-assets/insiders/__shasum.json';
export default {
    props: ["channel", "sha"],
    data: function () {
        let sha = this.channel == 'stable' ? stableShasum : insidersShasum;
        if (this.sha) {
            sha = this.sha;
        }
        return {
            shasum: sha,
            isOpen: false
        };
    }
};
</script>

<style lang="scss">
table {
    margin: 0px;
    border-top: 0px;
    box-sizing: border-box;

    margin: 10px 10px;
    width: calc(100% - 20px);

    td.item-name {
        min-width: 200px;
        text-align: center !important;
    }

    th,
    td {
        padding: 5px;
    }
}
</style>
