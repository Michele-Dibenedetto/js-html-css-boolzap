var app = new Vue( {
    el: "#root",
    data: {
        user: {
            nome: 'Michele Di benedetto',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        indexContact: 0,
        newText: "",
        newMessageReceived: "ok",
        searchName: "",
        letterInserted: [],
    },
    methods: {

        selectContact(index) {
            this.indexContact = index;
        },

        sendMessage() {
            this.contacts[this.indexContact].messages.push({
                date: '10/01/2020 15:30:55',
                text: this.newText,
                status: 'sent'
            });
            this.newText = "";
            setTimeout (() => {
                this.contacts[this.indexContact].messages.push({
                    date: '10/01/2020 15:30:55',
                    text: this.newMessageReceived,
                    status: 'received'  
                })
            }, 1000)  
        },

        filterName() {
            this.searchName = this.searchName.charAt(0).toUpperCase() + this.searchName.slice(1).toLowerCase()
            this.letterInserted.push(this.searchName[this.searchName.length -1])
            this.contacts.forEach((element, index) => {
                var nameArrey = element.name.split("");
                var c = 0;
                var flag = true;
                while (c < this.letterInserted.length && flag == true) {
                    if (nameArrey.includes(this.letterInserted[c])) {
                        flag = true;
                    } else {
                        flag = false;
                    }
                    c++;
                }
                if(flag == true) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            })
            if (this.searchName == "") {
                this.letterInserted = [];    
            }
        },
        showActionMessage(index) {
            var show = document.getElementsByClassName("content_action_message")[index];
            show.classList.remove("hidden");
            show.classList.add("show");
        },
        hiddenActionMessage(index) {
            var hidden = document.getElementsByClassName("content_action_message")[index];
            hidden.classList.remove("show");
            hidden.classList.add("hidden");
        },
        deleteMessage(index) {
            this.contacts[this.indexContact].messages.splice(index,1);
        }
    }
})
Vue.config.devtools = true;