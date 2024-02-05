<script>
  import Sheet from "./Sheet.svelte";
  import "../app.css";

  export let data;

  console.log(data.sheetData);
</script>

<Sheet sheetData={data.sheetData} />
