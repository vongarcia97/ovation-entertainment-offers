<script>
  import Sheet from './Sheet.svelte';
  import '../app.css';

  export let data;



  // console.log(`Here's the data from the server: ${JSON.stringify(data)}`)
</script>

<Sheet sheetData={data.sheetData}/>