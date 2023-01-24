const API_URL = "http://127.0.0.1:8000/api/documents/"

export const listCompanies = async () => {
    return await fetch(API_URL)
};

export const getCompany = async (document_token) => {
    return await fetch(`${API_URL}${document_token}`);
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
            "name": String(updatedCompany.company_name).trim(),
            "sitz": String(updatedCompany.company_sitz).trim()
        
        })
    });
};

export const deleteCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: 'DELETE'
    });
};
