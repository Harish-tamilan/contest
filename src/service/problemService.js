import axios from "axios";
export const getAllProblemsService = async () => {
    try {
        let response = await axios.get('http://localhost:5001/problem/all');
        console.log('response of getAllProblemsService : ', response.data);
        return response.data;
    } catch (e) {
        return {
            statusCode: 500,
            status: 'error',
            error: e.message
        }
    }
}

export const getProblemService = async (id) => {
    try {
        const response = await fetch(`localhost:5001/problem?id=${id}`, {
            method: "GET"
        });
        return response;
    } catch (e) {
        return {
            statusCode: 500,
            status: 'error',
            error: e.message
        }
    }
}

export const getBoilerPlateCodeService = async (problemId, language) => {
    try {
        let response = await axios.get(`http://localhost:5001/boilerPlate?problemId=${problemId}&language=${language}`);
        response = response.data;
        console.log('response of getBoilerPlateCodeService, ', response);
        return {
            status: 'success',
            statusCode: 200,
            result: response
        };
    } catch (e) {
        return {
            statusCode: 500,
            status: 'error',
            error: e.message
        }
    }
}