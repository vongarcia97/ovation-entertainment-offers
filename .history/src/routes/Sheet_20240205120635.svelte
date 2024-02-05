<script>
  export let sheetData;
  import { filterDataByHotel, filterDataByLocation } from "$lib";

  let query;
  let queryFilter;

  let table;

  // $: console.log(`changed queryFilter to ${queryFilter}`)
  // $: console.log(`changed query to ${query}`)

  $: if (queryFilter === "location" && query) {
    table = filterDataByLocation(sheetData, formatInput(query));
    // console.log(`filtered by city: ${table}`)
  } else if (queryFilter === "hotel" && query) {
    table = filterDataByHotel(sheetData, formatInput(query));
  } else {
    table = sheetData;
  }

  const formatInput = (input) => {
    if (input) {
      // console.log(`input: ${input}`)
      return input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1) /* .toLowerCase() */;
      });
    }
  };
</script>

<div class="bg-white">
  <div class="input-group">
    <select class="select select-bordered" bind:value={queryFilter}>
      <option value="location">Location</option>
      <option value="hotel">Hotel</option>
    </select>
    <input
      type="text"
      placeholder="Search…"
      class="input input-bordered"
      bind:value={query}
    />
    <button class="btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        /></svg
      >
    </button>
  </div>
</div>

<div>
  <table class="table-auto">
    <thead>
      <tr class="text-center">
        <th class="bg-teal-400 text-lg text-white">Location</th>
        <th class="bg-teal-400 text-lg text-white px-4">Hotel</th>
        <th class="bg-teal-400 text-lg text-white">Overview</th>
        <th class="bg-teal-400 text-lg text-white">Dates</th>
        <th class="bg-teal-400 text-lg text-white">How to book</th>
      </tr>
    </thead>
    <tbody>
      {#each table ? table : sheetData as row, i}
        <tr class="text-black text-sm text-center">
          <td class={i % 2 ? "bg-stone-300 p-2" : "bg-stone-100 p-2"}
            >{row.location ? row.location : ""}</td
          >
          <td class={i % 2 ? "bg-stone-300 p-2" : "bg-stone-100 p-2"}
            >{row.hotel ? row.hotel : ""}</td
          >
          <td class={i % 2 ? "bg-stone-300 p-10" : "bg-stone-100 p-10"}
            >{row.overview ? row.overview : ""}</td
          >
          <td class={i % 2 ? "bg-stone-300" : "bg-stone-100"}
            >{row.dates ? row.dates : ""}</td
          >
          <td class={i % 2 ? "bg-stone-300" : "bg-stone-100"}>
            <p>{row.instructions}</p>
            <a
              href={row.information}
              target="_blank"
              class="btn btn-outline btn-info mt-2">MORE INFO</a
            >
          </td>
        </tr>
      {/each}
      {#if table && table.length === 0}
        <div class="justify-center">
          <strong class="text-xl">NO RESULTS FOUND</strong>
        </div>
      {/if}
    </tbody>
    <tfoot>
      <tr>
        <th class="bg-teal-400 text-lg text-white">Location</th>
        <th class="bg-teal-400 text-lg text-white">Hotel</th>
        <th class="bg-teal-400 text-lg text-white">Overview</th>
        <th class="bg-teal-400 text-lg text-white">Dates</th>
        <th class="bg-teal-400 text-lg text-white">How to book</th>
      </tr>
    </tfoot>
  </table>
</div>
