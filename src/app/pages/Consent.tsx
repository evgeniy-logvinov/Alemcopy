import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logoImage from "figma:asset/893ab94157a5e8aeb045ea6015e29a915c555244.png";
import logoImage2 from "figma:asset/8dd1b8c27d22f6e01a56a2db491bbd59f8bdff22.png";

export function Consent() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    if (agreed) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        {/* Logo Placeholders */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden">
            <img src={logoImage} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden">
            <img src={logoImage2} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-[20px] font-bold text-[#1A1A1A] text-center">
          Согласие на запись голоса и условия
        </h1>
        <p className="text-[14px] text-[#757575] text-center mt-1">
          Дауыс жазу келісімі мен шарттары
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-2xl mx-auto px-6 py-6 text-[14px] space-y-6">
          {/* Company Name */}
          <div className="text-center space-y-1">
            <p className="font-semibold text-[#1A1A1A]">Платформа сбора голосовых данных</p>
          </div>

          {/* Introduction */}
          <div className="space-y-2">
            <p className="text-[#1A1A1A]">
              Участвуя в этой программе записи голоса, вы соглашаетесь со следующими условиями. Эти условия обеспечивают юридическую ясность и защищают как вас, так и платформу.
            </p>
            <p className="text-[#757575]">
              Осы дауыс жазу бағдарламасына қатысу арқылы сіз келесі шарттармен келісесіз. Бұл шарттар заңды айқындықты қамтамасыз етеді және сізді де, платформаны да қорғайды.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">1. Цель программы</h2>
            <p className="text-[#1A1A1A]">
              Эта программа собирает голосовые записи и связанные с ними метаданные для разработки, обучения, тестирования и оценки систем искусственного интеллекта, включая автоматическое распознавание речи (ASR) и синтез речи (TTS).
            </p>
            <h2 className="font-semibold text-[#757575]">1. Бағдарламаның мақсаты</h2>
            <p className="text-[#757575]">
              Бұл бағдарлама дауыстық жазбаларды және олармен байланысты метадеректерді жинайды интеллект жүйелерін дамыту, оқыту, тестілеу және бағалау үшін, оның ішінде автоматты сөйлеуді тану (ASR) және сөйлеу синтезі (TTS).
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">2. Требования к участникам</h2>
            <p className="text-[#1A1A1A]">
              Участие ограничено гражданами Казахстана и лицами, которые соглашаются со всеми условиями данного документа.
              <br />
              Вы подтверждаете, что вся предоставленная информация точна и правдива.
            </p>
            <h2 className="font-semibold text-[#757575]">2. Қатысушыларға қойылатын талаптар</h2>
            <p className="text-[#757575]">
              Қатысу осы құжаттың барлық шарттарымен келісетін Қазақстан азаматтарымен шектелген.
              <br />
              Сіз берілген барлық ақпараттың дәл және шын екенін растайсыз.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">3. Согласие на запись и использование вашего голоса</h2>
            <p className="text-[#1A1A1A]">
              Участвуя, вы даете согласие на запись вашего голоса, хранение и обработку аудиоданных, а также анализ ваших записей для разработки ИИ.
              <br />
              Ваши данные могут использоваться в коммерческих и некоммерческих приложениях.
            </p>
            <h2 className="font-semibold text-[#757575]">3. Дауысыңызды жазуға және пайдалануға келісім</h2>
            <p className="text-[#757575]">
              Қатысу арқылы сіз дауысыңызды жазуға, аудио деректерді сақтауға және өңдеуге, сондай-ақ жазбаларыңызды ЖИ дамыту үшін талдауға келісім бересіз.
              <br />
              Сіздің деректеріңіз коммерциялық және коммерциялық емес қолданбаларда пайдаланылуы мүмкін.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">4. Передача прав и собственности</h2>
            <p className="text-[#1A1A1A]">
              После завершения сеанса записи и получения вознаграждения вы соглашаетесь со следующим:
            </p>
            <p className="text-[#1A1A1A] pl-4">
              <strong>4.1 Передача прав</strong>
              <br />
              Вы передаете платформе полное право собственности на ваши записи и связанные с ними метаданные, включая авторские права, права на использование и производные права.
            </p>
            <p className="text-[#1A1A1A] pl-4">
              <strong>4.2 Отказ от претензий</strong>
              <br />
              Вы навсегда отказываетесь от любого права отозвать согласие, любого права на роялти или будущую компенсацию, а также от любых претензий на записи.
            </p>
            <p className="text-[#1A1A1A] pl-4">
              <strong>4.3 Неограниченное использование</strong>
              <br />
              Платформа может использовать, изменять, аннотировать, анализировать, публиковать, лицензировать или распространять ваши записи.
              <br />
              Платформа также может делиться данными с клиентами, партнерами и сторонними поставщиками ИИ.
              <br />
              Данные могут использоваться по всему миру без временных ограничений.
            </p>
            
            <h2 className="font-semibold text-[#757575] mt-3">4. Құқықтар мен меншікті беру</h2>
            <p className="text-[#757575]">
              Жазу сеансын аяқтап және сыйақы алғаннан кейін сіз мыналармен келісесіз:
            </p>
            <p className="text-[#757575] pl-4">
              <strong>4.1 Құқықтарды беру</strong>
              <br />
              Сіз платформаға жазбаларыңыз бен олармен байланысты метадеректерге толық меншік құқығын, оның ішінде авторлық құқықтарды, пайдалану құқықтарын және туынды құқықтарды бересіз.
            </p>
            <p className="text-[#757575] pl-4">
              <strong>4.2 Талаптардан бас тарту</strong>
              <br />
              Сіз келісімді кері қайтарып алу құқығынан, роялти немесе болашақ өтемақы алу құқығынан және жазбаларға қатысты кез келген талаптардан біржола бас тартасыз.
            </p>
            <p className="text-[#757575] pl-4">
              <strong>4.3 Шектеусіз пайдалану</strong>
              <br />
              Платформа жазбаларыңызды пайдалана алады, өзгерте алады, аннотациялай алады, талдай алады, жариялай алады, лицензиялай алады немесе таратуға болады.
              <br />
              Деректер клиенттермен, серіктестермен және үшінші тарап ЖИ провайдерлерімен бөлісілуі мүмкін.
              <br />
              Деректер бүкіл әлемде және уақыт шектеулерінсіз пайдаланылу мүмкін.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">5. Собираемые данные</h2>
            <p className="text-[#1A1A1A]">
              Платформа может собирать аудиозаписи, демографическую информацию (возрастная группа, пол, акцент, регион, язык), информацию об устройстве и технические метаданные, такие как временные метки, оценки качества и псевдонимные идентификаторы говорящих.
              <br />
              Мы не собираем ИИН или конфиденциальные финансовые данные.
            </p>
            <h2 className="font-semibold text-[#757575]">5. Жиналатын деректер</h2>
            <p className="text-[#757575]">
              Платформа аудио жазбаларды, демографиялық ақпаратты (жас тобы, жынысы, акценті, өңірі, тілі), құрылғы туралы ақпаратты және техникалық метадеректерді жинай алады, мысалы уақыт белгілері, сапа бағалары және псевдонимді сөйлеуші идентификаторлары.
              <br />
              Біз ЖСН немесе құпия қаржылық деректерді жинамаймыз.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">6. Вознаграждения и выплаты</h2>
            <p className="text-[#1A1A1A]">
              Вы получите указанное вознаграждение только в том случае, если сеанс записи полностью завершен, записи прошли проверку качества и ваша правомочность подтверждена.
              <br />
              Платформа может отклонить записи, не соответствующие стандартам качества.
            </p>
            <h2 className="font-semibold text-[#757575]">6. Сыйақылар мен төлемдер</h2>
            <p className="text-[#757575]">
              Сіз көрсетілген сыйақыны тек жазу сеансы толық аяқталған, жазбалар сапа тексерісінен өткен және сіздің құқығыңыз расталған жағдайда аласыз.
              <br />
              Платформа сапа стандарттарына сәйкес келмейтін жазбаларды қабылдамауға құқылы.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">7. Отсутствие ответственности</h2>
            <p className="text-[#1A1A1A]">
              Участие является добровольным. Платформа не несет ответственности за любые прямые или косвенные убытки, связанные с процессом записи.
            </p>
            <h2 className="font-semibold text-[#757575]">7. Жауапкершіліктің болмауы</h2>
            <p className="text-[#757575]">
              Қатысу ерікті. Платформа жазу процесімен байланысты кез келген тікелей немесе жанама зиян үшін жауапты емес.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">8. Хранение данных и безопасность</h2>
            <p className="text-[#1A1A1A]">
              Данные могут храниться на серверах платформы или у сторонних провайдеров инфраструктуры в Казахстане или за рубежом.
              <br />
              Данные обрабатываются в соответствии с лучшими практиками безопасности.
            </p>
            <h2 className="font-semibold text-[#757575]">8. Деректерді сақтау және қауіпсіздік</h2>
            <p className="text-[#757575]">
              Деректер платформа серверлерінде немесе үшінші тарап инфрақұрылым провайдерлерінде Қазақстанда немесе шетелде сақталуы мүмкін.
              <br />
              Деректер қауіпсіздіктің үздік тәжірибелеріне сәйкес өңделеді.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">9. Отсутствие права на отзыв после выплаты</h2>
            <p className="text-[#1A1A1A]">
              После выплаты вознаграждения вы не можете запросить удаление ваших записей, поскольку они становятся частью наборов данных для обучения ИИ, которые не могут быть удалены индивидуально.
            </p>
            <h2 className="font-semibold text-[#757575]">9. Төлемнен кейін кері қайтарып алу құқығының болмауы</h2>
            <p className="text-[#757575]">
              Сыйақы төленгеннен кейін сіз жазбаларыңызды жоюды сұрай алмайсыз, өйткені олар жеке түрде жойылмайтын ЖИ оқыту деректер жиынтығының бір бөлігі болады.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#1A1A1A]">10. Контакты</h2>
            <p className="text-[#1A1A1A]">Email: support@platform.kz</p>
            <h2 className="font-semibold text-[#757575]">10. Байланыс</h2>
            <p className="text-[#757575]">Email: support@platform.kz</p>
          </div>

          {/* Acceptance */}
          <div className="space-y-2 bg-[#FFF9F0] border border-[#FFE5CC] rounded-lg p-4">
            <h2 className="font-semibold text-[#1A1A1A]">Принятие условий</h2>
            <p className="text-[#1A1A1A]">
              Выбирая "Да, я согласен" в форме, вы подтверждаете, что понимаете и принимаете все условия, участвуете добровольно, передаете права после выплаты, соответствуете требованиям и вся предоставленная информация правдива.
            </p>
            <h2 className="font-semibold text-[#757575] mt-3">Шарттарды қабылдау</h2>
            <p className="text-[#757575]">
              Нысанда "Иә, мен келісемін" таңдау арқылы сіз барлық шарттарды түсінетініңізді және қабылдайтыныңызды, ерікті түрде қатысатыныңызды, төлемнен кейін құқықтарды беретініңізды, талаптарға сәйкес келетініңізды және барлық берілген ақпарат шындық екенін растайсыз.
            </p>
          </div>

          {/* Legal Documents */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-[14px] text-[#757575] mb-3">
              Для получения дополнительной информации ознакомьтесь с нашими юридическими документами:
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/terms")}
                className="flex-1 h-12 bg-white border-2 border-gray-300 hover:border-[#E63946] hover:text-[#E63946] rounded-lg font-semibold text-[14px] transition-colors"
              >
                Условия использования
              </button>
              <button
                onClick={() => navigate("/privacy")}
                className="flex-1 h-12 bg-white border-2 border-gray-300 hover:border-[#E63946] hover:text-[#E63946] rounded-lg font-semibold text-[14px] transition-colors"
              >
                Политика конфиденциальности
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consentAgreement"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1 border-gray-400 data-[state=checked]:bg-[#E63946] data-[state=checked]:border-[#E63946]"
            />
            <label
              htmlFor="consentAgreement"
              className="text-[14px] text-[#1A1A1A] font-semibold leading-relaxed cursor-pointer"
            >
              Да, я согласен со всеми условиями
              <br />
              <span className="text-[#757575] font-normal">
                Иә, мен барлық шарттармен келісемін
              </span>
            </label>
          </div>

          {/* Button */}
          <Button
            onClick={handleAccept}
            disabled={!agreed}
            className="w-full h-14 text-[16px] font-semibold bg-[#E63946] hover:bg-[#D62836] text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}