import { connectToDatabase } from "../../../mongoConnect";
import { addContestService } from "@/service/contestService";

async function handler(req,res)
{
    await connectToDatabase();
    console.log(req.body);
    const response = await addContestService(req.body);
    res.status(response.statusCode).json(response);
}

export default handler;