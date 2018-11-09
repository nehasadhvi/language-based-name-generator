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

    // Read the gender and append to url
    if(gender !== ''){
        url += `gender=${gender}&`;
    }

    // Read the number of names needed and append to url
    if(amount !== ''){
        url += `amount=${amount}&`;
    }

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.onload = function() {
    //     if(this.status === 200) {
    //         const names = JSON.parse(this.responseText);

    //         let html = '<h2>Generated Names</h2>'
    //         html += '<ul class="list">';
    //         names.forEach((babyName) => {
    //             html += `
    //                 <li>${babyName.name}</li>
    //             `;
    //         });
    //         html += '</ul>';
    //         document.getElementById('result').innerHTML = html;
    //     }
    // };
    // xhr.send();

    fetch(url)
        .then((response) => response.json())
        .then((names) => {
            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';
            names.forEach((babyName) => {
                html += `
                    <li>
                        ${babyName.name}
                    </li>
                `;
            });
            html += '</ul>';
            document.getElementById('result').innerHTML = html;
        })
        .catch((error) => {console.log(error)});

}