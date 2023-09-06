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

// this function will sort an array of objects by region
export const sortDataByRegion = (data) => {
  const sortedData = data.sort((a, b) => {
    if (a.region < b.region) {
      return -1;
    }
    if (a.region > b.region) {
      return 1;
    }
    return 0;
  });

  return sortedData;
}

// this function will sort an array of objects by city
export const sortDataByCity = (data) => {
  const sortedData = data.sort((a, b) => {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });

  return sortedData;
}

// this function will sort an array of objects by country
export const sortDataByCountry = (data) => {
  const sortedData = data.sort((a, b) => {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  });

  return sortedData;
}

// this function will filter an array of objects and return only those with a given region
export const filterDataByRegion = (data, region) => {
  const filteredData = data.filter((entry) => {
    return entry.region?.includes(region)
  });

  return filteredData;
}

// this function will filter an array of objects and return only those with a given country
export const filterDataByCountry = (data, country) => {
  const filteredData = data.filter((entry) => {
    return entry.country?.includes(country)
  });

  return filteredData;
}

// this function will filter an array of objects and return only those with a given city
export const filterDataByCity = (data, city) => {
  const filteredData = data.filter((entry) => {
    return entry.city?.includes(city)
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

// this function will filter an array of objects and return only those with commission that contains "Virtuoso"
export const filterDataByCommissionVirtuoso = (data) => {
  const filteredData = data.filter((entry) => {
    return entry.commission?.includes("Virtuoso");
  });

  return filteredData;
}

// this function will filter an array of objects and return only those with commission that contains "STEP"
export const filterDataByCommissionSTEP = (data) => {
  const filteredData = data.filter((entry) => {
    return entry.commission?.includes("STEP");
  });

  return filteredData;
}

// this functions will filter an array of objects and return only those with special amenity
export const filterDataBySpecialAmenity = (data) => {
  const filteredData = data.filter((entry) => {
    return entry.special_amenity?.length > 0;
  });

  return filteredData;
}

