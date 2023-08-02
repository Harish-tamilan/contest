import { connectToDatabase } from "@/mongoConnect";
import { getProblemService } from "@/service/problemService";

async function handler(req,res)
{
    await connectToDatabase();
    const response = await getProblemService(req.query.id);
    res.status(response.statusCode).json(response);
}

export default handler;