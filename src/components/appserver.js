//const API_URL = "http://127.0.0.1:8000/api/documents/";
const API_URL_W = "http://127.0.0.1:8000/api/send-webhook";
const API_URL = "https://germanyproject-production.up.railway.app/api/documents/";
// const API_URL_W = "https://germanyproject-production.up.railway.app/api/send-webhook";

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
            /*console.log(data);*/
            return data;
        });
};

export const updateCompany = async (token, updatedCompany) => {
    console.log(updateCompany)
    return await fetch(`${API_URL}${token}`, {
        
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({            
            Startdate: String(updatedCompany.Startdate).trim(),
            Workinghours: String(updatedCompany.Workinghours).trim(),
            Enddate: String(updatedCompany.Enddate).trim(),
            WorkingstudentPosition: String(updatedCompany.WorkingstudentPosition).trim(),
            OrtArbeitgeber: String(updatedCompany.OrtArbeitgeber).trim(),
            boolean_q6: String(updatedCompany.boolean_q6).trim(),
            ArbeitszeitTage: String(updatedCompany.ArbeitszeitTage).trim(),
            boolean_q8: String(updatedCompany.boolean_q8).trim(),
            boolean_q10: String(updatedCompany.boolean_q10).trim(),
            BezahlungMonat: String(updatedCompany.BezahlungMonat).trim(),
            BrottoGehalt_String:String(updatedCompany.BrottoGehalt_String).trim(),
            bonus_q12: String(updatedCompany.bonus_q12).trim(),
            boolean_q1201: String(updatedCompany.boolean_q1201).trim(),
            boolean_q1202: String(updatedCompany.boolean_q1202).trim(),
            Urlaubstage: String(updatedCompany.Urlaubstage).trim(),
            boolean_q15: String(updatedCompany.boolean_q15).trim(),
            boolean_q16: String(updatedCompany.boolean_q16).trim(),
            boolean_q17: String(updatedCompany.boolean_q17).trim(),
            // q18: String(updatedCompany.q18).trim(),
            AnzahlProbezeitWochen: String(updatedCompany.AnzahlProbezeitWochen).trim(),
            q19_options: String(updatedCompany.q19_options).trim(),
            q1901: String(updatedCompany.q1901).trim(),
            q20: String(updatedCompany.q20).trim(),
            q21: String(updatedCompany.q21).trim(),
            q22: String(updatedCompany.q22).trim(),
            q23: String(updatedCompany.q23).trim(),






            // name: String(updatedCompany.company_name).trim(),
            // sitz: String(updatedCompany.company_sitz).trim(),
            // created: String(updatedCompany.created).trim(),
            // number_of_shareholders: String(
            //     updatedCompany.number_of_shareholders
            // ).trim(),
            // first_shareholder_name: String(
            //     updatedCompany.first_shareholder_name
            // ).trim(),
            // first_shareholder_birthday: String(
            //     updatedCompany.first_shareholder_birthday
            // ).trim(),
            // first_shareholder_residence: String(
            //     updatedCompany.first_shareholder_residence
            // ).trim(),
            // second_shareholder_name: String(
            //     updatedCompany.second_shareholder_name
            // ).trim(),
            // second_shareholder_birthday: String(
            //     updatedCompany.second_shareholder_birthday
            // ).trim(),
            // second_shareholder_residence: String(
            //     updatedCompany.second_shareholder_residence
            // ).trim(),
            // Gesellschaftskapital: String(updatedCompany.Gesellschaftskapital).trim(),
            // first_anteil: String(updatedCompany.first_anteil).trim(),
            // second_anteil: String(updatedCompany.second_anteil).trim(),
            // Beschlussfähigkeit_prozent: String(
            //     updatedCompany.Beschlussfähigkeit_prozent
            // ).trim(),
            // Mehrheitsverhältnisse_prozent: String(
            //     updatedCompany.Mehrheitsverhältnisse_prozent
            // ).trim(),
        }),
    });
};

export const deleteCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: "DELETE",
    });
};


export const generate_document = async (document_token) => {
   /* alert("Requesting Document")*/

    return await fetch('https://germanyproject-production.up.railway.app/api/send-webhook/' + document_token, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            // handle the response data here
            console.log(data)
            return data;
        })
        .catch(error => {
            // handle the error here
            console.error(error)
        });
};

// if (!updatedCompany.number_of_shareholders) {
//     updatedCompany.number_of_shareholders = 2;
// }
// if (!updatedCompany.first_shareholder_birthday) {
//     updatedCompany.first_shareholder_birthday = "1950-01-01";
// }
// if (!updatedCompany.second_shareholder_birthday) {
//     updatedCompany.second_shareholder_birthday = "1950-01-01";
// }
// if (!updatedCompany.third_shareholder_birthday) {
//     updatedCompany.third_shareholder_birthday = "1950-01-01";
// }
// if (!updatedCompany.fourth_shareholder_birthday) {
//     updatedCompany.fourth_shareholder_birthday = "1950-01-01";
// }
// if (!updatedCompany.Gesellschaftskapital) {
//     updatedCompany.Gesellschaftskapital = "0.0";
// }
// if (!updatedCompany.first_anteil) {
//     updatedCompany.first_anteil = "0.0";
// }
// if (!updatedCompany.second_anteil) {
//     updatedCompany.second_anteil = "0.0";
// }
// if (!updatedCompany.Beschlussfähigkeit_prozent) {
//     updatedCompany.Beschlussfähigkeit_prozent = "0.0";
// }
// if (!updatedCompany.Mehrheitsverhältnisse_prozent) {
//     updatedCompany.Mehrheitsverhältnisse_prozent = "0.0";
// }