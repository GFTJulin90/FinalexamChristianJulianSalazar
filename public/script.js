document.getElementById('package-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const recipient = document.getElementById('recipient').value.trim();
    const packageId = document.getElementById('package-id').value.trim();
    const address = document.getElementById('address').value.trim();
    const weight = document.getElementById('weight').value.trim();
    
    const errors = validateInputs(recipient, packageId, address, weight);
    if (errors.length > 0) {
        showErrors(errors);
        return;
      }
    
      clearErrors();
      showSuccessMessage("Package added successfully!");
    
      const packageData = {
        recipient,
        packageId: parseInt(packageId),
        address,
        weight: parseFloat(weight),
        trackingCode: generateTrackingCode(parseInt(packageId), parseFloat(weight))
      };
    
      packages.push(packageData);
      sortPackages();
      displayPackages();
      this.reset();
    });
    let packages = [];

function validateInputs(recipient, packageId, address, weight) {
  let errors = [];
  if (!/^[a-zA-Z\s]+$/.test(recipient)) errors.push("Error: Invalid Recipient Name.");
  if (!/^\d+$/.test(packageId)) errors.push("Error: Invalid Package ID. Please enter numeric values only.");
  if (!address || /\d/.test(address)) errors.push("Error: Invalid Address.");
  if (isNaN(weight) || weight <= 0) errors.push("Error: Weight must be a positive numeric number.");
  return errors;
}

function showErrors(errors) {
  document.getElementById('error-messages').innerHTML = errors.join('<br>');
  clearSuccessMessage();
}

function clearErrors() {
  document.getElementById('error-messages').innerHTML = '';
}

function showSuccessMessage(message) {
  document.getElementById('success-message').innerText = message;
}

function clearSuccessMessage() {
  document.getElementById('success-message').innerText = '';
}

function sortPackages() {
  packages.sort((a, b) => a.weight - b.weight);
}

function displayPackages() {
  const table = document.getElementById('package-table-body');
  table.innerHTML = '';
  packages.forEach(pkg => {
    const row = `
      <tr>
        <td>${pkg.recipient}</td>
        <td>${pkg.packageId}</td>
        <td>${pkg.address}</td>
        <td>${pkg.weight} kg</td>
        <td>${pkg.trackingCode}</td>
      </tr>`;
    table.innerHTML += row;
  });
}

function generateTrackingCode(packageId, weight) {
  return '0b' + (packageId << 4 | Math.floor(weight)).toString(2);
}  