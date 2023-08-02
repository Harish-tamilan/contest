import { connectToDatabase } from "@/mongoConnect";
import { getAllProblemsService } from "@/service/problemService";

async function handler(req,res)
{
    await connectToDatabase();
    const response = await getAllProblemsService();
    res.status(response.statusCode).json(response);
}

export default handler;