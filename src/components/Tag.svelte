

<div>
    <slot/>
</div>

<style>
    div {
        margin: 2% 1% 0 0;
        padding: 2px 10px;
        background-color: rgb(243, 243, 243);
        color: black; /* #3e606e; */
        display: inline-block;
        height: min-content;
        border-radius: 45px;
        font-size: medium;
    }
    /* div {
        color: #3a7891;
        font-weight: bold;
        background-color: var(--blue);
        width: fit-content;
        display: inline;
        height: min-content;
        border-radius: 45px;
        font-size: medium;
        padding: 4px;
        margin: 40px;
    } */

    div::before {
        content: "#";
    }
</style>