import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Edit2, Check, X, TrendingUp, TrendingDown, Coins, Wallet } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

export function Profile() {
  const navigate = useNavigate();
  const { profile, updateProfile, transactions, deductBalance, user } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [isRedeemDialogOpen, setIsRedeemDialogOpen] = useState(false);

  // Edit form state
  const [gender, setGender] = useState(profile?.gender || "");
  const [ageGroup, setAgeGroup] = useState(profile?.ageGroup || "");
  const [firstLanguage, setFirstLanguage] = useState(profile?.firstLanguage || "");
  const [homeState, setHomeState] = useState(profile?.homeState || "");
  const [ethnicity, setEthnicity] = useState(profile?.ethnicity || "");
  const [occupation, setOccupation] = useState(profile?.occupation || "");
  const [recordingDevice, setRecordingDevice] = useState(profile?.recordingDevice || "");

  const handleSave = () => {
    if (!gender || !ageGroup || !firstLanguage || !homeState || !ethnicity || !occupation || !recordingDevice) {
      toast.error("Please fill in all fields");
      return;
    }

    updateProfile({
      gender,
      ageGroup,
      firstLanguage,
      homeState,
      ethnicity,
      occupation,
      recordingDevice,
      agreedToDataProcessing: profile?.agreedToDataProcessing || true,
      points: profile?.points || 0,
    });

    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  const handleCancel = () => {
    // Reset to original values
    setGender(profile?.gender || "");
    setAgeGroup(profile?.ageGroup || "");
    setFirstLanguage(profile?.firstLanguage || "");
    setHomeState(profile?.homeState || "");
    setEthnicity(profile?.ethnicity || "");
    setOccupation(profile?.occupation || "");
    setRecordingDevice(profile?.recordingDevice || "");
    setIsEditing(false);
  };

  const handleRedeemPoints = () => {
    const pointsToRedeem = profile?.points || 0;
    
    if (pointsToRedeem === 0) {
      toast.error("You don't have any points to redeem");
      return;
    }

    // Deduct all points
    deductBalance(pointsToRedeem, "Points redeemed via TnGo Reload Pin");
    
    // Close dialog
    setIsRedeemDialogOpen(false);
    
    // Show success message
    toast.success(
      `Success! The organizer will send a TnGo Reload Pin to ${user?.email || "your email"} shortly.`,
      {
        duration: 6000,
      }
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getDisplayValue = (field: string, value: string) => {
    const valueMap: Record<string, Record<string, string>> = {
      gender: { male: "Мужской", female: "Женский", other: "Другое" },
      ageGroup: {
        "18-24": "18-24 года",
        "25-34": "25-34 года",
        "35-44": "35-44 года",
        "45-54": "45-54 года",
        "55+": "55+ лет",
      },
      firstLanguage: {
        kazakh: "Казахский",
        russian: "Русский",
        uyghur: "Уйгурский",
        uzbek: "Узбекский",
        german: "Немецкий",
        tatar: "Татарский",
        ukrainian: "Украинский",
        korean: "Корейский",
        other: "Другой",
      },
      homeState: {
        "almaty-city": "Алматы",
        "astana-city": "Астана",
        "shymkent-city": "Шымкент",
        akmola: "Акмолинская область",
        aktobe: "Актюбинская область",
        "almaty-region": "Алматинская область",
        atyrau: "Атырауская область",
        "east-kazakhstan": "Восточно-Казахстанская область",
        zhambyl: "Жамбылская область",
        "west-kazakhstan": "Западно-Казахстанская область",
        karaganda: "Карагандинская область",
        kostanay: "Костанайская область",
        kyzylorda: "Кызылординская область",
        mangystau: "Мангистауская область",
        pavlodar: "Павлодарская область",
        "north-kazakhstan": "Северо-Казахстанская область",
        turkestan: "Туркестанская область",
      },
      ethnicity: {
        "no-accent": "Без заметных особенностей",
        "slight-accent": "Небольшой региональный акцент",
        "strong-accent": "Выраженный региональный акцент",
        dialect: "Диалект / местный вариант речи",
        mixed: "Смешанная речь",
        unsure: "Затрудняюсь ответить",
        other: "Другое",
      },
      occupation: {
        healthcare: "Здравоохранение",
        it: "IT и технологии",
        education: "Образование",
        government: "Гос. сектор",
        transportation: "Транспорт и логистика",
        finance: "Финансы и банковское дело",
        retail: "Розничная торговля",
        student: "Студент",
        notEmployed: "В данный момент не работаю",
        other: "Другое",
      },
      recordingDevice: {
        ios: "Смартфон (iOS: модели iPhone)",
        android: "Смартфон (Android: Samsung, Xiaomi, Huawei, Honor и т.д.)",
      },
    };

    return valueMap[field]?.[value] || value;
  };

  // Sort transactions by date (newest first)
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col pb-6">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
          </button>
          <h1 className="text-[18px] font-bold text-[#1A1A1A]">Мой профиль</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <Edit2 className="w-5 h-5 text-gray-600" />
            </button>
          ) : (
            <div className="w-10" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Points Balance Card */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-white/80 text-[14px] font-medium mb-1">
                Текущий баланс
              </p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-white text-[36px] font-bold">
                  {profile?.points || 0}
                </h2>
                <span className="text-white/90 text-[16px] font-semibold">
                  баллов
                </span>
              </div>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Coins className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
            <div>
              <p className="text-white/70 text-[12px]">Заданий выполнено</p>
              <p className="text-white text-[16px] font-semibold">
                {transactions.filter(t => t.type === "credit" && t.description.includes("approved")).length}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-[12px]">На проверке</p>
              <p className="text-white text-[16px] font-semibold">
                {transactions.filter(t => t.description.includes("submitted") || t.description.includes("Under review")).length}
              </p>
            </div>
          </div>

          {/* Redeem Button */}
          <Button
            onClick={() => setIsRedeemDialogOpen(true)}
            disabled={(profile?.points || 0) === 0}
            className="w-full h-12 mt-4 bg-white text-gray-700 hover:bg-white/90 font-semibold text-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Вывести баллы
          </Button>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-[16px] font-bold text-[#1A1A1A] mb-4">
            Личная информация
          </h2>

          {!isEditing ? (
            // View Mode
            <div className="space-y-3">
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Пол</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("gender", profile?.gender || "")}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Возрастная группа</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("ageGroup", profile?.ageGroup || "")}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Родной язык</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("firstLanguage", profile?.firstLanguage || "")}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Регион проживания</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("homeState", profile?.homeState || "")}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Особенности речи</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("ethnicity", profile?.ethnicity || "")}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Род занятий</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("occupation", profile?.occupation || "")}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#757575] mb-1">Устройство записи</p>
                <p className="text-[14px] text-[#1A1A1A]">
                  {getDisplayValue("recordingDevice", profile?.recordingDevice || "")}
                </p>
              </div>
            </div>
          ) : (
            // Edit Mode
            <div className="space-y-4">
              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-[#1A1A1A] text-[12px]">
                  Пол
                </Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger id="gender" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите пол" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Мужской</SelectItem>
                    <SelectItem value="female">Женский</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Age Group */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-[#1A1A1A] text-[12px]">
                  Возрастная группа
                </Label>
                <Select value={ageGroup} onValueChange={setAgeGroup}>
                  <SelectTrigger id="age" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите возраст" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-24">18-24 года</SelectItem>
                    <SelectItem value="25-34">25-34 года</SelectItem>
                    <SelectItem value="35-44">35-44 года</SelectItem>
                    <SelectItem value="45-54">45-54 года</SelectItem>
                    <SelectItem value="55+">55+ лет</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* First Language */}
              <div className="space-y-2">
                <Label htmlFor="language" className="text-[#1A1A1A] text-[12px]">
                  Родной язык
                </Label>
                <Select value={firstLanguage} onValueChange={setFirstLanguage}>
                  <SelectTrigger id="language" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите язык" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kazakh">Казахский</SelectItem>
                    <SelectItem value="russian">Русский</SelectItem>
                    <SelectItem value="uyghur">Уйгурский</SelectItem>
                    <SelectItem value="uzbek">Узбекский</SelectItem>
                    <SelectItem value="german">Немецкий</SelectItem>
                    <SelectItem value="tatar">Татарский</SelectItem>
                    <SelectItem value="ukrainian">Украинский</SelectItem>
                    <SelectItem value="korean">Корейский</SelectItem>
                    <SelectItem value="other">Другой</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Home State */}
              <div className="space-y-2">
                <Label htmlFor="homeState" className="text-[#1A1A1A] text-[12px]">
                  Регион проживания
                </Label>
                <Select value={homeState} onValueChange={setHomeState}>
                  <SelectTrigger id="homeState" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите регион" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="almaty-city">Алматы</SelectItem>
                    <SelectItem value="astana-city">Астана</SelectItem>
                    <SelectItem value="shymkent-city">Шымкент</SelectItem>
                    <SelectItem value="akmola">Акмолинская область</SelectItem>
                    <SelectItem value="aktobe">Актюбинская область</SelectItem>
                    <SelectItem value="almaty-region">Алматинская область</SelectItem>
                    <SelectItem value="atyrau">Атырауская область</SelectItem>
                    <SelectItem value="east-kazakhstan">Восточно-Казахстанская область</SelectItem>
                    <SelectItem value="zhambyl">Жамбылская область</SelectItem>
                    <SelectItem value="west-kazakhstan">Западно-Казахстанская область</SelectItem>
                    <SelectItem value="karaganda">Карагандинская область</SelectItem>
                    <SelectItem value="kostanay">Костанайская область</SelectItem>
                    <SelectItem value="kyzylorda">Кызылординская область</SelectItem>
                    <SelectItem value="mangystau">Мангистауская область</SelectItem>
                    <SelectItem value="pavlodar">Павлодарская область</SelectItem>
                    <SelectItem value="north-kazakhstan">Северо-Казахстанская область</SelectItem>
                    <SelectItem value="turkestan">Туркестанская область</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Ethnicity */}
              <div className="space-y-2">
                <Label htmlFor="ethnicity" className="text-[#1A1A1A] text-[12px]">
                  Особенности речи
                </Label>
                <Select value={ethnicity} onValueChange={setEthnicity}>
                  <SelectTrigger id="ethnicity" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите вариант" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-accent">Без заметных особенностей</SelectItem>
                    <SelectItem value="slight-accent">Небольшой региональный акцент</SelectItem>
                    <SelectItem value="strong-accent">Выраженный региональный акцент</SelectItem>
                    <SelectItem value="dialect">Диалект / местный вариант речи</SelectItem>
                    <SelectItem value="mixed">Смешанная речь</SelectItem>
                    <SelectItem value="unsure">Затрудняюсь ответить</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Occupation */}
              <div className="space-y-2">
                <Label htmlFor="occupation" className="text-[#1A1A1A] text-[12px]">
                  Род занятий
                </Label>
                <Select value={occupation} onValueChange={setOccupation}>
                  <SelectTrigger id="occupation" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите род занятий" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Здравоохранение</SelectItem>
                    <SelectItem value="it">IT и технологии</SelectItem>
                    <SelectItem value="education">Образование</SelectItem>
                    <SelectItem value="government">Гос. сектор</SelectItem>
                    <SelectItem value="transportation">
                      Транспорт и логистика
                    </SelectItem>
                    <SelectItem value="finance">Финансы и банковское дело</SelectItem>
                    <SelectItem value="retail">Розничная торговля</SelectItem>
                    <SelectItem value="student">Студент</SelectItem>
                    <SelectItem value="notEmployed">В данный момент не работаю</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Recording Device */}
              <div className="space-y-2">
                <Label htmlFor="recordingDevice" className="text-[#1A1A1A] text-[12px]">
                  Устройство записи
                </Label>
                <Select value={recordingDevice} onValueChange={setRecordingDevice}>
                  <SelectTrigger id="recordingDevice" className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder="Выберите устройство" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ios">
                      Смартфон (iOS: модели iPhone)
                    </SelectItem>
                    <SelectItem value="android">
                      Смартфон (Android: Samsung, Xiaomi, Huawei, Honor и т.д.)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 h-12 text-[14px] font-semibold border-gray-300 text-[#757575] hover:bg-gray-50"
                >
                  <X className="w-4 h-4 mr-2" />
                  Отмена
                </Button>
                <Button
                  onClick={handleSave}
                  className="flex-1 h-12 text-[14px] font-semibold bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Сохранить
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-[16px] font-bold text-[#1A1A1A] mb-4">
            История баллов
          </h2>

          {sortedTransactions.length > 0 ? (
            <div className="space-y-3">
              {sortedTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        transaction.type === "credit"
                          ? "bg-gray-200"
                          : "bg-gray-100"
                      }`}
                    >
                      {transaction.type === "credit" ? (
                        <TrendingUp className="w-4 h-4 text-gray-700" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-[#757575]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] text-[#1A1A1A] font-medium">
                        {transaction.description}
                      </p>
                      <p className="text-[12px] text-[#757575] mt-1">
                        {formatDate(transaction.date)}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`text-[16px] font-bold flex-shrink-0 ml-3 ${
                      transaction.type === "credit"
                        ? "text-gray-700"
                        : "text-[#757575]"
                    }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-[14px] text-[#757575]">Пока нет транзакций</p>
            </div>
          )}
        </div>
      </div>

      {/* Redeem Confirmation Dialog */}
      <Dialog open={isRedeemDialogOpen} onOpenChange={setIsRedeemDialogOpen}>
        <DialogContent className="max-w-[90%] sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-[18px] font-bold text-[#1A1A1A]">
              Вывод баллов
            </DialogTitle>
            <DialogDescription className="text-[14px] text-[#757575] pt-2">
              Вы собираетесь вывести <span className="font-bold text-gray-700">{profile?.points || 0} баллов</span>.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-[14px] text-blue-900">
                Организатор отправит код пополнения на <span className="font-semibold">{user?.email || "вашу электронную почту"}</span> в течение 1-3 рабочих дней.
              </p>
            </div>
          </div>

          <DialogFooter className="flex-row gap-3 sm:gap-3">
            <Button
              onClick={() => setIsRedeemDialogOpen(false)}
              variant="outline"
              className="flex-1 h-12 text-[14px] font-semibold border-gray-300 text-[#757575] hover:bg-gray-50"
            >
              Отмена
            </Button>
            <Button
              onClick={handleRedeemPoints}
              className="flex-1 h-12 text-[14px] font-semibold bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
            >
              Подтвердить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}