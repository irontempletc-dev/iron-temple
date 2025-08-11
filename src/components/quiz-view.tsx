
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Quiz } from '@/lib/quiz-data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export function QuizView({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const id = quiz.moduleId;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedAnswers = localStorage.getItem(`quiz-${id}-answers`);
    const savedSubmitted = localStorage.getItem(`quiz-${id}-submitted`);

    if (savedAnswers) {
      setSelectedAnswers(JSON.parse(savedAnswers));
    } else {
      setSelectedAnswers(Array(quiz.questions.length).fill(null))
    }
    if (savedSubmitted) {
      setIsSubmitted(JSON.parse(savedSubmitted));
    }
  }, [id, quiz.questions.length]);

  useEffect(() => {
    if(isClient) {
        localStorage.setItem(`quiz-${id}-answers`, JSON.stringify(selectedAnswers));
    }
  }, [selectedAnswers, id, isClient]);

  useEffect(() => {
    if(isClient) {
        localStorage.setItem(`quiz-${id}-submitted`, JSON.stringify(isSubmitted));
    }
  }, [isSubmitted, id, isClient]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  
  const resetQuiz = () => {
    setIsSubmitted(false);
    setSelectedAnswers(Array(quiz.questions.length).fill(null));
    setCurrentQuestionIndex(0);
    localStorage.removeItem(`quiz-${id}-answers`);
    localStorage.removeItem(`quiz-${id}-submitted`);
    localStorage.removeItem(`quiz-${id}-completionDate`);
  }

  if (!isClient) {
    return null; // or a loading spinner
  }
  
  const score = selectedAnswers.reduce((acc, selectedAnswer, index) => {
    if (quiz && selectedAnswer === quiz.questions[index].correctAnswerIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const scorePercentage = (score / quiz.questions.length) * 100;
  const passed = scorePercentage >= 80;
  const allQuestionsAnswered = selectedAnswers.length === quiz.questions.length && selectedAnswers.every(a => a !== null);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const selectedValue = selectedAnswers[currentQuestionIndex];

  return (
      <div className="flex-1 space-y-4 p-8 bg-background/80">
        {isSubmitted ? (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tight font-headline">Quiz Results</CardTitle>
              <CardDescription>You scored {score} out of {quiz.questions.length} ({scorePercentage.toFixed(0)}%)</CardDescription>
            </CardHeader>
            <CardContent>
              {passed ? (
                <Alert variant="default" className="bg-green-100/10 border-green-500 text-green-400">
                  <CheckCircle className="h-4 w-4 !text-green-500" />
                  <AlertTitle>Congratulations! You passed!</AlertTitle>
                  <AlertDescription>
                    You can now view your certificate of completion on the module page.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Try Again</AlertTitle>
                  <AlertDescription>
                    You need a score of 80% or higher to pass. Please review the material and retake the test.
                  </AlertDescription>
                </Alert>
              )}
               <div className="mt-6 space-y-6">
                {quiz.questions.map((q, index) => {
                  const selected = selectedAnswers[index];
                  const correct = q.correctAnswerIndex;
                  const isCorrect = selected === correct;
                  return (
                    <div key={index} className="p-4 rounded-lg border bg-muted/40">
                      <p className="font-semibold">{index + 1}. {q.question}</p>
                      <p className={`mt-2 text-sm ${isCorrect ? 'text-green-500' : 'text-destructive'}`}>
                        Your answer: {selected !== null && selected < q.options.length ? q.options[selected] : 'Not answered'}
                      </p>
                      {!isCorrect && (
                        <p className="mt-1 text-sm text-green-400">
                          Correct answer: {q.options[correct]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href={`/modules/${id}`}>Back to Module</Link>
                </Button>
                {!passed && <Button onClick={resetQuiz}>Retake Test</Button>}
            </CardFooter>
          </Card>
        ) : (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tight font-headline">{quiz.title}</CardTitle>
              <div className="pt-2">
                  <Progress value={((currentQuestionIndex + 1) / quiz.questions.length) * 100} className="w-full" />
                  <p className="text-sm text-muted-foreground mt-2 text-center">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-6">{currentQuestion.question}</p>
              <RadioGroup
                value={selectedValue !== null && selectedValue !== undefined ? selectedValue.toString() : ''}
                onValueChange={(value) => handleAnswerSelect(parseInt(value, 10))}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-md hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={index.toString()} id={`q${currentQuestionIndex}-o${index}`} />
                    <Label htmlFor={`q${currentQuestionIndex}-o${index}`} className="text-base flex-1 cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
              {currentQuestionIndex < quiz.questions.length - 1 ? (
                <Button onClick={handleNext} disabled={selectedValue === null || selectedValue === undefined}>
                  Next
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!allQuestionsAnswered}>
                  Submit
                </Button>
              )}
            </CardFooter>
          </Card>
        )}
      </div>
  );
}
