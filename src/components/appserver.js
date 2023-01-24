const API_URL = "http://127.0.0.1:8000/api/documents/";

export const listCompanies = async () => {
    return await fetch(API_URL);
};

export const getCompany = async (document_token) => {
    return await fetch(`${API_URL}${document_token}`);
};

export const registerCompany = async (newCompany) => {
    return await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: String(newCompany.name).trim(),
            description: String(newCompany.name).trim(),
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const updateCompany = async (companyId, updatedCompany) => {
    if (!updatedCompany.number_of_shareholders) {
        updatedCompany.number_of_shareholders = 2;
    }
    if (!updatedCompany.first_shareholder_birthday) {
        updatedCompany.first_shareholder_birthday = "1950-01-01";
    }
    if (!updatedCompany.second_shareholder_birthday) {
        updatedCompany.second_shareholder_birthday = "1950-01-01";
    }
    if (!updatedCompany.third_shareholder_birthday) {
        updatedCompany.third_shareholder_birthday = "1950-01-01";
    }
    if (!updatedCompany.fourth_shareholder_birthday) {
        updatedCompany.fourth_shareholder_birthday = "1950-01-01";
    }
    if (!updatedCompany.Gesellschaftskapital) {
        updatedCompany.Gesellschaftskapital = "0.0";
    }
    if (!updatedCompany.first_anteil) {
        updatedCompany.first_anteil = "0.0";
    }
    if (!updatedCompany.second_anteil) {
        updatedCompany.second_anteil = "0.0";
    }
    if (!updatedCompany.Beschlussfähigkeit_prozent) {
        updatedCompany.Beschlussfähigkeit_prozent = "0.0";
    }
    if (!updatedCompany.Mehrheitsverhältnisse_prozent) {
        updatedCompany.Mehrheitsverhältnisse_prozent = "0.0";
    }
    return await fetch(`${API_URL}${companyId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: String(updatedCompany.company_name).trim(),
            sitz: String(updatedCompany.company_sitz).trim(),
            created: String(updatedCompany.created).trim(),
            number_of_shareholders: String(
                updatedCompany.number_of_shareholders
            ).trim(),
            first_shareholder_name: String(
                updatedCompany.first_shareholder_name
            ).trim(),
            first_shareholder_birthday: String(
                updatedCompany.first_shareholder_birthday
            ).trim(),
            first_shareholder_residence: String(
                updatedCompany.first_shareholder_residence
            ).trim(),
            second_shareholder_name: String(
                updatedCompany.second_shareholder_name
            ).trim(),
            second_shareholder_birthday: String(
                updatedCompany.second_shareholder_birthday
            ).trim(),
            second_shareholder_residence: String(
                updatedCompany.second_shareholder_residence
            ).trim(),
            Gesellschaftskapital: String(updatedCompany.Gesellschaftskapital).trim(),
            first_anteil: String(updatedCompany.first_anteil).trim(),
            second_anteil: String(updatedCompany.second_anteil).trim(),
            Beschlussfähigkeit_prozent: String(
                updatedCompany.Beschlussfähigkeit_prozent
            ).trim(),
            Mehrheitsverhältnisse_prozent: String(
                updatedCompany.Mehrheitsverhältnisse_prozent
            ).trim(),
        }),
    });
};

export const deleteCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: "DELETE",
    });
};
