import { createContext, useContext, useState, ReactNode } from "react";

export interface UserProfile {
  gender: string;
  ageGroup: string;
  firstLanguage: string;
  homeState: string;
  ethnicity: string;
  occupation: string;
  recordingDevice: string;
  agreedToDataProcessing: boolean;
  points: number;
}

export interface User {
  email: string;
  name?: string;
}

export interface Task {
  id: string;
  title: string;
  duration: string;
  reward: number;
  script?: string;
  type: "recording" | "transcription";
  status: "available" | "pending" | "completed" | "redo";
  audioUrl?: string;
  metadata?: {
    speaker_cross?: string;
    language?: string;
    accent?: string;
    [key: string]: string | undefined;
  };
  transcription?: string;
  rejectionReason?: string;
}

export interface BalanceTransaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: Date;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  profile: UserProfile | null;
  setProfile: (profile: UserProfile) => void;
  updateProfile: (profile: UserProfile) => void;
  balance: number;
  addBalance: (amount: number, description: string) => void;
  deductBalance: (amount: number, description: string) => void;
  transactions: BalanceTransaction[];
  tasks: Task[];
  updateTaskStatus: (taskId: string, status: Task["status"]) => void;
  updateTaskTranscription: (taskId: string, transcription: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
AppContext.displayName = 'AppContext';

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Диалог",
    duration: "~30 сек",
    reward: 15,
    script: "Навигация к ближайшей кофейне",
    type: "recording",
    status: "redo",
    rejectionReason: "Обнаружен фоновый шум. Пожалуйста, запишите в более тихой обстановке.",
  },
  {
    id: "2",
    title: "Навигация",
    duration: "~20 сек",
    reward: 10,
    script: "Включи музыку из моего плейлиста",
    type: "recording",
    status: "available",
  },
  {
    id: "3",
    title: "Разговор",
    duration: "~45 сек",
    reward: 20,
    type: "transcription",
    status: "redo",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    metadata: {
      speaker_cross: "Да",
      language: "Русский",
      accent: "Казахстанский",
    },
    rejectionReason: "Транскрипция неполная. Несколько слов в конце отсутствуют.",
  },
  {
    id: "4",
    title: "Фраза",
    duration: "~25 сек",
    reward: 12,
    script: "Найди ближайшую заправку на маршруте",
    type: "recording",
    status: "pending",
  },
  {
    id: "5",
    title: "Интервью",
    duration: "~60 сек",
    reward: 25,
    type: "transcription",
    status: "pending",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    metadata: {
      speaker_cross: "Нет",
      language: "Русский",
      accent: "Московский",
    },
  },
  {
    id: "6",
    title: "Команда",
    duration: "~15 сек",
    reward: 8,
    script: "Позвони маме через громкую связь",
    type: "recording",
    status: "completed",
  },
  {
    id: "7",
    title: "Погода",
    duration: "~20 сек",
    reward: 10,
    script: "Какой прогноз погоды на завтра",
    type: "recording",
    status: "available",
  },
  {
    id: "8",
    title: "Записи встречи",
    duration: "~50 сек",
    reward: 22,
    type: "transcription",
    status: "available",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    metadata: {
      speaker_cross: "Да",
      language: "Русский",
      accent: "Казахстанский",
    },
  },
  {
    id: "9",
    title: "Продукт",
    duration: "~35 сек",
    reward: 14,
    script: "Эта умная колонка поддерживает голосовое управление и имеет премиальное качество звука",
    type: "recording",
    status: "available",
  },
  {
    id: "10",
    title: "Пробки",
    duration: "~25 сек",
    reward: 12,
    script: "Покажи альтернативные маршруты чтобы объехать пробки",
    type: "recording",
    status: "available",
  },
  {
    id: "11",
    title: "Подкаст",
    duration: "~55 сек",
    reward: 24,
    type: "transcription",
    status: "available",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    metadata: {
      speaker_cross: "Нет",
      language: "Русский",
      accent: "Алматинский",
    },
  },
  {
    id: "12",
    title: "Будильник",
    duration: "~18 сек",
    reward: 9,
    script: "Поставь будильник на 7 утра завтра",
    type: "recording",
    status: "available",
  },
  {
    id: "13",
    title: "Новости",
    duration: "~22 сек",
    reward: 11,
    script: "Последние новости: технологические достижения в возобновляемой энергетике",
    type: "recording",
    status: "available",
  },
  {
    id: "14",
    title: "Отзыв",
    duration: "~40 сек",
    reward: 18,
    type: "transcription",
    status: "available",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    metadata: {
      speaker_cross: "Да",
      language: "Русский",
      accent: "Казахстанский",
    },
  },
  {
    id: "15",
    title: "Напоминание",
    duration: "~20 сек",
    reward: 10,
    script: "Напомни мне купить продукты в 5 вечера",
    type: "recording",
    status: "available",
  },
  {
    id: "16",
    title: "Рецепт",
    duration: "~30 сек",
    reward: 15,
    script: "Перемешай ингредиенты и выпекай при 180 градусах",
    type: "recording",
    status: "available",
  },
  {
    id: "17",
    title: "Вопросы",
    duration: "~48 сек",
    reward: 21,
    type: "transcription",
    status: "available",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    metadata: {
      speaker_cross: "Нет",
      language: "Русский",
      accent: "Московский",
    },
  },
  {
    id: "18",
    title: "Событие",
    duration: "~24 сек",
    reward: 11,
    script: "Запланируй встречу на понедельник в 14:00",
    type: "recording",
    status: "available",
  },
  {
    id: "19",
    title: "Безопасность",
    duration: "~32 сек",
    reward: 16,
    script: "Всегда надевай ремень безопасности и соблюдай правила дорожного движения",
    type: "recording",
    status: "available",
  },
  {
    id: "20",
    title: "Сообщение",
    duration: "~38 сек",
    reward: 17,
    type: "transcription",
    status: "available",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    metadata: {
      speaker_cross: "Да",
      language: "Русский",
      accent: "Казахстанский",
    },
  },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [transactions, setTransactions] = useState<BalanceTransaction[]>([]);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Derive balance from profile.points
  const balance = profile?.points || 0;

  const addBalance = (amount: number, description: string) => {
    setProfile((prev) =>
      prev ? { ...prev, points: (prev.points || 0) + amount } : null
    );
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "credit",
        amount,
        description,
        date: new Date(),
      },
    ]);
  };

  const deductBalance = (amount: number, description: string) => {
    setProfile((prev) =>
      prev
        ? {
            ...prev,
            points: Math.max(0, (prev.points || 0) - amount),
          }
        : null
    );
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "debit",
        amount,
        description,
        date: new Date(),
      },
    ]);
  };

  const updateTaskStatus = (taskId: string, status: Task["status"]) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  };

  const updateTaskTranscription = (taskId: string, transcription: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, transcription } : task
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        updateProfile: setProfile,
        balance,
        addBalance,
        deductBalance,
        transactions,
        tasks,
        updateTaskStatus,
        updateTaskTranscription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}