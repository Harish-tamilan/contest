import { User, UserContest } from "@/mongoSchema";

export const updateUserService = async (body) => {
    try {
        if (!body.mobile) {
            return {
                status: 'error',
                statusCode: 400,
                error: 'Mobile number is missing'
            }
        }
        if (body.password) {
            body.password = btoa(body.password);
        }
        console.log('body in updateUserService, ', body);
        const response = await User.findOneAndUpdate({ mobile: body.mobile }, body, { "upsert": true });
        console.log('response, ', response);
        return {
            status: 'success',
            statusCode: 200
        }
    } catch (e) {
        return {
            status: 'error',
            error: e.message,
            statusCode: 500
        }
    }
}

export const loginService = async (body, type) => {
    try {
        const user = await User.findOne({ email: body.email, type: type });
        if (user) {
            let password = atob(user.password);
            if (body.password == password) {
                return {
                    status: 'success',
                    statusCode: 200,
                    data: user
                }
            }
        }
        return {
            status: 'failed',
            statusCode: 200,
            error: 'Invalid email/password'
        }
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        }
    }
}

export const submitContestService = async (body) => {
    console.log('inside submitTestService, body is ', body);
    try {
        let response = await UserContest.findOneAndUpdate({ user: body.user, contest: body.contest }, body, { "upsert": true });
        console.log('response, ', response);
        return {
            status: 'success',
            statusCode: 200
        }
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        }
    }
}

export const getRegisteredUsers = async (contestId) => {
    try {
        console.log('contest id is ', contestId);
        let response = await UserContest.find({ contest: contestId, percentage: null });
        console.log('response, ', response);
        let n = response.length;
        for (let i = 0; i < n; i++) {
            let user = await User.findById(response[i].user);
            response[i].user = user;
        }
        return {
            status: 'success',
            statusCode: 200,
            result: response
        }
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        }
    }
}

export const getUserResults = async (contestId) => {
    try {
        let response = await UserContest.find({ contest: contestId, percentage: { $ne: null } });
        console.log('response of getUserResults, ', response);
        let n = response.length;
        for (let i = 0; i < n; i++) {
            let user = await User.findById(response[i].user);
            response[i].user = user;
        }
        return {
            status: 'success',
            statusCode: 200,
            result: response
        }
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        }
    }
}

export const getUserDetails = async (id) => {
    try {
        let response = await User.findById(id);
        console.log('response, ', response);
        return {
            status: 'success',
            statusCode: 200,
            result: response
        }
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            error: e.message
        }
    }
}


