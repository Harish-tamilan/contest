const mongoose = require("mongoose");


const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [String],
    correctOption: {
        type: String,
        required: true
    },
});

const TestSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    testName: {
        type: String,
        required: true
    },
    questions: {
        type: [QuestionSchema],
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    address: String,
    education: String,
    workExperience: String,
    skills: String,
    reference: String,
    additionalInformation: String,
    bgvConsent: Boolean,
    canContactReference: Boolean,
    canTakeAssessment: Boolean
})

const UserTestSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'test'
    },
    submission: [
      {
        questionId: {
          type: String
        },
        answer: String
      }
    ]
  });

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    skills: String,
    roles: String,
    responsibilities: String,
    additionalSkills: String,
    company: String,
    salary: String,
    duration: String,
    location: String,
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'test'
    }
})

const ProjectApplicationSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    }
})

const ContestSchema = new mongoose.Schema({
    title:{
        type :String,
        required:true
    },
    description: String,
    startDate: String,
    endDate: String,
    questions:[{
        problem: String,
        problemId: Number
    }],
})

const UserContestSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    contest:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contest'
    },
    scores:[
        {
            problem: String,
            problemId: Number,
            score: Number
        }
    ],
    percentage: Number
})

const Test = mongoose.models.test || mongoose.model("test", TestSchema);
const User = mongoose.models.user || mongoose.model("user", UserSchema);
const UserTest = mongoose.models.userTest || mongoose.model("userTest", UserTestSchema);
const Question = mongoose.models.question || mongoose.model("question", QuestionSchema);
const Project = mongoose.models.project || mongoose.model("project", ProjectSchema);
const ProjectApplication = mongoose.models.projectApplication || mongoose.model("projectApplication", ProjectApplicationSchema);
const Contest = mongoose.models.contest || mongoose.model("contest", ContestSchema);
const UserContest = mongoose.models.userContest || mongoose.model("userContest", UserContestSchema);

module.exports = { Test, User, UserTest, Project, ProjectApplication, Contest, UserContest };