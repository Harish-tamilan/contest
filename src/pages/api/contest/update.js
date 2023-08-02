import { connectToDatabase } from "../../../mongoConnect";
import { updateContestService } from "@/service/contestService";

async function handler(req,res)
{
    await connectToDatabase();
    const response = await updateContestService(req.query.id, req.body);
    res.status(response.statusCode).json(response);
}

export default handler;