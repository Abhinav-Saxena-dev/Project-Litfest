import write from "./Creative Writing.png";
import debate from "./Debate.png"
import jam from "./English JAM.png";
import hind from "./Abhivyakti.png";


const data = [
    {
        id : 'creative-writing',
        content : [`This is a `, <b>creative writing competition.</b> ,` Registration can be done
        online in the form below. You are required to answer a short questionnaire. You will be shortlisted on the basis of your answers. Shortlisted
        participants will be invited to round 1 to write the alternate ending
        of the series they chose. So choose carefully and bring out the depths of your imagination!`],
        logo : write,
        title_event : "Tell A Tale"
    },
    {
        id : 'debate',
        content : [`This is a `,<b>debate competition</b>,`. A debate is an organized arguement or contest of ideas in which the participants discuss a topic from two opposing sides. For the first round, the participants are required to `, <b>choose one theme</b>, ` from the options in the form provided below. Participants will be merged into groups based on the theme they select. Their stand (For or Against the motion) will be alloted to them before the commencement of Round 1.`],
        logo : debate,
        title_event : "The Controversial Arc"
    },
    {
        id : 'just-a-minute',
        content : [<b>Just-A-Minute</b>, `, or more commonly known as a `,<b>JAM</b>,`, is a competition where a participant's creativity, presence of mind, and command over language is tested, all within a span of one minute. Participants are invited to speak on a given topic without hesitation, repitition, or deviation. Points are awarded to the speakers who speak in adherence to the protocols at set time frames during the speech. But, beware the attentive ears that await your mistake to seize your glory with a mere tap on the table.`],
        logo : jam,
        title_event : "JAM"
    },
    {
        id : 'hindi-jam',
        content : [<b>Just-A-Minute</b>, `, or more commonly known as a `, <b>JAM</b>, ` as a competition where a participants creativity, presence of mind, and command over language is tested all within a span of one minute. In this event, your command over our native tongue will be put to a test. So let your voice soar high, and echo through the hearts of those that wtiness your brilliant charm.`, <br></br>, <b>Note : Participants have to speak solely in Hindi and are not permitted to make use of english in the slightest.</b>],
        logo : hind,
        title_event : "Abhivyakti"
    },
]

export default data;