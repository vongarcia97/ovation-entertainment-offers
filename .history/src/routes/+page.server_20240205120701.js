// import { PRIVATE_SHEET_DATA_URL } from "$env/static/private";
import { shapeSheetData } from "$lib";
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {

  const getData = async () => {
    try { 
      const response = await fetch("https://docs.google.com/spreadsheets/d/1ugN5_d-iyvchA_lh_w0eB_odqFgMrndHTQxck80nXn0/gviz/tq?");
      const dataText = await response.text();
      console.log(dataText)

      const data = JSON.parse(dataText.substr(47).slice(0, -2));

      console.log(data)

      return data;
    } catch(err){
      console.error(`Error fetching influencers data: ${err}`);
      throw error(500, { err: err, message: 'Error fetching influencers data' });
    }
  };  

  const data = await getData();

  const sheetData  = await shapeSheetData(data);

  console.log(`Here's the sheet data: ${JSON.stringify(sheetData)}`)


  return {
    sheetData: sheetData
  };
}