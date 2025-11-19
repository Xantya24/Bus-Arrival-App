//make a function for bus timing
async function getBusTiming() {
  const inputBox = document.getElementById('busStopId');
  const busStopId = inputBox.value; //18141

  // get the link to sync it up
  const link = 'https://sg-bus-arrivals.vercel.app/?id=' + busStopId;
  const response = await fetch(link);
  const data = await response.json();

  //get the data of the buses
  const buses = data.services;

  let busHtml = '';
  for (bus of buses) {
    const div = `<th>Bus No: ${bus.bus_no}</th>
                 <th>Operator: ${bus.operator}</th>
                 <th>Next Arrival: ${bus.next_bus_mins} minutes</th>`;
    busHtml += div;
    console.log(busHtml);
  }
  const resultDiv = document.getElementById('arrivalInfo');
  resultDiv.innerHTML = busHtml;
}
