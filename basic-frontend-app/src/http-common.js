import axios from 'axios';

class ApiService {

    upload(file , config) {

        return axios.post("http://localhost:8080/api/excel/uploadFile/convert-to-single-json", file, config);
    }

    uploadToMultipleJSON(file , config) {

      return axios.post("http://localhost:8080/api/excel/uploadFile/convert-to-multiple-json", file, config);
  }

    download(fileName, config) {
      return axios.get("http://localhost:8080/api/downloadFile/" + fileName, config);
    }

    downloadRule(fileName, config){
      return axios.get("http://localhost:8080/api/downloadRule/" + fileName, config);
    }

    countRules(){
      return axios.get("http://localhost:8080/api/rules/countRules");
    }

    createRule(rule, ruleName){
      return axios.post("http://localhost:8080/api/rules/createRule", rule, ruleName);
    }

    downloadMasterSpreadsheet(config){
      return axios.get("http://localhost:8080/api/rules/download-rule-spreadsheet" , config);
    }

    deleteRule(ruleName){
      return axios.post("http://localhost:8080/api/rules/deleteRule" , ruleName);
    }
}

export default new ApiService();