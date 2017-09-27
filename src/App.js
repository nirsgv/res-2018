import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Popup from './components/Popup';
import Bkg from './components/Bkg';
import OpeningScreen from './components/OpeninScreen';
import MobileMenuHolder from './components/MobileMenuHolder';
import ScheduleVideoTab from './components/ScheduleVideoTab';
import './style.css';


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
            filter_items:['כל התוכניות', 'ריאליטי', 'דוקו ריאלטי', 'דרמה', 'בידור', 'אקטואליה'],
            filters:['ALL_TAG','REALITY_TAG','DOC_REALITY_TAG','DRAMA_TAG','ENTERTAINMENT_TAG','NEWS_TAG'],
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
                    paragraph: 'תכנית המוזיקה הגדולה בעולם,  בעונה חדשה ומזמינה את הצופים לבמה הכי נוצצת בישראל. השנה התוכנית מקבלת כוח חיזוק, כשלפאנל השופטים עם שירי מימון, עברי לידר ומשה פרץ מצטרף הראפר סבלימינל ואת כולם תכבוש האחת והיחידה, בר רפאלי.',
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
                    paragraph: 'תכנית הריאליטי האהובה בישראל חוזרת לעונה חדשה. כבכל שנה יצאו זוגות למסע מטורף ברחבי העולם, בדרך הם יעברו במדינות אקזוטיות, יאתגרו את עצמם במשימות שקשה לדמיין ולא יפסיקו לחכות על הפגישה עם רון שחר בנקודת הסיום. ',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_race_promo'
                }
                , {
                    id: 3,
                    pop_up_type: 'video_box',
                    label: 'המדרשה',
                    thumb_img: 'img/thumbs/hamidrasha_428x211.jpg',
                    main_img: 'img/full/hamidrasha_693x342.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: 'עונה שנייה לדרמת המתח המצליחה שנמכרה לנטפליקס ומשודרת ב-40 מדינות ולמיליוני צופים בכל רחבי העולם ! בואו לגלות את יהודה לוי כסוכן מוסד קשוח המסתבך עם דעא"ש וארגוני הפשיעה מהעולם התחתון בסדרת איכות שתשאיר אתכם על הקצה. ',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_hamidrasha'
                }
                 , {
                 id: 4,
                 pop_up_type: 'video_box',
                 label: 'ההרמון',
                 thumb_img: 'img/thumbs/harmon_428x211.jpg',
                 main_img: 'img/full/harmon_693x342.jpg',
                 tags: ['DRAMA_TAG'],
                 paragraph: 'מותחן פסיכולוגי בכיכובו של אלון אבוטבול כשבתאי, מנהיג כת מניפולטיבי החי בפוליגמיה עם מספר רב של נשים  וילדיהם המשותפים. ההרמוניה נסדקת כשאחת מנשותיו מנסה להתנתק ממנו ולהפלילו בידי כוחות המשטרה. ',
                 day: '',
                 hour: '',
                 brightcove_ref: 'b2b_reshet13_harmon'
                 }
                , {
                    id: 5,
                    pop_up_type: 'video_box',
                    label: 'שנות ה-80',
                    thumb_img: 'img/thumbs/the_80s_428x211.jpg',
                    main_img: 'img/full/the_80s_693x342.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: 'סדרת הקאלט המצחיקה שכבשה את לב הצופים שלוש עונות ברציפות מתארת  את חייה של משפחת אסייג בטירת הכרמל בשנות השמונים ואת ניסיונותיו של שלום לפרוץ לעולם הבידור. ',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_shnot_hashmonim'
                }, {
                    id: 6,
                    pop_up_type: 'video_box',
                    label: 'נבסו',
                    thumb_img: 'img/thumbs/nebso_428x211_A.jpg',
                    main_img: 'img/full/nebso_693x342_A.jpg',
                    tags: ['ENTERTAINMENT_TAG'],
                    paragraph: '',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_nebso'
                }, {
                    id: 7,
                    pop_up_type: 'video_box',
                    label: 'צביקה הדר',
                    thumb_img: 'img/thumbs/zvi_428x211_A.jpg',
                    main_img: 'img/full/zvi_693x342_A.jpg',
                    tags: ['DRAMA_TAG'],
                    paragraph: '',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_zvika'
                },
                 {
                    id: 8,
                    pop_up_type: 'video_box',
                    label: 'האח הגדול',
                    thumb_img: 'img/thumbs/big_bro_428x211.jpg',
                    main_img: 'img/full/big_bro_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'הריאליטי שמדביק את כל המדינה למסך חוזר בעונה חדשה והפעם כשהדיירים יכנסו לחדר האח הם בעצם יכנסו לחדר האחות גדולה! הבית החדש נבנה ממש בימים אלו ובקרוב ימלאו אותו דיירים נרגשים, מפתיעים ומסקרנים.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_big_brother'
                },
                {
                    id: 9,
                    pop_up_type: 'video_box',
                    label: 'The Voice',
                    thumb_img: 'img/thumbs/the_voice_428x211.jpg',
                    main_img: 'img/full/the_voice_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'תוכנית המוסיקה שבה רק הקול קובע, התחדשה במנטורים, מירי מסיקה ואברהם טל שכבשו את הכיסאות המסתובבים לצדם של אביב גפן ושלומי שבת הוותיקים. בואו ליהנות מרצועת האודישנים הכי מרתקת על המרקע.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_the_voice'

                }, {
                    id: 10,
                    pop_up_type: 'image_box',
                    label: 'מהפכה במטבח',
                    thumb_img: 'img/thumbs/mahapecha_428x211.jpg',
                    main_img: 'img/full/mahapecha_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'אסף גרניט, השף הקשוח שכולנו אוהבים, חוזר למסעדות במשבר, ובעזרת הרבה אמונה ומשמעת  מלמד את בעלי המסעדות את סודות המקצוע ומכוון אותם לדרך הצלחה.',
                    day: 'חמישי',
                    hour: '21:00',
                    brightcove_ref: ''

                }, {
                    id: 11,
                    pop_up_type: 'image_box',
                    label: 'GOT TALENT',
                    thumb_img: 'img/thumbs/got_talent_428x211.jpg',
                    main_img: 'img/full/got_talent_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'תכנית הכישרונות הטובה והמוכרת בעולם ,מגיעה לישראל.  התוכנית מציגה אנשים בעלי כישרון בלתי רגיל ומעניקה לכולם  הזמנות חד פעמית להדהים את השופטים והקהל  ולהיות הכוכב הבא של ישראל. ',
                    day: '',
                    hour: '',
                    brightcove_ref: 'parenthood-six-mothers-season-03-episodes-06_full_uUQYj0vZ'

                }, {
                    id: 12,
                    pop_up_type: 'video_box',
                    label: 'אבודים',
                    thumb_img: 'img/thumbs/avudim_428x211.jpg',
                    main_img: 'img/full/avudim_693x342.jpg',
                    tags: ['DOC_REALITY_TAG'],
                    paragraph: '',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_avudim'


                }, {
                    id: 13,
                    pop_up_type: 'image_box',
                    label: 'הישרדות',
                    thumb_img: 'img/thumbs/survivor_428x211.jpg',
                    main_img: 'img/full/survivor_693x342.jpg',
                    tags: ['REALITY_TAG'],
                    paragraph: 'קבוצה של ישראלים  מכל תחומי החיים והחברה מוצאים את עצמם על אי בודד מהיפים בעולם, כשהם נלחמים על תואר השורד האחרון. התוכנית מזמינה את הצופים לחוויה יוצאת דופן של אתגרים פיזיים וחברתיים, בניתוק מוחלט מהעולם החיצון.',
                    day: '',
                    hour: '',
                    brightcove_ref: 'parenthood-six-mothers-season-03-episodes-06_full_uUQYj0vZ'

                }, {
                    id: 14,
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
                    id: 15,
                    pop_up_type: 'image_box',
                    label: 'קפיצה למחר',
                    thumb_img: 'img/thumbs/jump_428x211.jpg',
                    main_img: 'img/full/jump_693x342.jpg',
                    tags: ['DOC_REALITY_TAG'],
                    paragraph: 'צופית גרנט יחד עם דמויות ידועות  יוצאים למסע בזמן, אל העתיד ,שהם מצפים וחוששים ממנו כאחד. במהלך הסדרה כל אחד מהמשתתפים יוכל להציץ אל דמותו בעתיד, ואולי לקבל החלטות טובות ונכונות יותר לגבי חייו בהווה.',
                    day: '',
                    hour: '',
                    brightcove_ref: ''
                }, {
                    id: 16,
                    pop_up_type: 'video_box',
                    label: 'אקטואליה',
                    thumb_img: 'img/thumbs/actual_428x211_A.jpg',
                    main_img: 'img/full/actual_693x342_A.jpg',
                    tags: ['NEWS_TAG'],
                    paragraph: '',
                    day: '',
                    hour: '',
                    brightcove_ref: 'b2b_reshet13_day_time'
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

/*      let scheduleVideoSwitch = ( this.state.selected_menu_item === 1 )
                    ? <ScheduleVideoTab data={this.state} />
                    : '';*/

/*    let mobMenuSwitch = this.state.mobile_menu_opened
        ?  <MobileMenuHolder data={this.state} setFilter={this.setFilter.bind(this)} setMenu={this.setMenu.bind(this)} closeMobileMenu={this.closeMobileMenu} />
        : '';*/
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
