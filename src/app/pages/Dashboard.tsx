import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { User, Coins, Mic, LogOut, FileText, AlertCircle } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export function Dashboard() {
  const navigate = useNavigate();
  const { profile, tasks, setProfile, setUser, transactions } = useApp();
  const [activeTab, setActiveTab] = useState<string>("available");

  const availableTasks = tasks.filter((task) => task.status === "available");
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const redoTasks = tasks.filter((task) => task.status === "redo");

  // Only show truly available tasks, exclude redo tasks from the Available tab
  const allAvailableTasks = availableTasks;

  const handleReset = () => {
    setProfile(null);
    setUser(null);
    navigate("/");
  };

  const TaskCard = ({
    task,
  }: {
    task: {
      id: string;
      title: string;
      duration: string;
      reward: number;
      status: string;
      type: "recording" | "transcription";
      rejectionReason?: string;
    };
  }) => {
    const handleTaskClick = () => {
      if (task.status === "available" || task.status === "redo") {
        if (task.type === "transcription") {
          navigate(`/transcription/${task.id}`);
        } else {
          navigate(`/task/${task.id}`);
        }
      }
    };

    return (
      <div
        onClick={handleTaskClick}
        className={`bg-white rounded-xl p-4 shadow-sm border ${
          task.status === "redo" ? "border-red-200 bg-red-50" : "border-gray-100"
        } ${
          task.status === "available" || task.status === "redo"
            ? "cursor-pointer active:scale-[0.98]"
            : ""
        } transition-transform relative`}
      >
        {/* Main Content Row */}
        <div className="flex items-center gap-4 min-h-[72px]">
          {/* Redo Badge */}
          {task.status === "redo" && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded-full">
              <AlertCircle className="w-3 h-3" />
              <span className="text-[10px] font-semibold uppercase">Переделать</span>
            </div>
          )}

          {/* Icon */}
          <div
            className={`w-12 h-12 ${
              task.status === "redo" ? "bg-red-100" : "bg-gray-100"
            } rounded-full flex items-center justify-center flex-shrink-0`}
          >
            {task.type === "transcription" ? (
              <FileText
                className={`w-6 h-6 ${
                  task.status === "redo" ? "text-red-600" : "text-[#757575]"
                }`}
              />
            ) : (
              <Mic
                className={`w-6 h-6 ${
                  task.status === "redo" ? "text-red-600" : "text-[#757575]"
                }`}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pr-20">
            <h3
              className={`text-[16px] font-semibold ${
                task.status === "redo" ? "text-red-900" : "text-[#1A1A1A]"
              } mb-1`}
            >
              {task.title}
            </h3>
            <p
              className={`text-[14px] ${
                task.status === "redo" ? "text-red-700" : "text-[#757575]"
              }`}
            >
              {task.duration}
            </p>
          </div>

          {/* Reward Badge */}
          <div
            className={`${
              task.status === "redo" ? "bg-red-600" : "bg-gradient-to-r from-gray-700 to-gray-600"
            } px-4 py-2 rounded-full flex-shrink-0`}
          >
            <span className="text-[14px] font-bold text-white">
              +{task.reward}
            </span>
          </div>
        </div>

        {/* Rejection Reason - full width below main content */}
        {task.status === "redo" && task.rejectionReason && (
          <div className="bg-red-100 border border-red-300 rounded-lg p-3 mt-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-red-900 mb-1 uppercase tracking-wide">
                  Причина отклонения
                </p>
                <p className="text-[13px] text-red-800 leading-relaxed">
                  {task.rejectionReason}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-6">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Profile */}
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1 -ml-2 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-[16px] font-semibold text-[#1A1A1A]">Пользователь</span>
          </button>

          {/* Balance and Reset */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 bg-[#F5F5F5] px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer active:scale-95"
            >
              <Coins className="w-5 h-5 text-gray-600" />
              <span className="text-[18px] font-bold text-[#1A1A1A]">
                {profile?.points || 0}
              </span>
              <span className="text-[14px] text-[#757575]">баллов</span>
            </button>
            
            <button
              onClick={handleReset}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              title="Выход"
            >
              <LogOut className="w-5 h-5 text-[#757575]" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full h-auto bg-transparent p-0 grid grid-cols-3">
            <TabsTrigger
              value="available"
              className="h-14 rounded-none border-b-2 border-transparent data-[state=active]:border-gray-700 data-[state=active]:bg-transparent data-[state=active]:text-[#1A1A1A] text-[#757575] font-semibold"
            >
              Доступные
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="h-14 rounded-none border-b-2 border-transparent data-[state=active]:border-gray-700 data-[state=active]:bg-transparent data-[state=active]:text-[#1A1A1A] text-[#757575] font-semibold"
            >
              На проверке
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="h-14 rounded-none border-b-2 border-transparent data-[state=active]:border-gray-700 data-[state=active]:bg-transparent data-[state=active]:text-[#1A1A1A] text-[#757575] font-semibold"
            >
              Выполненные
            </TabsTrigger>
          </TabsList>

          {/* Available Tasks */}
          <TabsContent value="available" className="mt-0">
            <div className="px-6 pt-6 space-y-3">
              {allAvailableTasks.length > 0 ? (
                <>
                  {allAvailableTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#757575]">Нет доступных заданий</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Pending Tasks */}
          <TabsContent value="pending" className="mt-0">
            <div className="px-6 pt-6 space-y-3">
              {pendingTasks.length > 0 ? (
                <>
                  {pendingTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#757575]">Нет заданий на проверке</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Completed Tasks */}
          <TabsContent value="completed" className="mt-0">
            <div className="px-6 pt-6 space-y-3">
              {completedTasks.length > 0 ? (
                <>
                  {completedTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#757575]">
                    Вы еще не выполнили ни одного задания
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}