```react
import React, { useState } from 'react';
import { 
  Map, 
  Flag, 
  MessageSquare, 
  X, 
  ChevronRight, 
  Calendar, 
  User, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Send,
  ShieldAlert,
  Coins,
  Maximize,
  TrendingUp,
  Landmark
} from 'lucide-react';

export default function PolandDetail() {
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [notes, setNotes] = useState([
    { id: 1, author: "רם", text: "יש להוסיף בהמשך נתונים מדויקים על הפיתוח הכלכלי של פולין בין השנים 2020–2026.", date: "17/05/2026" },
    { id: 2, author: "מערכת", text: "תיקיית המדיה assets/images מוכנה לקליטת קובצי המקור הוויזואליים.", date: "17/05/2026" }
  ]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const noteObj = {
      id: Date.now(),
      author: "רם",
      text: newNote,
      date: new Date().toLocaleDateString('he-IL')
    };
    setNotes([...notes, noteObj]);
    setNewNote("");
  };

  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-slate-950 text-slate-200 font-sans p-4 sm:p-6 pb-24 overflow-x-hidden relative select-none"
    >
      {/* כפתור חזרה עליון */}
      <div className="w-full max-w-xl mx-auto mb-6">
        <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white bg-slate-900 px-4 py-2 rounded-full border border-slate-800 transition-colors shadow-md">
          <ChevronRight size={16} />
          <span>חזרה לאינדקס הבועות</span>
        </button>
      </div>

      <article className="w-full max-w-xl mx-auto space-y-6">
        
        {/* כותרת ראשית */}
        <header className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/50 flex items-center justify-center">
              <Map className="text-red-400" size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">רפובליקת פולין</h1>
              <p className="text-slate-400 text-xs sm:text-sm tracking-wide">Rzeczpospolita Polska • מחקר מדינה מקיף ומורחב</p>
            </div>
          </div>
          <div className="h-0.5 w-16 bg-red-600 rounded-full mt-4"></div>
        </header>

        {/* --- אזור נתונים מהירים (Quick Stats) --- */}
        <section className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:bg-slate-800/80 transition-colors">
            <Calendar size={22} className="text-emerald-400 mb-2" />
            <span className="text-xs text-slate-400 mb-1">שנת ייסוד</span>
            <span className="text-sm sm:text-base font-bold text-slate-200">966 לספירה</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:bg-slate-800/80 transition-colors">
            <Maximize size={22} className="text-blue-400 mb-2" />
            <span className="text-xs text-slate-400 mb-1">שטח כולל</span>
            <span className="text-sm sm:text-base font-bold text-slate-200">312,696 קמ"ר</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:bg-slate-800/80 transition-colors">
            <Users size={22} className="text-purple-400 mb-2" />
            <span className="text-xs text-slate-400 mb-1">אוכלוסייה</span>
            <span className="text-sm sm:text-base font-bold text-slate-200">37.6 מיליון</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:bg-slate-800/80 transition-colors">
            <Coins size={22} className="text-amber-400 mb-2" />
            <span className="text-xs text-slate-400 mb-1">מטבע רשמי</span>
            <span className="text-sm sm:text-base font-bold text-slate-200 flex items-center justify-center gap-1">
              זלוטי פולני <span className="text-amber-400 font-mono text-lg">(zł)</span>
            </span>
          </div>
        </section>

        {/* 1. תצוגה גאוגרפית */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-xl">
          <h2 className="text-sm font-bold text-slate-400 mb-3 flex items-center gap-2">
            <Globe size={16} className="text-blue-400" />
            <span>1. תצוגה גאוגרפית / נופיה של פולין</span>
          </h2>
          <div className="relative w-full aspect-[9/16] max-h-[420px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center text-center p-6 group">
            <img 
              src="./assets/images/poland.jpg" 
              alt="Poland Landscape" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="relative z-10 space-y-2">
              <Map size={40} className="text-slate-600 mx-auto mb-2" />
              <p className="text-xs text-slate-500 font-mono">./assets/images/poland.jpg</p>
              <p className="text-sm text-slate-400 font-medium">מיקום פלייסהולדר לתמונת נוף / מפת פולין</p>
              <p className="text-xs text-slate-500 max-w-xs">התצוגה מותאמת אנכית ברזולוציה גבוהה ומדויקת למסכי סמסונג S25 Ultra</p>
            </div>
          </div>
        </section>

        {/* 2. דגל לאומי רשמי */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-xl">
          <h2 className="text-sm font-bold text-slate-400 mb-3 flex items-center gap-2">
            <Flag size={16} className="text-red-400" />
            <span>2. דגל לאומי רשמי</span>
          </h2>
          <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center text-center p-6 group">
            <img 
              src="./assets/images/flag.jpg" 
              alt="Flag of Poland" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="relative z-10 space-y-2">
              <Flag size={40} className="text-slate-600 mx-auto mb-2" />
              <p className="text-xs text-slate-500 font-mono">./assets/images/flag.jpg</p>
              <p className="text-sm text-slate-400 font-medium">מיקום פלייסהולדר לתמונת הדגל הלאומי</p>
              <p className="text-xs text-slate-500">פרופורציה רשמית בחוקה: 5:8</p>
            </div>
          </div>
        </section>

        {/* 3. חלון הערות ותגובות */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">3. חלון הערות ותגובות למחקר</h3>
            <p className="text-xs text-slate-400">ניהול, מעקב ותיעוד הארות לפרויקט</p>
          </div>
          <button 
            onClick={() => setIsNotesModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-lg transition-all active:scale-95"
          >
            <MessageSquare size={16} />
            <span>פתח תגובות ({notes.length})</span>
          </button>
        </section>

        {/* אטימולוגיה מורחבת */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
          <div className="flex items-center gap-3 mb-4 text-blue-400">
            <BookOpen size={22} />
            <h2 className="text-lg font-bold text-white">אטימולוגיה ומקור השם (Etymology)</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="block font-bold text-blue-300 text-base mb-1">Polanie (פולאנים)</span>
              <p className="text-sm text-slate-300 leading-relaxed">המונח נגזר ישירות משמו של שבט סלאבי מערבי עתיק בשם "הפולאנים", אשר שכן באזור אגן נהר הוורטה (Warta) ההיסטורי שבמרכז-מערב פולין של ימינו. במאה ה-9 וה-10, שבט זה הצליח לאחד בכוח הזרוע ובבריתות פוליטיות את יתר השבטים הסלאביים באזור.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="block font-bold text-blue-300 text-base mb-1">Pole (פולה)</span>
              <p className="text-sm text-slate-300 leading-relaxed">מקור המילה בשפה הפרוטו-סלאבית הקדומה שפירושה "שדה", "מישור לחקלאות" או "שטח פתוח נטול יערות עבותים". השם משקף נאמנה את הגיאוגרפיה והטופוגרפיה המישורית העצומה המאפיינת את רוב שטחה של המדינה.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
              <span className="block font-bold text-blue-300 text-base mb-1">Polonia (פולוניה)</span>
              <p className="text-sm text-slate-300 leading-relaxed">הגרסה הלטינית של השם. התיעוד הכתוב הראשון והמוכר בהיסטוריה של המונח הופיע בסביבות שנת 1000 לספירה, בכרוניקה של יוחנן קנאפריוס המתארת את חייו של אדלברט הקדוש מפרג.</p>
            </div>
            <div className="mt-4 p-4 bg-blue-950/20 border border-blue-900/40 rounded-xl text-sm">
              <span className="font-bold text-blue-200">משמעות השם המלאה: </span>
              <span className="text-slate-300">"ארצם של אנשי השדות" או "העם היושב במישורים". משמעות זו מקפלת בתוכה את הזהות ההיסטורית של עם חקלאי שישב באזור פתוח ומישורי, נטול גבולות טבעיים מובהקים.</span>
            </div>
          </div>
        </section>

        {/* 4. הסבר מקיף ומורחב על דגל פולין */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-4 text-red-400">
            <Flag size={22} />
            <h2 className="text-lg font-bold text-white">4. הסבר מקיף על הדגל הלאומי</h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">מבנה ויזואלי והגדרות חוקיות</h4>
              <p>דגל פולין מורכב משני פסים אופקיים רחבים שווים בגודלם לחלוטין: הפס העליון בצבע לבן והפס התחתון בצבע אדום. היחס הרשמי והחוקי של הדגל, כפי שנקבע סופית בחוקת הרפובליקה הפולנית, הוא בדיוק <strong className="text-white">5:8</strong>. החוק הפולני מגדיר במדויק את הגוונים הסטנדרטיים באמצעות קואורדינטות כרומטיות מחמירות כדי למנוע זיופים: הלבן מוגדר כגוון כסוף מעט (ולא לבן שלג בוהק), והאדום מוגדר כארגמן עמוק (Crimson / Amaranth).</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">הרלדיקה וסמליות הצבעים</h4>
              <p>מקורם של צבעי הדגל אינו אקראי; הוא הרלדי (תורת הסמלים והשלטים העתיקה) לחלוטין, והצבעים נגזרים ישירות מסמל המדינה ההיסטורי המציג עיט לבן ומוכתר על רקע מגן אדום.</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-slate-400 mr-2">
                <li><strong className="text-slate-200">הצבע הלבן (Biel):</strong> מסמל את העיט הלבן האגדי (Orzeł Biały) של שבט הפולאנים. ברמה הערכית, הלבן מייצג טוהר כוונות, שלום, שאיפה רוחנית עליונה, ויושרה חסרת פשרות של האומה הפולנית.</li>
                <li><strong className="text-slate-200">הצבע האדום (Czerwień):</strong> מייצג את רקע המגן של שלט האצולה העתיק. ברמה הערכית, הוא מסמל גבורה עילאית, עוז רוח, אומץ לב בשדה הקרב, ואת הדם הרב שניגר לאורך ההיסטוריה המורכבת של העם הפולני.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">התפתחות היסטורית של הדגל</h4>
              <p>השימוש הראשוני בצבעים אלו כסמל לאומי החל כבר בימי הביניים, כאשר המלכים הפולנים יצאו לקרב כשהם נושאים דגלים אדומים ועליהם רקום עיט לבן. במאה ה-16, בתקופת האיחוד הפולני-ליטאי המפואר, נעשה שימוש בדגל משולש בעל פסים אדום-לבן-אדום ששילב את סמלי פולין וליטא יחדיו.</p>
              <p className="mt-2">האימוץ הרשמי של שני פסי הלבן והאדום כצבעים הלאומיים התרחש ב-<strong className="text-white">7 בפברואר 1831</strong> על ידי ה"סיים" (הפרלמנט הפולני) במהלך "מרד נובמבר" העקוב מדם נגד האימפריה הרוסית. לאחר שפולין זכתה מחדש בעצמאותה ב-1918, אישר הפרלמנט רשמית את הדגל במתכונתו הנוכחית ב-1 באוגוסט 1919.</p>
            </div>
          </div>
        </section>

        {/* --- הכלכלה הפולנית (תוספת חדשה ומורחבת) --- */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <TrendingUp size={22} />
            <h2 className="text-lg font-bold text-white">5. כלכלת פולין: מ"טיפול בהלם" למעצמה אזורית</h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-300 text-justify">
            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">הנס הכלכלי שלאחר הקומוניזם</h4>
              <p>
                עם שחרור פולין מכבלי הגוש הסובייטי בשנת 1989, המדינה הייתה נתונה במשבר כלכלי חמור, עם היפר-אינפלציה ותעשייה מיושנת. הכלכלן לשק בלצרוביץ' הוביל תוכנית "טיפול בהלם" (תוכנית בלצרוביץ') שהעבירה את פולין בחדות מכלכלה מתוכננת לכלכלת שוק חופשי קפיטליסטית. למרות כאב חברתי קצר-טווח, המהלך הוביל ל"נס כלכלי". כיום פולין היא הכלכלה ה-6 בגודלה באיחוד האירופי (במונחי תמ"ג ריאלי) ואחת מהצומחות ביותר בעולם בעשורים האחרונים.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">חוסן אסטרטגי ועצמאות תעשייתית</h4>
              <p>
                פולין זכתה למוניטין של חוסן כלכלי יוצא דופן. היא הייתה <strong>המדינה היחידה באיחוד האירופי</strong> שלא נכנסה למיתון כלל במהלך המשבר הפיננסי העולמי של 2008. חוסן זה נובע משוק מקומי גדול (37 מיליון צרכנים), מערכת בנקאות שמרנית ויציבה, וזרימה מאסיבית של תקציבי פיתוח מהאיחוד האירופי שנוצלו לשדרוג תשתיות מקיף.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">מנועי צמיחה ותעשיות מפתח</h4>
              <p>
                כלכלת פולין מגוונת מאוד. התעשיות המרכזיות כוללות ייצור חלקי חילוף לרכב, מכונות כבדות, כימיקלים, עיבוד מזון מתקדם ורהיטים. בעשור האחרון, פולין ביצעה זינוק טכנולוגי אדיר והפכה למוקד עולמי (Hub) של שירותי IT, פיתוח תוכנה, וגיימינג (עם ענקיות מקומיות כמו CD Projekt Red, יוצרת "The Witcher"). ערי פולין מהוות כיום כוח משיכה למרכזי פיתוח של חברות כמו גוגל, מיקרוסופט ואינטל בזכות כוח אדם טכנולוגי זול יחסית למערב, אך משכיל ומיומן ביותר.
              </p>
            </div>
          </div>
        </section>

        {/* --- המטבע הלאומי (תוספת חדשה ומורחבת) --- */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-4 text-amber-400">
            <Landmark size={22} />
            <h2 className="text-lg font-bold text-white">6. המטבע הלאומי: זלוטי פולני (Polski Złoty)</h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-300 text-justify">
            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">אטימולוגיה ומשמעות השם</h4>
              <p>
                המילה <strong>"זלוטי" (Złoty)</strong> פירושה בשפה הפולנית <strong>"זהוב"</strong> או <strong>"עשוי מזהב"</strong>. מקור השם נעוץ בימי הביניים (המאות ה-14 וה-15), תקופה שבה סחרו בפולין במגוון רחב של מטבעות זרים. כדי לעשות סדר, הסוחרים החלו לכנות כל מטבע זהב זר ואיכותי (כגון הדוקאט או הפלורין) במונח הכללי "זלוטי". המטבע מחולק ל-100 <strong>גרוש (Groszy)</strong>, מילה שנגזרה מהמונח הגרמני "Groschen" (שמקורו בלטינית "Grossus") ופירושו "עבה" - תיאור למטבע עבה שערכו היה גבוה ממטבע הדנאר הדק.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">היסטוריה, היפר-אינפלציה ודנומינציה</h4>
              <p>
                הזלוטי המודרני כונן בשנת 1924 לאחר מלחמת העולם הראשונה, כשהוא מחליף את "המארק הפולני" שסבל מאינפלציה חריפה. אולם, האירוע המוניטרי המשמעותי ביותר בעידן המודרני התרחש בשנות ה-90. בעקבות המעבר מקומוניזם לשוק חופשי, פולין חוותה היפר-אינפלציה אדירה. כתוצאה מכך, בשנת 1995 נאלץ הבנק המרכזי לבצע תהליך שחלוף (דנומינציה) של המטבע: 10,000 זלוטי ישנים (PLZ) הומרו ל-1 זלוטי פולני חדש (PLN). שטרות של מיליוני זלוטי הוחלפו לשטרות בעלי ערכים נורמטיביים.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1.5 text-base border-b border-slate-800 pb-1">פולין, הזלוטי וגוש האירו (Euro)</h4>
              <p>
                אף על פי שפולין הצטרפה לאיחוד האירופי בשנת 2004 והיא מחויבת עקרונית בחוקת הצטרפותה לאמץ את מטבע האירו, המדינה שומרת בקנאות על עצמאותה המוניטרית והחליטה להותיר את הזלוטי כמטבעה הבלעדי ללא קביעת תאריך יעד למעבר. 
                <br/><br/>
                החלטה גאופוליטית-כלכלית זו התבררה כמוצלחת: השליטה הבלעדית בשערי הריבית על ידי הבנק הלאומי הפולני (NBP) העניקה לפולין גמישות כלכלית פנומנלית, ואיפשרה לה לפחת את המטבע בעתות משבר כדי לעודד ייצוא - מהלך שהציל את הכלכלה הפולנית מסחרור כלכלי בזמן ששאר מדינות גוש האירו כרעו תחת נטל החובות במשבר של 2008 ובמשבר החוב האירופי שלאחריו.
              </p>
            </div>
          </div>
        </section>

        {/* שנת הקמה והמייסד (רקע) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <section className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
            <span className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
              <Calendar size={18} />
              <span className="text-base">שנת ייסוד / הקמה (רקע)</span>
            </span>
            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p><strong className="text-emerald-300">שנת 966 לספירה.</strong> אירוע המכונה "טבילת פולין".</p>
              <p>בשנה זו בחר השליט הפולני להמיר את דתו לדת הנוצרית הקתולית. צעד שהכניס את פולין למשפחת העמים האירופיים. הוא נישא לדובראווה נסיכה נוצרית מבוהמיה, ובכך חתם ברית פוליטית שהעניקה לפולין לגיטימציה בינלאומית והגנה מפני עילות כיבוש נוצריות של שכניה.</p>
            </div>
          </section>

          <section className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
            <span className="flex items-center gap-2 text-amber-400 font-bold mb-2">
              <User size={18} />
              <span className="text-base">הבונה / המייסד</span>
            </span>
            <div className="space-y-2 text-slate-300 leading-relaxed">
              <p><strong className="text-amber-300">מיישקו הראשון (Mieszko I).</strong> הדוכס הראשון מבית פיאסט.</p>
              <p><strong className="text-slate-400">שנות חיים:</strong> 930–992 לספירה בקירוב.</p>
              <p>מיישקו נחשב לגאון פוליטי וצבאי. הוא הרחיב את גבולות הטריטוריה משמעותית באמצעות כיבוש פומרניה ושלזיה, ואיחד תחת מנהיגותו המרכזית את שבטי המזוביאנים והוויסלאנים אל תוך מדינה סלאבית אחת וחזקה.</p>
            </div>
          </section>
        </div>

        {/* סיבת ההקמה */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-sm">
          <span className="flex items-center gap-2 text-rose-400 font-bold mb-3">
            <Target size={20} />
            <h2 className="text-lg">סיבת ההקמה והמניע הגיאופוליטי</h2>
          </span>
          <p className="text-slate-300 leading-relaxed text-justify">
            איחוד השבטים הסלאביים המערביים על ידי מיישקו הראשון תחת שלטון ריכוזי אחד ודת משותפת לא נבע מסיבות רוחניות בלבד, אלא מתוך אסטרטגיית הישרדות גאופוליטית גאונית: טבילת פולין הוציאה את העוקץ ממסעות הצלב הגרמאניים של האימפריה הרומית הקדושה, העניקה לפולין הגנה ישירה מטעם האפיפיור ברומא, ומיצבה את הרפובליקה המוקדמת ככוח צבאי ומדיני מוכר, עצמאי ולגיטימי כשווה בין שווים באירופה הנוצרית.
          </p>
        </section>

        {/* דמוגרפיה נרחבת */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-sm">
          <span className="flex items-center gap-2 text-cyan-400 font-bold mb-3">
            <Users size={20} />
            <h2 className="text-lg">דמוגרפיה ומבנה חברתי</h2>
          </span>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              <strong className="text-cyan-300">הרכב אתני ודתי:</strong> לאחר השינויים הגיאופוליטיים הדרסטיים של מלחמת העולם השנייה, פולין הפכה לאחת המדינות ההומוגניות באירופה. כיום, למעלה מ-97% מהאוכלוסייה מזדהים כפולנים אתנים, וכ-85% מוגדרים כנוצרים קתולים.
            </p>
            <p>
              <strong className="text-cyan-300">מגמות ואתגרים בני זמננו:</strong> פולין חווה תהליך עיור מהיר. בעשורים האחרונים ניכרת בעיה דמוגרפית של ילודה נמוכה והזדקנות האוכלוסייה, לצד "בריחת מוחות" בעבר. עם זאת, מאז 2022 פולין קלטה למעלה מ-1.5 מיליון פליטים ומהגרים אוקראינים, אשר מספקים זריקת עידוד חיונית לשוק העבודה המקומי.
            </p>
          </div>
        </section>

        {/* היסטוריה ואידאולוגיה */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-sm relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <span className="flex items-center gap-2 text-purple-400 font-bold mb-4 relative z-10">
            <ShieldAlert size={20} />
            <h2 className="text-lg">היסטוריה, אידאולוגיה והישגים</h2>
          </span>
          
          <div className="space-y-5 text-slate-300 leading-relaxed text-justify relative z-10">
            <div>
              <h4 className="font-bold text-white mb-1 border-b border-slate-800 pb-1">האידאולוגיה של "חירות הזהב" ורפובליקת שתי האומות:</h4>
              <p>בשיא כוחה במאות ה-16 וה-17, פולין חברה לליטא ליצירת אימפריה ענקית. האידאולוגיה השולטת הייתה "חירות הזהב" – מערכת דמוקרטית מוקדמת של מעמד האצולה (ה'שלאכטה'). המערכת כללה מלך נבחר, פרלמנט חזק, וזכות "ליברום וטו" לביטול חקיקה. למרות ערכי השוויון שבה, אידאולוגיה זו גרמה לשיתוק פוליטי מוחלט והחלישה את המדינה.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1 border-b border-slate-800 pb-1">תקופת החלוקות ותקומה (1772–1918):</h4>
              <p>בשל חולשתה פולין עברה שלוש חלוקות אכזריות על ידי רוסיה, פרוסיה ואוסטריה. למשך 123 שנים תמימות, פולין נמחקה לחלוטין מהמפה המדינית של אירופה. התרבות והשפה שרדו במחתרת ודרך מרידות עקובות מדם. פולין זכתה בעצמאותה מחדש רק ב-1918 בהנהגתו של יוזף פילסודסקי.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1 border-b border-slate-800 pb-1">סולידריות והישגים נוכחיים:</h4>
              <p>לאחר שנחרבה במלחמת העולם השנייה ונכפה עליה שלטון קומוניסטי סובייטי, הישגה הכביר של פולין המודרנית היה הקמת ארגון "סולידריות" בהנהגת לך ולנסה. אידאולוגיית ההתנגדות הבלתי אלימה שלהם סדקה את חומות הקומוניזם והובילה להפלת המשטר ב-1989. כיום הרפובליקה היא דמוקרטיה יציבה, חברה מרכזית בנאט"ו, ותורמת לעולם מדענים גאונים (כגון מארי קירי) ותרבות עשירה.</p>
            </div>
          </div>
        </section>

      </article>

      {/* חלון נפתח לתגובות */}
      {isNotesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border-t sm:border border-slate-800 w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
            
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
              <div className="flex items-center gap-2 text-blue-400">
                <MessageSquare size={18} />
                <h3 className="font-bold text-white text-base">תגובות והערות מחקר</h3>
              </div>
              <button 
                onClick={() => setIsNotesModalOpen(false)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950/40">
              {notes.map((note) => (
                <div key={note.id} className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800/80 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-blue-400">{note.author}</span>
                    <span className="text-slate-500 font-mono">{note.date}</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">{note.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddNote} className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="הוסף הערה או תובנה חדשה למחקר..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-colors flex items-center justify-center active:scale-95 shadow-md"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}


```

