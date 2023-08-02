import { Contest } from "@/mongoSchema";
import axios from "axios";

// Create a contest
export const addContestService = async (body) => {
    try {
        let contest = new Contest(body);
        await contest.save();
        return {
            status: 'success',
            statusCode: 200
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        };
    }
};

// Get a contest by ID
export const getContestService = async (object) => {
    try {
        const contest = await Contest.findOne(object);
        console.log('contest is ', contest);
        let n = contest.questions.length;
        let quests = [];
        for (let i = 0; i < n; i++) {
            let problem = await axios.get(`http://localhost:5001/problem?id=${contest.questions[i].problem}`);
            problem = await problem.data;
            console.log('problem is ', problem);
            let obj = {};
            console.log('testCase is ', problem.result.testCases);
            console.log('testCaseAnswers are ', problem.result.testCaseAnswers);
            obj = problem.result;
            obj.testCases = problem.result.testCases;
            obj.testCaseAnswers = problem.result.testCaseAnswers;
            console.log('obj is ', obj);
            quests.push(obj);
        }
        let response = {};
        response.title = contest.title;
        response._id = contest._id;
        response.description = contest.description;
        response.startDate = contest.startDate;
        response.endDate = contest.endDate;
        console.log('quests are ', quests);
        response.questions = quests;
        if (!contest) {
            return {
                status: 'error',
                statusCode: 404
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            contest: response
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        };
    }
};

// Get all contests
export const getAllContestsService = async () => {
    try {
        const contests = await Contest.find();
        let result = [];
        for (let contest of contests) {
            let n = contest.questions.length;
            let quests = [];
            for (let i = 0; i < n; i++) {
                let problem = await axios.get(`http://localhost:5001/problem?id=${contest.questions[i].problem}`);
                problem = await problem.data;
                console.log('problem is ', problem);
                let obj = {};
                console.log('testCase is ', problem.result.testCases);
                console.log('testCaseAnswers are ', problem.result.testCaseAnswers);
                obj = problem.result;
                obj.testCases = problem.result.testCases;
                obj.testCaseAnswers = problem.result.testCaseAnswers;
                console.log('obj is ', obj);
                quests.push(obj);
            }
            let response = {};
            response.title = contest.title;
            response._id = contest._id;
            response.description = contest.description;
            response.startDate = contest.startDate;
            response.endDate = contest.endDate;
            console.log('quests are ', quests);
            response.questions = quests;
            result.push(response);
        }
        return {
            status: 'success',
            statusCode: 200,
            result: result
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        };
    }
};

// Update a contest by ID
export const updateContestService = async (contestId, body) => {
    try {
        const updatedContest = await Contest.findByIdAndUpdate(contestId, body, { new: true });
        if (!updatedContest) {
            return {
                status: 'error',
                statusCode: 404
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            contest: updatedContest
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        };
    }
};

// Delete a contest by ID
export const deleteContestService = async (contestId) => {
    try {
        const deletedContest = await Contest.findByIdAndDelete(contestId);
        if (!deletedContest) {
            return {
                status: 'error',
                statusCode: 404
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            contest: deletedContest
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        };
    }
};
