"use client";

import { QuizContext } from "@/context";
import { useState } from "react";

const QuizProvider = ({ children }) => {
    const [quizId, setQuizId] = useState(null);

    return <QuizContext.Provider value={{ quizId, setQuizId }}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
