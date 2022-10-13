<template>
     <tr>
            <td>{{date}}</td>
            <td>{{name}}</td>
            <td>{{amount}}</td>
            <td>{{distance}}</td>
        </tr>
</template>

<script>
    export default {
        name: "TableRow",
        props: ["name", "amount", "date", "distance"]
    }
</script>