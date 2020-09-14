//RANDOM MATCHING OF PARTICIPANTS' NAMES FOR SECRET GIFT EXCHANGE
function drawNames() {
    const giverList = [];
    const input = document.querySelectorAll('input');

    input.forEach(input => {
        if (input.value)
            giverList.push(input.value)
    });

    if (giverList.length < 3) {
        alert('Enter more names!');
    } else {
        let receivers = [...giverList];
        let matches = {};

        for (let i = 0; i < giverList.length; i++) {
            let n = Math.floor(Math.random() * receivers.length);
            let randomPick = receivers[n];
            let objValues = Object.values(matches);

            if (!objValues.includes(randomPick) && giverList[i] !== randomPick) {
                matches[giverList[i]] = randomPick;
                receivers = receivers.filter(name => name !== randomPick)
            }
        }
        revealMatches(matches);
    }
}
//ADD INPUT FIELDS FOR PARTICIPANT NAMES
function addInputFields() {
    for (let i = 0; i < 10; i++) {
        const container = document.querySelector('.names');
        const inputFields = document.createElement('input');
        inputFields.type = 'text';
        inputFields.placeholder = 'Enter name';
        container.appendChild(inputFields);
        container.appendChild(document.createElement("br"));
    }
}
function revealMatches(obj) {

    for (item in obj) {
        const container = document.querySelector('.matched-names');
        const elements = document.createElement('h3');
        const values = document.createElement('p');
        elements.innerHTML = item;
        values.innerHTML = obj[item];
        container.appendChild(elements);
        container.appendChild(values);
        container.appendChild(document.createElement("br"));
    }
    document.querySelector('.entries').style.display = "none";
    document.querySelector('.draw-btn').style.display = "none";
    document.querySelector('.results').style.display = "block";
}



















