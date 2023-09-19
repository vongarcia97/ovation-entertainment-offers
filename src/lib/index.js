// place files you want to import through the `$lib` alias in this folder.

export const shapeSheetData = (data) => {

  const output = [];
  const tableCols = data.table.cols;
  const tableRows = data.table.rows;

  // console.log('Here is the table data: ', tableCols)

  for (let i = 0; i < tableCols.length; i++) {

    const rowData = tableCols[i].label.split("DATA ");
    if (i === 0) {
      for (let k = 1; k < rowData.length; k++) {
        output.push({ region: rowData[k] });
      }
    } else {
      // on subsequent loops add the data to the object in the output array
      if (i === 1) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], country: rowData[k] };
        }
      } else if (i === 2) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], city: rowData[k] };
        }
      } else if (i === 3) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], hotel: rowData[k] };
        }
      } else if (i === 4) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], commission: rowData[k] };
        }
      } else if (i === 5) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], special_amenity: rowData[k] };
        }
      } else if (i === 6) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], booking_instructions: rowData[k] };
        }
      } else if (i === 7) {
        for (let k = 1; k < rowData.length; k++) {
          output[ k - 1] = { ...output[k-1], validity: rowData[k] };
        }
      }
    }
  }

  tableRows.forEach((entry) => {
    const entryData = {};
    console.log('Here is the entry: ', entry)
    entry.c.forEach((cell, index) => {
      if (index === 0) {
        entryData.location = cell?.v ? cell.v : null;
      } else if ( index === 1) {
        entryData.hotel = cell?.v ? cell.v : null;
      } else if ( index === 2) {
        entryData.overview = cell?.v ? cell.v : null;
      } else if ( index === 3) {
        entryData.dates = cell?.v ? cell.v : null;
      } else if ( index === 4) {
        entryData.instructions = cell?.v ? cell.v : null;
      } else if ( index === 5) {
        entryData.information = cell?.v ? cell.v : null;
      }
    });

    output.push(entryData);
  })

  console.log('Here is the output array: ', output)

  output.shift();

  return output;
};


export const filterDataByLocation = (data, location) => {
  const filteredData = data.filter((entry) => {
    return entry.location?.includes(location)
  });

  return filteredData;
}

// this function will filter ana rray of objects and return only thsoe with a given hotel
export const filterDataByHotel = (data, hotel) => {
  const filteredData = data.filter((entry) => {
    return entry.hotel?.includes(hotel)
  });

  return filteredData;
}