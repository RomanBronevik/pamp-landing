<template>
    <b-tabs position="is-centered" class="tabs">
        <b-tab-item label="premium care"></b-tab-item>
        <b-tab-item label="baby-dry"></b-tab-item>
        <b-tab-item label="sleep&play"></b-tab-item>
    </b-tabs>
</template>

<script>
export default {
  name: 'tabs',
  mounted () {
    console.log('tabs component')
  }
}
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/all";
    @import "~bulma/sass/components/tabs";
    .b-tabs {
        z-index: 2;
        width: 100%;
        justify-content: center;
    }

    .tabs {
        margin: 0!important;
        & ul {
            border: none;
            margin: 0;
        }
        & li:nth-of-type(1) {
            background-color: saddlebrown;
        }
        & li:nth-of-type(2) {
            background-color: #35a4aa;
        }
        & li:nth-of-type(3) {
            background-color: #f67b00;
        }
        & li {
            margin-right: 12px;
            border-top-width: 1px;
            border-right-width: 1px;
            border-left-width: 1px;
            border-left-style: solid;
            border-right-style: solid;
            border-top-style: solid;
            border-color: #dddddd;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            cursor: pointer;
            transition: all .3s ease;
            &.is-active {
                background-color: #fff;
                & a {
                    border-bottom: none;
                    color: saddlebrown;
                }
            }
        }
        & li a {
            transition: all .3s ease;
            color: #fff;
            font-size: 27px;
            font-weight: 700;
        }
        & a:hover {
            color: #fff;
        }
    }
</style>
