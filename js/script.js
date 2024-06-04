document.addEventListener('contextmenu', event => event.preventDefault());
const {createApp} = Vue

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            UserActiveIndex: 0,
            sendMessage: '',
            searchUser: '', 
            checkPopUpDeleteMessage: null,
            dateSend: luxon.DateTime.now().toFormat('HH:mm:ss'),
            arrayFrasiPredefinite: ['ciao, Come stai?', 'Hai visto il tempo di oggi?', 'No', 'Veramente bello il mondo visto da qui!', 'Che ne dici di usare il vero WhatsApp invece di parlare da solo?', 'ok', 'Diiiica... Vabbé!', 'un\' attimo e sono subitooo da lei'],
            counterRisposte: 0,
        }
    },
    methods:{
        userActive: function(index){
            this.UserActiveIndex = index;
            this.checkPopUpDeleteMessage = null;
        },
        sendMessages: function(){
            if(this.sendMessage.trim().length > 0){
                let newMessageform = {
                    date: this.dateSend,
                    message: this.sendMessage.trim(),
                    status: 'sent'
                };

                this.contacts[this.UserActiveIndex].messages.push(newMessageform);
                this.sendMessage = '';

                setTimeout(() =>{
                        this.counterRisposte = this.generateNumberRandom();
                        let newMessageformin = {
                            date: this.dateSend,
                            message: this.arrayFrasiPredefinite[this.counterRisposte],
                            status: 'received'
                        };
                        this.contacts[this.UserActiveIndex].messages.push(newMessageformin);
                        
                },1000)
            }
        },
        generateNumberRandom: function(){
            let num = Math.floor(Math.random() * (this.arrayFrasiPredefinite.length -1) + 1) ;
            return num;
        },
        searchUsers: function(user){
            if(user.name.toLowerCase().includes(this.searchUser.toLowerCase())){
                return true;
            }else{
                return false;
            }
        },
        displayDeleteMessage(index){
            if (this.checkPopUpDeleteMessage == index) {
                    this.checkPopUpDeleteMessage = null;
            } else {
                this.checkPopUpDeleteMessage = index;
            }
        },
        deleteMessage: function(index){
            this.contacts[this.UserActiveIndex].messages.splice(index, 1)
            this.checkPopUpDeleteMessage = null;
        },
    },
}).mount('#app')