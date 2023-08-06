// backend/controllers/submissionController.js
import { UserContest } from "@/mongoSchema";
import { connectToDatabase } from "@/mongoConnect";
// API endpoint to fetch all submissions along with user and contest details

async function handler(req, res){
    try {
        await connectToDatabase();
        const submissions = await UserContest.find()
          .populate('user', 'name')
          .populate('contest', 'title')
          .exec();
    
        res.json(submissions);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching submissions' });
      }
}
// exports.getAllSubmissions = async (req, res) => {
//   try {
//     const submissions = await UserContest.find()
//       .populate('user', 'username')
//       .populate('contest', 'title')
//       .exec();

//     res.json(submissions);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching submissions' });
//   }
// };
export default handler;