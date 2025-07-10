"use client";

import { QuizContext } from "@/context";
import { useContext } from "react";

export const useQuizId = () => {
    return useContext(QuizContext);
};
