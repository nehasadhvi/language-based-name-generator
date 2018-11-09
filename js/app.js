document.querySelector('#generate-names').addEventListener('submit', loadNames);

function loadNames(e) {
    e.preventDefault();

    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;

    let url = 'http://uinames.com/api/?';

    // Read the country and append to url
    if(country !== ''){
        url += `region=${country}&`;
    }

    // Read the country and append to url
    if(gender !== ''){
        url += `gender=${gender}&`;
    }

    // Read the country and append to url
    if(amount !== ''){
        url += `amount=${amount}&`;
    }

    console.log(url);
}
