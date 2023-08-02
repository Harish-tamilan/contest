import { connectToDatabase } from "../../../mongoConnect";
import { deleteContestService } from "@/service/contestService";

async function handler(req,res)
{
    await connectToDatabase();
    const response = await deleteContestService(req.query.id);
    res.status(response.statusCode).json(response);
}

export default handler;