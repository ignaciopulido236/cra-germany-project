const API_URL = "http://127.0.0.1:8000/api/companies/"

export const listCompanies = async () => {
    return await fetch(API_URL)
};

export const getCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`);
};

export const registerCompany = async (newCompany) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newCompany.name).trim(),
            "description": String(newCompany.name).trim()
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("ONE");
            return data;
        });;
};

export const updateCompany = async (companyId, updatedCompany) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedCompany.name).trim(),
            "description": String(updatedCompany.name).trim()
            /* "name": String(updatedCompany.name).trim(),
             "description": String(updatedCompany.name).trim()*/


            /*"foundation": parseInt(updatedCompany.foundation),
            "website": String(updatedCompany.website).trim(),*/
        })
    });
};

export const deleteCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: 'DELETE'
    });
};
