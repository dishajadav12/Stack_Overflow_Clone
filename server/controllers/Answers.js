import mongoose from 'mongoose';
import Questions from '../modeles/Questions.js'

export const postAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');
    }

    try {
        await updateNoOfQuestions(_id, noOfAnswers);
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
            $addToSet: {
                'answer': [{
                    answerBody,
                    userAnswered,
                    userId
                }]
            }
        }, { new: true });

        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate(_id, { $set: { 'noOfAnswers': noOfAnswers } });
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { answerId, noOfAnswers} = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');
    }
    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send('answer unavailable...');
    }
    updateNoOfQuestions(_id, noOfAnswers);
    try {
        await Questions.updateOne(
            {_id},
            {$pull: {'answer':{_id: answerId}}}
        )

        res.status(200).json(deleteAnswer);
    } catch (error) {
        res.status(400).json(error);
    }
}


