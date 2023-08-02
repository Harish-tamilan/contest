import { connectToDatabase } from "../../../mongoConnect";
import { getAllContestsService } from "@/service/contestService";

async function handler(req,res)
{
    await connectToDatabase();
    const response = await getAllContestsService();
    res.status(response.statusCode).json(response);
}

export default handler;