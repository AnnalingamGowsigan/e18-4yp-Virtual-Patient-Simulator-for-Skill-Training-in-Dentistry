import React, { useState } from 'react';
import './PeriodontalScreeningQuestions.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const PeriodontalScreeningQuestions = () => {
    const [questions, setQuestions] = useState([
        {
            type: "single",
            text: "What is the capital city of France?",
            imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png",
            options: [
                { text: "London", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: false },
                { text: "Paris", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: true },
                { text: "Berlin", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: false }
            ]
        },
        {
            type: "multiple",
            text: "Which of the following are colors in the RGB model?",
            imageUrl: "",
            options: [
                { text: "Red", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: true },
                { text: "Green", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: true },
                { text: "Blue", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: true },
                { text: "Yellow", imageUrl: "https://cdn.pixabay.com/photo/2017/07/18/15/39/dental-care-2516133_640.png", isCorrect: false }
            ]
        },
        {
            type: "single",
            text: "What is the capital city of France?",
            imageUrl: "",
            options: [
                { text: "London", imageUrl: "", isCorrect: false },
                { text: "Paris", imageUrl: "", isCorrect: true },
                { text: "Berlin", imageUrl: "", isCorrect: false }
            ]
        },
    ]);

    return (
        <div className="periodontal-screening-questions">
            <StepperComponent selectedStep={"Periodontal Screening Questions"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/softTissueAssessment'}
                section={'Periodontal Screening Questions'}

            />
        </div>
    );
};

export default PeriodontalScreeningQuestions;