"use client"

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PlayCircle, CheckCircle2, Lock, ChevronLeft, Download, FileText, Award } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; 

export default function SalaDeAulaContent() {
  // 1. CAPTURA O ID DA URL
  const params = useParams();
  const cursoId = params?.id; 

  // Estado de carregamento simulado
  const [isLoading, setIsLoading] = useState(true);

  // DADOS DO CURSO (Estado inicial)
  const [lessons, setLessons] = useState([
    { id: 1, title: "Introdução Histórica", duration: "10:00", completed: true, locked: false },
    { id: 2, title: "Sola Scriptura: A Base", duration: "15:30", completed: true, locked: false },
    { id: 3, title: "Sola Gratia: O Favor Imerecido", duration: "12:00", completed: true, locked: false },
    { id: 4, title: "Sola Fide: Justificados pela Fé", duration: "14:00", completed: false, locked: false },
    { id: 5, title: "Solus Christus: O Único Mediador", duration: "18:00", completed: false, locked: true },
    { id: 6, title: "Soli Deo Gloria: O Fim de Tudo", duration: "20:00", completed: false, locked: true },
  ]);

  // Simula busca de dados quando o ID muda
  useEffect(() => {
    if (cursoId) {
      // Simula um delay de rede (fetch)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600); // 600ms de esqueleto
      return () => clearTimeout(timer);
    }
  }, [cursoId]);

  // Controles de Navegação
  const [activeLessonIndex, setActiveLessonIndex] = useState(3); 
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Calcula progresso dinâmico
  const completedCount = lessons.filter(l => l.completed).length;
  const progressPercent = Math.round((completedCount / lessons.length) * 100);

  // Mock do Quiz
  const quizQuestions = [
    {
      id: 1,
      question: "O que significa 'Sola Scriptura'?",
      options: ["A Bíblia é a única autoridade de fé e prática.", "A tradição é superior à Bíblia.", "Somente Lutero importa.", "A razão define a verdade."],
      correct: 0
    },
    {
      id: 2,
      question: "Qual foi o estopim da Reforma Protestante?",
      options: ["A invenção da imprensa.", "As 95 Teses de Lutero.", "O casamento de Henrique VIII.", "O Concílio de Trento."],
      correct: 1
    }
  ];

  // --- FUNÇÕES DE AÇÃO ---

  const handleFinishLesson = () => {
    const updatedLessons = [...lessons];
    updatedLessons[activeLessonIndex].completed = true;

    if (activeLessonIndex < lessons.length - 1) {
       updatedLessons[activeLessonIndex + 1].locked = false;
       setLessons(updatedLessons);
       setActiveLessonIndex(activeLessonIndex + 1);
    } else {
       setLessons(updatedLessons);
       setIsQuizMode(true);
    }
  };

  const handleSelectLesson = (index: number) => {
    if (!lessons[index].locked) {
        setActiveLessonIndex(index);
        setIsQuizMode(false); 
    }
  };

  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    setQuizScore(100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- RENDERIZAÇÃO DE CARREGAMENTO (SKELETON) ---
  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 text-sm">
           <div className="h-4 w-24 bg-gray-200 rounded"></div>
           <div className="h-4 w-40 bg-gray-200 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Vídeo Skeleton */}
           <div className="lg:col-span-2 space-y-6">
              <div className="aspect-video bg-gray-200 rounded-xl"></div>
              <div className="flex justify-between mt-4">
                 <div className="space-y-2">
                    <div className="h-8 w-48 bg-gray-200 rounded"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                 </div>
                 <div className="h-10 w-32 bg-gray-200 rounded"></div>
              </div>
           </div>

           {/* Sidebar Skeleton */}
           <div className="space-y-6">
              <div className="h-64 bg-gray-200 rounded-xl"></div>
              <div className="h-24 bg-gray-200 rounded-xl"></div>
           </div>
        </div>
      </div>
    );
  }

  // --- RENDERIZAÇÃO DO CONTEÚDO REAL ---
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* HEADER DE NAVEGAÇÃO */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <Link href="/dashboard/cursos" className="hover:text-red-900 flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" /> Voltar aos Cursos
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Teologia da Reforma (ID: {cursoId})</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ÁREA PRINCIPAL (VIDEO OU QUIZ) */}
        <div className="lg:col-span-2 space-y-6">
          
          {!isQuizMode ? (
            // MODO VÍDEO
            <div className="space-y-4">
               <div className="aspect-video bg-black rounded-xl overflow-hidden relative shadow-lg">
                  <iframe 
                    width="100%" height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=SimulatedVideo" 
                    title="Video Player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    className="border-0"
                  ></iframe>
               </div>
               
               <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{lessons[activeLessonIndex].title}</h1>
                    <p className="text-gray-500">Módulo 1: Os 5 Solas</p>
                  </div>
                  <Button 
                    onClick={handleFinishLesson} 
                    className={cn(
                        "text-white min-w-[160px] shadow-sm transition-all",
                        lessons[activeLessonIndex].completed 
                            ? "bg-green-600 hover:bg-green-700" 
                            : "bg-red-900 hover:bg-red-800"
                    )}
                  >
                    {activeLessonIndex === lessons.length - 1 ? (
                        "Finalizar e Ir para Prova"
                    ) : (
                        lessons[activeLessonIndex].completed ? (
                            <><CheckCircle2 className="mr-2 h-4 w-4" /> Próxima Aula</>
                        ) : (
                            <><CheckCircle2 className="mr-2 h-4 w-4" /> Concluir Aula</>
                        )
                    )}
                  </Button>
               </div>

               <Separator />

               <div className="prose max-w-none text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Material de Apoio</h3>
                  <p>Baixe o PDF abaixo para acompanhar os slides desta aula.</p>
                  <Button variant="outline" className="mt-2 gap-2">
                    <Download className="h-4 w-4" /> Baixar Apostila (PDF)
                  </Button>
               </div>
            </div>
          ) : (
            // MODO QUIZ
            <Card className="border-t-4 border-t-red-900 animate-in zoom-in duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                   <FileText className="h-5 w-5 text-red-900" />
                   Prova Final: Teologia da Reforma
                </CardTitle>
                <CardDescription>
                  Responda corretamente para liberar seu certificado.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {quizScore === null ? (
                   <form id="quiz-form" onSubmit={handleSubmitQuiz} className="space-y-8">
                      {quizQuestions.map((q, index) => (
                        <div key={q.id} className="space-y-3">
                           <h3 className="font-medium text-lg text-gray-900">{index + 1}. {q.question}</h3>
                           <RadioGroup required>
                              {q.options.map((opt, optIndex) => (
                                <div key={optIndex} className="flex items-center space-x-2 border p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                  <RadioGroupItem value={optIndex.toString()} id={`q${q.id}-${optIndex}`} />
                                  <Label htmlFor={`q${q.id}-${optIndex}`} className="flex-1 cursor-pointer font-normal text-gray-700">{opt}</Label>
                                </div>
                              ))}
                           </RadioGroup>
                        </div>
                      ))}
                   </form>
                ) : (
                   // RESULTADO DO QUIZ
                   <div className="text-center py-8 space-y-6">
                      <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm">
                         <Award className="h-12 w-12" />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">Aprovado!</h2>
                        <p className="text-xl text-gray-600">Nota Final: <span className="font-bold text-green-600">{quizScore}%</span></p>
                      </div>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Parabéns! Você completou o curso com excelência. Seu certificado foi gerado e enviado para seu e-mail.
                      </p>
                      <div className="flex justify-center gap-4 pt-2">
                        <Button variant="outline" onClick={() => {setIsQuizMode(false); setQuizScore(null)}}>Refazer</Button>
                        <Button className="bg-red-900 hover:bg-red-800 text-white shadow-md">
                            <Download className="mr-2 h-4 w-4" /> Baixar Certificado
                        </Button>
                      </div>
                   </div>
                )}
              </CardContent>
              
              {quizScore === null && (
                 <CardFooter className="bg-gray-50 flex justify-end p-6">
                    <Button type="submit" form="quiz-form" size="lg" className="bg-red-900 hover:bg-red-800 text-white w-full sm:w-auto">
                        Finalizar Prova
                    </Button>
                 </CardFooter>
              )}
            </Card>
          )}

        </div>

        {/* SIDEBAR (LISTA DE AULAS) */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-4">
               <CardTitle className="text-lg">Conteúdo do Curso</CardTitle>
               <div className="space-y-1 pt-2">
                 <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>{progressPercent}% concluído</span>
                    <span>{completedCount}/{lessons.length} aulas</span>
                 </div>
                 <Progress value={progressPercent} className="h-2" />
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <Accordion type="single" collapsible defaultValue="module-1" className="w-full">
                 <AccordionItem value="module-1" className="border-b-0">
                    <AccordionTrigger className="px-6 py-3 bg-gray-50 hover:no-underline hover:bg-gray-100">
                       <span className="font-semibold text-sm">Módulo 1: Os 5 Solas</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                       <div className="divide-y divide-gray-100">
                          {lessons.map((lesson, index) => (
                             <button
                                key={lesson.id} 
                                onClick={() => handleSelectLesson(index)}
                                disabled={lesson.locked}
                                className={cn(
                                   "w-full text-left flex items-center gap-3 p-4 transition-all border-l-4",
                                   activeLessonIndex === index && !isQuizMode 
                                     ? "bg-red-50 border-l-red-900" 
                                     : "border-l-transparent hover:bg-gray-50",
                                   lesson.locked && "opacity-50 cursor-not-allowed bg-gray-50/50"
                                )}
                             >
                                <div className="shrink-0">
                                   {lesson.completed ? (
                                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                                   ) : lesson.locked ? (
                                      <Lock className="h-4 w-4 text-gray-400" />
                                   ) : (
                                      <PlayCircle className={cn(
                                        "h-5 w-5",
                                        activeLessonIndex === index ? "text-red-900" : "text-gray-400"
                                      )} />
                                   )}
                                </div>
                                <div className="flex-1 min-w-0">
                                   <p className={cn(
                                     "text-sm font-medium truncate",
                                     activeLessonIndex === index && !isQuizMode ? "text-red-900" : "text-gray-700"
                                   )}>
                                      {index + 1}. {lesson.title}
                                   </p>
                                   <p className="text-xs text-gray-400 mt-0.5">{lesson.duration}</p>
                                </div>
                             </button>
                          ))}
                       </div>
                    </AccordionContent>
                 </AccordionItem>
               </Accordion>
            </CardContent>
          </Card>
          
          <Card>
             <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src="https://github.com/shadcn.png" alt="Instrutor" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase font-bold">Instrutor</p>
                   <p className="font-medium text-gray-900">Rev. Augustus Nicodemus</p>
                </div>
             </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}