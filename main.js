var docs = document.getElementById('doc');

function generate() {
    var reader = new FileReader();
if (docs.files.length === 0) {
    alert("No files selected")
}
reader.readAsBinaryString(docs.files.item(0));

reader.onerror = function (evt) {
    console.log("error reading file", evt);
    alert("error reading file" + evt)
}
reader.onload = function (evt) {
    const content = evt.target.result;
        var zip = new PizZip(content);
        var doc;
        try {
            doc=new window.docxtemplater(zip);
        } catch(error) {
            // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
            errorHandler(error);
        }

        doc.setData({
            Application_name: Application_name.value,
            Application_ID: Application_ID.value,
            Department : Department.value,
            Contact_Person: Contact_Person.value,
            Security_Responsible_Person: Security_Responsible_Person.value,
            Vul_types : Vul_types.value,
            Test_Modules : Test_Modules.value,
            Test_Period : Test_Period.value,
            Test_account_1 : Test_account_1.value,
            Test_account_1_Role : Test_account_1_Role.value,
            Test_account_2 : Test_account_2.value,
            Test_account_2_Role : Test_account_2_Role.value,
            System_Entry_Point : System_Entry_Point.value,
            Vul_1_name : Vul_1_name.value,
            Vul_1_Description : Vul_1_Description.value,
            Vul_1_Impact : Vul_1_Impact.value,
            Vul_1_URL : Vul_1_URL.value,
            Vul_1_Recommendation : Vul_1_Recommendation.value,
            Vul_2_name : Vul_2_name.value,
            Vul_2_Description : Vul_2_Description.value,
            Vul_2_Impact : Vul_2_Impact.value,
            Vul_2_URL : Vul_2_URL.value,
            Vul_2_Recommendation : Vul_2_Recommendation.value,
            Vul_3_name : Vul_3_name.value,
            Vul_3_Description : Vul_3_Description.value,
            Vul_3_Impact : Vul_3_Impact.value,
            Vul_3_URL : Vul_3_URL.value,
            Vul_3_Recommendation : Vul_3_Recommendation.value,
            Vul_4_name : Vul_4_name.value,
            Vul_4_Description : Vul_4_Description.value,
            Vul_4_Impact : Vul_4_Impact.value,
            Vul_4_URL : Vul_4_URL.value,
            Vul_4_Recommendation : Vul_4_Recommendation.value,
            Vul_5_name : Vul_5_name.value,
            Vul_5_Description : Vul_5_Description.value,
            Vul_5_Impact : Vul_5_Impact.value,
            Vul_5_URL : Vul_5_URL.value,
            Vul_5_Recommendation : Vul_5_Recommendation.value,
            Vul_6_name : Vul_6_name.value,
            Vul_6_Description : Vul_6_Description.value,
            Vul_6_Impact : Vul_6_Impact.value,
            Vul_6_URL : Vul_6_URL.value,
            Vul_6_Recommendation : Vul_6_Recommendation.value,
        });
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render();
        }
        catch (error) {
            // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
            errorHandler(error);
        }

        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) //Output the document using Data-URI
        saveAs(out,"output.docx")
    }
}