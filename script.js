function volume_sphere() {
   
  event.preventDefault(); // Prevent form submission refresh

  const radiusInput = document.getElementById("radius").value;
  const volumeField = document.getElementById("volume");

  const radius = parseFloat(radiusInput);

  // Validate input: must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    volumeField.value = NaN;
    return;
  }

  // Calculate volume of sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display volume rounded to 4 decimal places
  volumeField.value = volume.toFixed(4);
}

// Attach function to form submit
document.getElementById("MyForm").addEventListener("submit", volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
