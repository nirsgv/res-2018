import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Popup from './components/Popup';
import Bkg from './components/Bkg';
import OpeningScreen from './components/OpeninScreen';
import MobileMenuHolder from './components/MobileMenuHolder';
import './style.css';
import PropTypes from 'prop-types';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_menu_opened: false,
            cancelable_anima_class: 'filtered-in-anima',
            opening_screen_active: true,
            opening_screen_fading_out: false,
            selected_menu_item: 0,
            selected_filter_item_txt: "ALL_TAG",
            selected_filter_item_number: 0,
            pop_up_visible: false,
            pop_up_item_id: 0,
            myCounter: 3,
            menu_items:['תכניות','לוח שידורים'],
            filter_items:['כל התוכניות', 'ריאליטי', 'דוקו ריאלטי', 'דוקו', 'דרמה', 'בידור', 'קומדיה', 'Day time'],
            filters:['ALL_TAG','REALITY_TAG','DOC_REALITY_TAG','DOC_TAG','DRAMA_TAG','ENTERTAINMENT_TAG','COMEDY_TAG','DAYTIME_TAG'],
            filtered_by:['ALL_TAG'],
            schedules_presented_video: 'b2b_reshet13_x_factor_promo',
            shows: [
                {
                    id: 1,
                    pop_up_type: 'video_box',
                    label: 'אקס פקטור',
                    thumb_img: 'img/thumbs/xfactor_428x211.jpg',
                    main_img: 'img/full/xfactor_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'תכנית המוזיקה הגדולה בעולם,  בעונה חדשה שמזמינה את הצופים לבמה הכי נוצצת בישראל. השנה התכנית מקבלת כוח חיזוק, כשלפאנל השופטים עם שירי מימון, עברי לידר ומשה פרץ מצטרף הראפר סאבלימינאל, ואת כולם תכבוש האחת והיחידה, בר רפאלי.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_x_factor_promo'

                }, {
                    id: 2,
                    pop_up_type: 'video_box',
                    label: 'המירוץ למיליון',
                    thumb_img: 'img/thumbs/the_amazing_race_428x211.jpg',
                    main_img: 'img/full/the_amazing_race_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'תכנית הריאליטי האהובה בישראל חוזרת לעונה חדשה. כמו כל שנה, יצאו זוגות למסע מטורף ברחבי העולם, בדרך הם יעברו במדינות אקזוטיות, יאתגרו את עצמם במשימות שקשה לדמיין, ולא יפסיקו לחכות לפגישה עם רון שחר בנקודת הסיום. ',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_race_promo'
                }, {
                    id: 3,
                    pop_up_type: 'video_box',
                    label: 'המדרשה',
                    thumb_img: 'img/thumbs/hamidrasha_428x211.jpg',
                    main_img: 'img/full/hamidrasha_693x342.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: 'עונה שנייה לדרמת המתח המצליחה שנמכרה לנטפליקס, משודרת ב-40 מדינות ובה צופים מיליוני אנשים בכל רחבי העולם! בואו לגלות את יהודה לוי כסוכן מוסד קשוח המסתבך עם דעא"ש ועם ארגוני הפשיעה מהעולם התחתון בסדרת איכות שתשאיר אתכם על הקצה.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_hamidrasha'
                } , {
                     id: 4,
                     pop_up_type: 'video_box',
                     label: 'ההרמון',
                     thumb_img: 'img/thumbs/harmon_428x211.jpg',
                     main_img: 'img/full/harmon_693x342.jpg',
                     tags: ['DRAMA_TAG'],
                     paragraph: 'מותחן פסיכולוגי בכיכובו של אלון אבוטבול כשבתאי, מנהיג כת מניפולטיבי החי בפוליגמיה עם מספר רב של נשים  וילדיהם המשותפים. ההרמוניה נסדקת כשאחת מנשותיו מנסה להתנתק ממנו ולהפלילו בידי כוחות המשטרה.',
                     day: '',
                     hour: '',
                     brightcove_ref: 'b2b_reshet13_harmon'
                 }, {
                    id: 5,
                    pop_up_type: 'video_box',
                    label: 'נבסו',
                    thumb_img: 'img/thumbs/Nevsu_428x211_C.jpg',
                    main_img: 'img/full/Nevsu_693x342_C.jpg',
                    tags: ['COMEDY_TAG'],
                    paragraph: 'פרקים חדשים לקומדיה המצליחה שנמכרה לרשת פוקס האמריקאית ומציגה את המפגש בין משפחה ממוצא אתיופי למשפחה ממוצא ישראלי, ההופכות למשפחה ישראלית חדשה אחת.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_nebso'
                }, {
                    id: 6,
                    pop_up_type: 'video_box',
                    label: 'שנות ה-80',
                    thumb_img: 'img/thumbs/the_80s_428x211.jpg',
                    main_img: 'img/full/the_80s_693x342.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: 'סדרת הקאלט המצחיקה שכבשה את לב הצופים שלוש עונות ברציפות מתארת  את חייה של משפחת אסייג בטירת הכרמל בשנות השמונים ואת ניסיונותיו של שלום לפרוץ לעולם הבידור.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_shnot_hashmonim'
                }, {
                    id: 7,
                    pop_up_type: 'video_box',
                    label: 'מחר שבת',
                    thumb_img: 'img/thumbs/zvi_428x211_A.jpg',
                    main_img: 'img/full/zvi_693x342_A.jpg',
                    tags: ['ENTERTAINMENT_TAG'],
                    paragraph: 'צביקה הדר בתכנית האירוח הכי ישראלית על המסך. בכל שבוע צביקה יארח באולפן את מיטב האומנים ואנשי השעה ויחד הם יסכמו בהומור את השבוע שהיה לכולנו.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_zvika'
                }, {
                    id: 8,
                    pop_up_type: 'video_box',
                    label: 'לצבי יש בעיה',
                    thumb_img: 'img/thumbs/zvi_428x211_A.jpg',
                    main_img: 'img/full/zvi_693x342_A.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: 'בואו לראות את צביקה הדר כפי שלא ראיתם אותו מעולם, בסדרה קומית המתכתבת עם חייו האמיתיים: כוכב טלוויזיה ואיש משפחה בן 50 הנמצא בפרשת דרכים מקצועית ובמקביל מנהל את האתגרים שמציבה לו הזוגיות עם אשתו השנייה וילדיהם. ',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_zvika'
                },
                 {
                    id: 9,
                    pop_up_type: 'video_box',
                    label: 'האח הגדול',
                    thumb_img: 'img/thumbs/big_bro_428x211.jpg',
                    main_img: 'img/full/big_bro_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'הריאליטי שמדביק את כל המדינה למסך חוזר בעונה חדשה והפעם כשהדיירים ייכנסו לחדר האח הם בעצם ייכנסו לחדר האחות גדולה! הבית החדש נבנה ממש בימים אלה ובקרוב ימלאו אותו דיירים נרגשים, מפתיעים ומסקרנים.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_big_brother'
                },
                {
                    id: 10,
                    pop_up_type: 'video_box',
                    label: 'The Voice',
                    thumb_img: 'img/thumbs/the_voice_428x211.jpg',
                    main_img: 'img/full/the_voice_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'תכנית המוזיקה שבה רק הקול קובע, התחדשה במנטורים מירי מסיקה ואברהם טל שכבשו את הכיסאות המסתובבים לצדם של אביב גפן ושלומי שבת הוותיקים. בואו ליהנות מרצועת האודישנים המרתקת ביותר על המרקע.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_the_voice'

                }, {
                    id: 11,
                    pop_up_type: 'video_box',
                    label: 'משחקי השף',
                    thumb_img: 'img/thumbs/ChefGames_428x211.jpg',
                    main_img: 'img/full/ChefGames_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'עונה חדשה לריאליטי האוכל שיגרום לכם ללקק את האצבעות. אל השפים אסף גרניט ומושיק רוט מצטרף השף המוערך יוסי שטרית. בואו ליהנות מאודישנים מפתיעים ומקרבות מטבח סוערים עד לגמר הגדול. בהנחיית מירי בוהדנה. ',
                    day: 'חמישי',
                    hour: '21:00',
                    brightcove_ref: 'b2b_reshet13_chef_promo'

                }, {
                    id: 12,
                    pop_up_type: 'image_box',
                    label: 'ISRAEL GOT TALENT',
                    thumb_img: 'img/thumbs/got_talent_428x211.jpg',
                    main_img: 'img/full/got_talent_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'תכנית הכישרונות הטובה והמוכרת בעולם מגיעה לישראל. התכנית מציגה אנשים בעלי כישרון בלתי רגיל ומעניקה לכולם הזמנות חד-פעמית להדהים את השופטים והקהל, ולהיות הכוכב הבא של ישראל.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'parenthood-six-mothers-season-03-episodes-06_full_uUQYj0vZ'

                }, {
                    id: 13,
                    pop_up_type: 'image_box',
                    label: 'מהפכה במטבח',
                    thumb_img: 'img/thumbs/Mahapecha428x211_A.jpg',
                    main_img: 'img/full/Mahepacha_693x342_A.jpg',
                    tags: ['DOC_REALITY_TAG'],
                    paragraph: 'אסף גרניט, השף הקשוח שכולנו אוהבים, חוזר למסעדות במשבר, ובעזרת הרבה אמונה ומשמעת  מלמד את בעלי המסעדות את סודות המקצוע ומכוון אותם לדרך צלחה.',
                    day: 'חמישי',
                    hour: '21:00',
                    brightcove_ref: ''

                }, {
                    id: 14,
                    pop_up_type: 'video_box',
                    label: 'המערכת',
                    thumb_img: 'img/thumbs/Miki_428x211_D.jpg',
                    main_img: 'img/full/Miki_693x342_D.jpg',
                    tags: ['DOC_TAG'],
                    paragraph: "תכנית התחקירים החברתית בהנחיית מיקי חיימוביץ' חוזרת בעונה חדשה ובועטת. בפרקים החדשים מיקי חוקרת נושאים בוערים בסדר היום האזרחי של כולנו ומנסה להביא לשינוי אמיתי. ",
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_hamaharehet'
                }, {
                    id: 15,
                    pop_up_type: 'video_box',
                    label: 'אבודים',
                    thumb_img: 'img/thumbs/avudim_428x211.jpg',
                    main_img: 'img/full/avudim_693x342.jpg',
                    tags: ['DOC_REALITY_TAG'],
                    paragraph: "הסדרה המרגשת חוזרת עם פרקים וסיפורים חדשים והפעם צופית במרוקו וצרפת, מתחקה אחר סיפורה של מרי – שביתה נחטפה ממנה לפני חמישים שנה ושלושת ילדיה נלקחו ממנה כיוון שנחשדה בחטיפה- את כולם היא לא ראתה יותר לעולם.",
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_avudim'
                }, {
                    id: 16,
                    pop_up_type: 'image_box',
                    label: 'הישרדות',
                    thumb_img: 'img/thumbs/survivor_428x211.jpg',
                    main_img: 'img/full/survivor_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'קבוצה של ישראלים  מכל תחומי החיים והחברה מוצאת את עצמה על אי בודד מהיפים בעולם, כשחבריה נלחמים על תואר השורד האחרון. התכנית מזמינה את הצופים לחוויה יוצאת דופן של אתגרים פיזיים וחברתיים בניתוק מוחלט מהעולם החיצון.',
                    day: '',
                    hour: '',
                    brightcove_ref: ''

                }, {
                    id: 17,
                    pop_up_type: 'image_box',
                    label: 'מפלצות קטנות',
                    thumb_img: 'img/thumbs/monsters_428x211.jpg',
                    main_img: 'img/full/monsters_693x342.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: 'הסדרה הכובשת מביאה את סיפורן של ארבע משפחות ישראליות וילדיהם, המגולמים על ידי בובות פרוותיות, שאומרות הכול בלי חשבון,  וכמו בחיים, משאירות את ההורים חסרי אונים מול "המפלצות הקטנות" שלהם.',
                    day: '',
                    hour: '',
                    brightcove_ref: ''

                }, {
                    id: 18,
                    pop_up_type: 'video_box',
                    label: 'העולם הבוקר',
                    thumb_img: 'img/thumbs/HaolamHaboker_428x211_D.jpg',
                    main_img: 'img/full/HaolamHaboker_693x342_D.jpg',
                    tags: ['DAYTIME_TAG'],
                    paragraph: "אברי גלעד הילה קורח, מאיה זיו ואלעד זוהר. תכנית הבוקר המובילה של ישראל, עם כל מה שאתם צריכים לדעת לפני שאתם מתחילים את היום שלכם. אקטואליה, אקטואליה רכה וצבע; עדכון של הנעשה ברשתות החברתיות, הובלת אג'נדות ועוד.",
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_day_time'

                }, {
                    id: 19,
                    pop_up_type: 'image_box',
                    label: 'העולם הבוקר החיים הטובים',
                    thumb_img: 'img/thumbs/Hahaim_Hatovim_428x211.jpg',
                    main_img: 'img/full/Haaim_Hatovim_693x342.jpg',
                    tags: ['DAYTIME_TAG'],
                    paragraph: `קובי מחט , יעל בר זוהר ודנה פאן לוזאן.
תכנית לייף סטייל עם כל מה שפרקטי, חדש, מרגש וכייפי.
כלכלת הבית, בישול, אופנה, סיפורים אישיים מעוררי השראה, תרבות, בידור, הורות, תזונה, בילויים ועוד.`,
                    day: '',
                    hour: '',
                    brightcove_ref: ''

                }, {
                    id: 20,
                    pop_up_type: 'image_box',
                    label: 'פודיז',
                    thumb_img: 'img/thumbs/Foodies_428x211.jpg',
                    main_img: 'img/full/Foodies_693x342.jpg',
                    tags: ['DAYTIME_TAG'],
                    paragraph: `תכנית אירוח קולינארית בשידור חי בהנחיית נועה רוזין שמביאה את כל מה שכדאי לדעת על אוכל ומה שסביבו בארץ, בעולם וברשתות החברתיות.`,
                    day: '',
                    hour: '',
                    brightcove_ref: ''
                }, {
                    id: 21,
                    pop_up_type: 'video_box',
                    label: 'אקטואליות',
                    thumb_img: 'img/thumbs/actoaliot_428x211_A.jpg',
                    main_img: 'img/full/actoaliot_693x342_A.jpg',
                    tags: ['DAYTIME_TAG'],
                    paragraph: 'הנשים הכי חזקות ושנונות על המסך מדברות על אירועי היום בדרך שלא תשמעו בשום תכנית אחרת.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_day_time'
                }, {
                    id: 22,
                    pop_up_type: 'video_box',
                    label: 'לפני החדשות',
                    thumb_img: 'img/thumbs/lifneyHadashot_428x211_A.jpg',
                    main_img: 'img/full/LifneyHadashot_693x342_A.jpg',
                    tags: ['DAYTIME_TAG'],
                    paragraph: 'לוסי האריש ואודי סגל במבט על האקטואליה מזוויות קצת שונות.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_day_time'
                }, {
                    id: 23,
                    pop_up_type: 'video_box',
                    label: 'הצנרת',
                    thumb_img: 'img/thumbs/428x211_D.jpg',
                    main_img: 'img/full/693x342_D.jpg',
                    tags: ['DAYTIME_TAG'],
                    paragraph: 'הצנרת מגזין הרשת בהנחיית גיא לרר במתכונת חדשה.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_day_time'
                }, {
                    id: 24,
                    pop_up_type: 'image_box',
                    label: 'קפיצה למחר',
                    thumb_img: 'img/thumbs/jump_428x211.jpg',
                    main_img: 'img/full/jump_693x342.jpg',
                    tags: ['DOC_REALITY_TAG'],
                    paragraph: 'צופית גרנט יחד עם דמויות ידועות  יוצאת למסע בזמן, אל העתיד. היא וגיבוריה מצפים למה שטומן העתיד בחובו אך גם חוששים ממנו. במהלך הסדרה כל אחד מהמשתתפים יוכל להציץ אל דמותו בעתיד, ואולי לקבל החלטות טובות ונכונות יותר לגבי חייו בהווה.',
                    day: '',
                    hour: '',
                    brightcove_ref: ''
                }, {
                    id: 25,
                    pop_up_type: 'image_box',
                    label: 'הטוב מכולם',
                    thumb_img: 'img/thumbs/HatovMikulam_428x211.jpg',
                    main_img: 'img/full/HatovMikulam_693x342.jpg',
                    tags: ['ENTERTAINMENT_TAG'],
                    paragraph: `בואו לבדוק האם אתם טובים יותר מחוכמת ההמונים! 
אברי גלעד יאתגר אתכם במשחק הטלוויזיה המקורי ביותר על המסך כשלצדו הצוות המנצח: רוסלנה רודינה, טום באום, דודו ארז ומיכל מנור.`,
                    day: '',
                    hour: '',
                    brightcove_ref: ''
                }, {
                    id: 26,
                    pop_up_type: 'image_box',
                    label: 'הכל הולך',
                    thumb_img: 'img/thumbs/HakolHolech_428x211.jpg',
                    main_img: 'img/full/HakolHolech_693x342.jpg',
                    tags: ['ENTERTAINMENT_TAG'],
                    paragraph: `בואו לשחק על במה עקומה! הקומיקאים המצחיקים ביותר והשחקנים המוכשרים ביותר עולים על הבמה - במשחק האלתורים הגדול של ישראל שבו הכול יכול לקרות!`,
                    day: '',
                    hour: '',
                    brightcove_ref: ''
                }
            ]
        };
    }
    componentDidMount() {

    }
    setFilter = (x,i) => {
        this.setState({
            cancelable_anima_class: 'filtered-in-anima'
        });
        this.close_mobile_menu_if_needed();
        let temArr = [];
        temArr.push(x);
        let words = this.state.filters;
        let filteredItem = words.filter( word => word === x);
        this.setState({
            filtered_by:temArr,
            selected_filter_item_txt:filteredItem[0],
            selected_filter_item_number:i

        });
        this.close_mobile_menu_if_needed();

    };
    setMenu = (x) => {
        this.close_mobile_menu_if_needed();
        this.setState({selected_menu_item:x})
        this.close_mobile_menu_if_needed();
    };
    getShow = (x) => {
        const filteredShows = this.state.shows.filter(
            show => show.id === x
        );
        const chosen = filteredShows[0];
        //console.log(chosen.id);
        return chosen;
    };
    openPopup = (x) => {
        if(!this.state.pop_up_visible){
            //console.log(this.getShow(x));
            this.setState({
                pop_up_visible: true,
                pop_up_item_id: x
            })
        }
    };
    openMobileMenu = () => {
        if(!this.state.mobile_menu_opened){
            this.setState({
                mobile_menu_opened: true
            })
        }
    };
    closeMobileMenu = () => {
        if(this.state.mobile_menu_opened){
            this.setState({
                mobile_menu_opened: false
            })
        }
    };
    closePopup = e => (
        this.setState({pop_up_visible: false}));

    closeOpener = e => (
        this.setState({opening_screen_active: false}));


    emptyCancelableTmpClass = e => (
        this.setState({cancelable_anima_class: ''}));

    setCancelableTmpClass = e => (
        this.setState({cancelable_anima_class: 'filtered-in-anima'}));


    close_mobile_menu_if_needed = () => {
        if(this.state.mobile_menu_opened){
            this.setState({
                mobile_menu_opened:false
            });
        }
    };

    render() {
      let popSwitch = this.state.pop_up_visible
                    ? <Popup data={this.state} closePopup={this.closePopup} />
                    : '';

      let openerSwitch = this.state.opening_screen_active
                    ? <OpeningScreen data={this.state} closeOpener={this.closeOpener}/>
                    : '';


      let fixedSwitch = this.state.pop_up_visible ? 'fixed' : '';

      let zIndexSwitch = this.state.pop_up_visible ? 'lower' : '';


        return (
      <div className={`fixedSwitch ${zIndexSwitch}`}>
          <Header data={this.state} setFilter={this.setFilter.bind(this)} setMenu={this.setMenu.bind(this)} openMobileMenu={this.openMobileMenu} />
          <Main data={this.state} openPopup={this.openPopup} emptyCancelableTmpClass={this.emptyCancelableTmpClass} />
          <Bkg data={this.state} />
          <div className={`pop-up-container ${fixedSwitch}`} >
            {popSwitch}
          </div>
          <MobileMenuHolder data={this.state} setFilter={this.setFilter.bind(this)} setMenu={this.setMenu.bind(this)} closeMobileMenu={this.closeMobileMenu} />
          {openerSwitch}
      </div>
    );
  }
}

export default App;

App.propTypes = {
    data: PropTypes.object,
    setFilter: PropTypes.func,
    setMenu: PropTypes.func,
    openMobileMenu: PropTypes.func,
    openPopup: PropTypes.func,
    emptyCancelableTmpClass: PropTypes.func,
    closeMobileMenu: PropTypes.func,
    closeOpener: PropTypes.func,
    className: PropTypes.string
};