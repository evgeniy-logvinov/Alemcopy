import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Mic, Sparkles } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logoImage from "figma:asset/893ab94157a5e8aeb045ea6015e29a915c555244.png";
import logoImage2 from "figma:asset/8dd1b8c27d22f6e01a56a2db491bbd59f8bdff22.png";

export function Onboarding() {
  const navigate = useNavigate();
  const { setProfile, addBalance, profile } = useApp();
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [firstLanguage, setFirstLanguage] = useState("");
  const [homeState, setHomeState] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [recordingDevice, setRecordingDevice] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const hasAddedBonus = useRef(false);

  // Add bonus points after profile is created
  useEffect(() => {
    if (profile && shouldNavigate && !hasAddedBonus.current) {
      hasAddedBonus.current = true;
      addBalance(5, "Profile completion bonus");
      navigate("/consent");
    }
  }, [profile, shouldNavigate, addBalance, navigate]);

  const handleSubmit = () => {
    if (
      !gender ||
      !ageGroup ||
      !firstLanguage ||
      !homeState ||
      !ethnicity ||
      !occupation ||
      !recordingDevice ||
      !agreed
    ) {
      return;
    }

    // Create profile with 0 points initially
    setProfile({
      gender,
      ageGroup,
      firstLanguage,
      homeState,
      ethnicity,
      occupation,
      recordingDevice,
      agreedToDataProcessing: agreed,
      points: 0,
    });

    // Signal that we should navigate after adding bonus
    setShouldNavigate(true);
  };

  const isFormValid =
    gender &&
    ageGroup &&
    firstLanguage &&
    homeState &&
    ethnicity &&
    occupation &&
    recordingDevice &&
    agreed;

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Content */}
      <div className="flex-1 px-6 pt-8 pb-24">
        {/* Logo Placeholders */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden">
            <img src={logoImage} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden">
            <img
              src={logoImage2}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[24px] font-bold text-[#1A1A1A] text-center mb-3 leading-snug px-4">Получи вознаграждение от NCSpeech</h1>

        {/* Subtitle */}
        <p className="text-[16px] text-[#757575] text-center mb-8 leading-relaxed">После регистрации и выполнении нескольких простых микро-задач вас ожидает вознаграждение!</p>

        {/* Form */}
        <div className="space-y-5">
          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-[#1A1A1A]">
              Ваш пол
            </Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger
                id="gender"
                className="h-14 bg-white border-gray-300"
              >
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
            <Label htmlFor="age" className="text-[#1A1A1A]">
              Возрастная группа
            </Label>
            <Select value={ageGroup} onValueChange={setAgeGroup}>
              <SelectTrigger
                id="age"
                className="h-14 bg-white border-gray-300"
              >
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
            <Label htmlFor="language" className="text-[#1A1A1A]">Какой язык вы чаще&nbsp;&nbsp;используете?</Label>
            <Select value={firstLanguage} onValueChange={setFirstLanguage}>
              <SelectTrigger
                id="language"
                className="h-14 bg-white border-gray-300"
              >
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
            <Label htmlFor="homeState" className="text-[#1A1A1A]">В каком регионе вы выросли?</Label>
            <Select value={homeState} onValueChange={setHomeState}>
              <SelectTrigger
                id="homeState"
                className="h-14 bg-white border-gray-300"
              >
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

          {/* Occupation */}
          <div className="space-y-2">
            <Label htmlFor="occupation" className="text-[#1A1A1A]">
              Ваша сфера деятельности
            </Label>
            <Select value={occupation} onValueChange={setOccupation}>
              <SelectTrigger
                id="occupation"
                className="h-14 bg-white border-gray-300"
              >
                <SelectValue placeholder="Выберите сферу деятельности" />
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
                <SelectItem value="notEmployed">
                  В данный момент не работаю
                </SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ethnicity */}
          <div className="space-y-2">
            <Label htmlFor="ethnicity" className="text-[#1A1A1A]">
              Сколько лет опыта работы в выбранной сфере деятельности?
            </Label>
            <Select value={ethnicity} onValueChange={setEthnicity}>
              <SelectTrigger
                id="ethnicity"
                className="h-14 bg-white border-gray-300"
              >
                <SelectValue placeholder="Выберите вариант" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-1">Менее 1 года</SelectItem>
                <SelectItem value="1-3">1-3 года</SelectItem>
                <SelectItem value="3-5">3-5 лет</SelectItem>
                <SelectItem value="5-10">5-10 лет</SelectItem>
                <SelectItem value="more-than-10">Более 10 лет</SelectItem>
                <SelectItem value="not-applicable">Не применимо</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Recording Device */}
          <div className="space-y-2">
            <Label htmlFor="recordingDevice" className="text-[#1A1A1A]">
              Какое устройство вы будете использовать для записи
            </Label>
            <Select value={recordingDevice} onValueChange={setRecordingDevice}>
              <SelectTrigger
                id="recordingDevice"
                className="h-14 bg-white border-gray-300"
              >
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

          {/* Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="agreement"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1 border-gray-400 data-[state=checked]:bg-gray-700 data-[state=checked]:border-gray-700"
            />
            <label
              htmlFor="agreement"
              className="text-[14px] text-[#757575] leading-relaxed cursor-pointer"
            >
              Я согласен на обработку анонимизированных голосовых данных
            </label>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className="w-full h-14 text-[16px] font-semibold bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
          Сохранить и получить 5 баллов
        </Button>
      </div>
    </div>
  );
}