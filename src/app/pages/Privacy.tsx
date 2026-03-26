import { useNavigate } from "react-router";
import { ArrowLeft, Shield } from "lucide-react";

export function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
          </button>
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#E63946]" />
            <div>
              <h1 className="text-[18px] font-bold text-[#1A1A1A]">
                Политика конфиденциальности
              </h1>
              <p className="text-[12px] text-[#757575]">Құпиялық саясаты</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          {/* Last Updated */}
          <div className="text-[12px] text-[#757575]">
            Последнее обновление: 2 марта 2026 г. / Соңғы жаңарту: 2 наурыз 2026 ж.
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              1. Введение
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, храним и защищаем вашу личную информацию при использовании нашей платформы записи голоса и транскрибации. Мы привержены защите вашей конфиденциальности и ответственному обращению с вашими данными.
            </p>
            <h3 className="text-[16px] font-semibold text-[#757575] mt-3 mb-2">
              1. Кіріспе
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Осы Құпиялық саясаты біздің дауыс жазу және транскрибация платформасын пайдалану кезінде жеке ақпаратыңызды қалай жинайтынымызды, пайдаланатынымызды, сақтайтынымызды және қорғайтынымызды түсіндіреді. Біз сіздің құпиялылығыңызды қорғауға және деректеріңізбен жауапты түрде жұмыс істеуге міндеттіміз.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              2. Собираемая информация
            </h2>
            
            <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2 mt-4">
              2.1 Личная информация
            </h3>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              При регистрации мы собираем:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li>Адрес электронной почты</li>
              <li>Имя (если указано)</li>
              <li>Учетные данные для аутентификации</li>
            </ul>

            <h4 className="text-[14px] font-semibold text-[#757575] mb-2 mt-3">
              2.1 Жеке ақпарат
            </h4>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Тіркелу кезінде біз жинаймыз:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li>Электрондық пошта мекенжайы</li>
              <li>Аты (көрсетілсе)</li>
              <li>Аутентификация деректері</li>
            </ul>

            <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2 mt-4">
              2.2 Профиль информация
            </h3>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Во время онбординга мы собираем демографические данные:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li>Пол и возрастная группа</li>
              <li>Родной язык</li>
              <li>Штат проживания (Малайзия)</li>
              <li>Этническая принадлежность</li>
              <li>Род занятий</li>
              <li>Тип устройства записи (iOS/Android)</li>
            </ul>

            <h4 className="text-[14px] font-semibold text-[#757575] mb-2 mt-3">
              2.2 Профиль ақпараты
            </h4>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Онбординг кезінде біз демографиялық деректерді жинаймыз:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li>Жынысы және жас тобы</li>
              <li>Ана тілі</li>
              <li>Тұрғылықты штаты (Малайзия)</li>
              <li>Этникалық тиістілігі</li>
              <li>Кәсібі</li>
              <li>Жазу құрылғысының түрі (iOS/Android)</li>
            </ul>

            <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2 mt-4">
              2.3 Голосовые записи и транскрипции
            </h3>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы собираем и храним все голосовые записи и транскрипции, которые вы отправляете в рамках выполнения заданий. Эти записи могут содержать биометрические данные вашего голоса.
            </p>

            <h4 className="text-[14px] font-semibold text-[#757575] mb-2 mt-3">
              2.3 Дауыстық жазбалар және транскрипциялар
            </h4>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Біз тапсырмаларды орындау барысында жіберген барлық дауыстық жазбалар мен транскрипцияларды жинаймыз және сақтаймыз. Бұл жазбалар сіздің дауыстық биометриялық деректеріңізді қамтуы мүмкін.
            </p>

            <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2 mt-4">
              2.4 Данные об использовании
            </h3>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы автоматически собираем:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li>Информацию об устройстве и операционной системе</li>
              <li>Тип и версию браузера</li>
              <li>IP-адрес и данные о местоположении</li>
              <li>Время выполнения заданий и паттерны</li>
              <li>Статистику использования приложения</li>
            </ul>

            <h4 className="text-[14px] font-semibold text-[#757575] mb-2 mt-3">
              2.4 Пайдалану деректері
            </h4>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Біз автоматты түрде жинаймыз:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li>Құрылғы және операциялық жүйе туралы ақпарат</li>
              <li>Браузер түрі мен нұсқасы</li>
              <li>IP мекенжайы және орналасу деректері</li>
              <li>Тапсырмаларды орындау уақыты мен үлгілері</li>
              <li>Қолданбаны пайдалану статистикасы</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              3. Как мы используем вашу информацию
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы используем ваши данные для следующих целей:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li>Для предоставления и поддержания наших услуг</li>
              <li>Для обработки отправленных заданий и начисления баллов</li>
              <li>Для обучения и улучшения моделей ИИ/МО для распознавания речи</li>
              <li>Для обеспечения разнообразия и качества данных</li>
              <li>Для связи с вами по поводу вашего аккаунта</li>
              <li>Для обнаружения и предотвращения мошенничества или злоупотреблений</li>
              <li>Для выполнения юридических обязательств</li>
              <li>Для улучшения производительности платформы и пользовательского опыта</li>
            </ul>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-4 mb-2">
              3. Ақпаратыңызды қалай пайдаланамыз
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Біз деректеріңізді келесі мақсаттарда пайдаланамыз:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li>Қызметтерімізді ұсыну және қолдау үшін</li>
              <li>Жіберілген тапсырмаларды өңдеу және ұпайларды есептеу үшін</li>
              <li>Сөйлеуді тану үшін ЖИ/МО модельдерін оқыту және жақсарту үшін</li>
              <li>Деректер әртүрлілігі мен сапасын қамтамасыз ету үшін</li>
              <li>Аккаунтыңыз туралы сізбен байланысу үшін</li>
              <li>Алаяқтық немесе теріс пайдалануды анықтау және болдырмау үшін</li>
              <li>Заңды міндеттемелерді орындау үшін</li>
              <li>Платформа өнімділігі мен пайдаланушы тәжірибесін жақсарту үшін</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              4. Обмен данными и раскрытие информации
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы можем делиться вашей информацией с:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li><strong>Поставщики услуг:</strong> Сторонние компании, которые помогают нам управлять платформой (облачное хранилище, аналитика)</li>
              <li><strong>Партнеры ИИ/МО:</strong> Организации, использующие анонимизированные голосовые данные для обучения моделей</li>
              <li><strong>Правоохранительные органы:</strong> Когда это требуется по закону или для защиты наших прав</li>
            </ul>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mt-3">
              <strong>Важно:</strong> Голосовые записи, передаваемые партнерам по ИИ, анонимизированы и не связаны с вашей личной идентификацией.
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-4 mb-2">
              4. Деректермен алмасу және ақпаратты ашу
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Біз ақпаратыңызды мыналармен бөлісе аламыз:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li><strong>Қызмет жеткізушілер:</strong> Платформаны басқаруға көмектесетін үшінші тарап компаниялар (бұлтты сақтау, аналитика)</li>
              <li><strong>ЖИ/МО серіктестері:</strong> Модельдерді оқыту үшін анонимденген дауыстық деректерді пайдаланатын ұйымдар</li>
              <li><strong>Құқық қорғау органдары:</strong> Заң бойынша талап етілген кезде немесе біздің құқықтарымызды қорғау үшін</li>
            </ul>
            <p className="text-[14px] text-[#757575] leading-relaxed mt-3">
              <strong>Маңызды:</strong> ЖИ серіктестеріне берілетін дауыстық жазбалар анонимденген және сіздің жеке сәйкестілігіңізбен байланыстырылмаған.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              5. Безопасность данных
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы применяем отраслевые стандарты безопасности для защиты ваших данных, включая шифрование при передаче и хранении, безопасную аутентификацию и регулярные аудиты безопасности. Однако ни один метод передачи через Интернет не является на 100% безопасным, и мы не можем гарантировать абсолютную безопасность.
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-3 mb-2">
              5. Деректер қауіпсіздігі
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Біз деректеріңізді қорғау үшін салалық стандарттардың қауіпсіздік шараларын қолданамыз, соның ішінде жіберу және сақтау кезіндегі шифрлау, қауіпсіз аутентификация және тұрақты қауіпсіздік аудиттері. Дегенмен, Интернет арқылы берудің ешбір әдісі 100% қауіпсіз емес және біз абсолютті қауіпсіздікке кепілдік бере алмаймыз.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              6. Хранение данных
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы храним ваши данные следующим образом:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li><strong>Данные аккаунта:</strong> До удаления вами аккаунта</li>
              <li><strong>Голосовые записи:</strong> Бессрочно для целей обучения ИИ (анонимизированные)</li>
              <li><strong>История транзакций:</strong> В течение 7 лет для бухгалтерских целей</li>
              <li><strong>Журналы использования:</strong> В течение 90 дней</li>
            </ul>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-4 mb-2">
              6. Деректерді сақтау
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Біз деректеріңізді келесідей сақтаймыз:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li><strong>Аккаунт деректері:</strong> Аккаунтыңызды жоюға дейін</li>
              <li><strong>Дауыстық жазбалар:</strong> ЖИ оқыту мақсаттары үшін мерзімсіз (анонимденген)</li>
              <li><strong>Транзакциялар тарихы:</strong> Бухгалтерлік мақсаттар үшін 7 жыл бойы</li>
              <li><strong>Пайдалану журналдары:</strong> 90 күн бойы</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              7. Ваши права
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              У вас есть следующие права в отношении ваших персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#1A1A1A] ml-4">
              <li><strong>Доступ:</strong> Запросить копию ваших персональных данных</li>
              <li><strong>Исправление:</strong> Обновить неточную информацию через ваш профиль</li>
              <li><strong>Удаление:</strong> Запросить удаление аккаунта (примечание: анонимизированные записи могут быть сохранены)</li>
              <li><strong>Переносимость:</strong> Запросить ваши данные в машиночитаемом формате</li>
              <li><strong>Отказ:</strong> Отписаться от маркетинговых сообщений</li>
            </ul>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mt-3">
              Чтобы воспользоваться этими правами, свяжитесь с нами по адресу{" "}
              <a href="mailto:privacy@ncspeech.org" className="text-[#E63946] hover:underline">
                privacy@ncspeech.org
              </a>
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-4 mb-2">
              7. Сіздің құқықтарыңыз
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Жеке деректеріңізге қатысты келесі құқықтарыңыз бар:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] text-[#757575] ml-4">
              <li><strong>Қол жеткізу:</strong> Жеке деректеріңіздің көшірмесін сұрау</li>
              <li><strong>Түзету:</strong> Профиліңіз арқылы дәл емес ақпаратты жаңарту</li>
              <li><strong>Жою:</strong> Аккаунтты жоюды сұрау (ескерту: анонимденген жазбалар сақталуы мүмкін)</li>
              <li><strong>Тасымалдау:</strong> Деректеріңізді машинаға оқылатын форматта сұрау</li>
              <li><strong>Бас тарту:</strong> Маркетингтік хабарламалардан бас тарту</li>
            </ul>
            <p className="text-[14px] text-[#757575] leading-relaxed mt-3">
              Осы құқықтарды пайдалану үшін бізге хабарласыңыз{" "}
              <a href="mailto:privacy@ncspeech.org" className="text-[#E63946] hover:underline">
                privacy@ncspeech.org
              </a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              8. Конфиденциальность детей
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Наша платформа не предназначена для лиц младше 18 лет. Мы сознательно не собираем личную информацию от детей. Если вы считаете, что мы собрали данные от несовершеннолетнего, пожалуйста, немедленно свяжитесь с нами.
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-3 mb-2">
              8. Балалар құпиялылығы
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Біздің платформа 18 жасқа толмаған адамдарға арналмаған. Біз балалардан саналы түрде жеке ақпарат жинамаймыз. Егер біз кәмелетке толмаған адамнан деректер жинадық деп ойласаңыз, дереу бізге хабарласыңыз.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              9. Международная передача данных
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Ваши данные могут передаваться и обрабатываться в странах за пределами вашей юрисдикции. Мы обеспечиваем наличие соответствующих мер защиты для защиты ваших данных в соответствии с настоящей Политикой конфиденциальности.
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-3 mb-2">
              9. Халықаралық деректер тасымалдау
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Деректеріңіз сіздің юрисдикцияңыздан тыс елдерге тасымалдануы және өңделуі мүмкін. Біз осы Құпиялық саясатына сәйкес деректеріңізді қорғау үшін тиісті қауіпсіздік шараларының болуын қамтамасыз етеміз.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              10. Cookies и отслеживание
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы используем cookies и аналогичные технологии для поддержания вашей сессии, запоминания ваших предпочтений и анализа использования платформы. Вы можете управлять настройками cookies через браузер, но отключение cookies может повлиять на функциональность платформы.
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-3 mb-2">
              10. Cookies және қадағалау
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Біз сеансыңызды қолдау, параметрлеріңізді есте сақтау және платформаны пайдалануды талдау үшін cookies және ұқсас технологияларды пайдаланамыз. Сіз браузер арқылы cookies параметрлерін басқара аласыз, бірақ cookies өшіру платформа функционалдығына әсер етуі мүмкін.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              11. Изменения в Политике
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              Мы можем периодически обновлять эту Политику конфиденциальности. Мы уведомим вас о значительных изменениях по электронной почте или через уведомление платформы. Продолжение использования платформы означает принятие обновленной политики.
            </p>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-3 mb-2">
              11. Саясатқа өзгерістер
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed">
              Біз осы Құпиялық саясатын мезгіл-мезгіл жаңарта аламыз. Біз маңызды өзгерістер туралы электрондық пошта немесе платформа хабарландыруы арқылы хабардар етеміз. Платформаны пайдалануды жалғастыру жаңартылған саясатты қабылдау дегенді білдіреді.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-3">
              12. Свяжитесь с нами
            </h2>
            <p className="text-[14px] text-[#1A1A1A] leading-relaxed mb-2">
              По вопросам или проблемам, связанным с этой Политикой конфиденциальности или нашими практиками обработки данных, пожалуйста, свяжитесь:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p className="text-[14px] text-[#1A1A1A] mb-1">
                <strong>Команда по конфиденциальности</strong>
              </p>
              <p className="text-[14px] text-[#757575]">
                Email:{" "}
                <a href="mailto:privacy@ncspeech.org" className="text-[#E63946] hover:underline">
                  privacy@ncspeech.org
                </a>
              </p>
            </div>

            <h3 className="text-[16px] font-semibold text-[#757575] mt-4 mb-2">
              12. Бізге хабарласыңыз
            </h3>
            <p className="text-[14px] text-[#757575] leading-relaxed mb-2">
              Осы Құпиялық саясаты немесе біздің деректерді өңдеу тәжірибесі туралы сұрақтар немесе мәселелер бойынша хабарласыңыз:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p className="text-[14px] text-[#757575] mb-1">
                <strong>Құпиялық тобы</strong>
              </p>
              <p className="text-[14px] text-[#757575]">
                Email:{" "}
                <a href="mailto:privacy@ncspeech.org" className="text-[#E63946] hover:underline">
                  privacy@ncspeech.org
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}