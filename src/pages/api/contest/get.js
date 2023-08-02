import { connectToDatabase } from "../../../mongoConnect";
import { getContestService } from "@/service/contestService";

async function handler(req,res)
{
    await connectToDatabase();
    const response = await getContestService(JSON.parse(req.body));
    res.status(response.statusCode).json(response);
}

export default handler;