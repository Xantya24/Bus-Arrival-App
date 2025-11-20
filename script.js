async function getBusTiming() {
  const inputBox = document.getElementById('busStopId');
  const busStopId = inputBox.value; //18141

  const link = 'https://sg-bus-arrivals.vercel.app/?id=' + busStopId;
  const response = await fetch(link);
  const data = await response.json();

  const buses = data.services;

  let busHTML = document.getElementById('arrival').tBodies[0];
  busHTML.innerHTML = '';

  for (bus of buses) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${bus.bus_no}</td>
    <td>${bus.operator}</td>
    <td>${bus.next_bus_mins} minutes</td>`;

    busHTML.appendChild(row);
  }
  const resultDiv = document.getElementById('arrivalInfo');
  resultDiv.innerHTML = busHtml;
}
