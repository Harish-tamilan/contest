import {submitContestService} from '../../../service/userService';
import { connectToDatabase } from "../../../mongoConnect";

async function handler(req,res)
{
    console.log('inside submitTest handler');
    await connectToDatabase();
    let body = JSON.parse(req.body);
    const response = await submitContestService(body);
    res.status(response.statusCode).json(response);
}

export default handler;