export const NEW_ENTRY = 'NEW_ENTRY';

export const createEntry = (entryData) => dispath => {
    fetch('http://localhost:3100/service/addEntry', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(entryData)  
    })
    .then(res => res.json())
    .then(entry => dispath({
        type: NEW_ENTRY,
        payload: entry
    }))
};